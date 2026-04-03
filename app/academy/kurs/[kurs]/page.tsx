import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { getCourseBySlug, courses } from '@/lib/academy-data'
import { products } from '@/lib/data'
import { BookOpen, Clock, Users, ArrowRight, CheckCircle2, Music, Building2, ShoppingCart } from 'lucide-react'
import ParticipantGreeting from '@/components/academy/ParticipantGreeting'
import { PublicOnly } from '@/components/academy/ParticipantSidebar'
import LessonList from '@/components/academy/LessonList'
import LaptopMockup from '@/components/ui/LaptopMockup'

const COURSE_MOCKUP_MAP: Record<string, string> = {
  'stressmanagement-grundlagen': '/images/academy-stress.jpg',
  'rauchfrei-werden': '/images/academy-rauchfrei.jpg',
  'gesund-abnehmen': '/images/academy-abnehmen.jpg',
}

interface Props {
  params: { kurs: string }
}

export async function generateStaticParams() {
  return courses
    .filter((c) => c.isActive)
    .map((c) => ({ kurs: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourseBySlug(params.kurs)
  if (!course) return { title: 'Kurs nicht gefunden' }
  return {
    title: `${course.title} – Academy | hypnovital®`,
    description: course.description,
  }
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.kurs)
  if (!course) notFound()

  const totalMinutes = course.lessons.reduce((sum, l) => {
    const match = l.duration.match(/(\d+)/)
    return sum + (match ? parseInt(match[1]) : 0)
  }, 0)

  const bundledProduct = course.bundledProduct
    ? products.find((p) => p.slug === course.bundledProduct)
    : null

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/academy"
              className="text-primary text-sm font-semibold uppercase tracking-widest hover:text-primary/80 transition-colors"
            >
              Academy
            </Link>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-white mt-3 mb-4 leading-tight">
              {course.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              {course.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                {course.targetAudience}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} />
                {course.lessons.length} Lektionen
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                ca. {totalMinutes} Min. Gesamtdauer
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Lektionen */}
          <div className="lg:col-span-2">
            {/* Personalisierte Begrüssung für Teilnehmende */}
            <ParticipantGreeting courseTitle={course.title} courseSlug={course.slug} />

            {/* Kurs-Mockup */}
            {COURSE_MOCKUP_MAP[course.slug] && (
              <div className="mb-10 max-w-lg mx-auto">
                <LaptopMockup
                  src={COURSE_MOCKUP_MAP[course.slug]}
                  alt={`E-Learning ${course.title}`}
                />
              </div>
            )}

            <h2 className="text-2xl font-headline font-black text-gray-900 mb-6">
              Lektionen
            </h2>
            <LessonList lessons={course.lessons} courseSlug={course.slug} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Kursinfo */}
            <div className="bg-[#f5f5f5] rounded-2xl p-6">
              <h3 className="font-headline font-bold text-gray-900 mb-4">
                Kursübersicht
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lektionen</span>
                  <span className="font-medium text-gray-900">{course.lessons.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Gesamtdauer</span>
                  <span className="font-medium text-gray-900">ca. {totalMinutes} Min.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Quizfragen</span>
                  <span className="font-medium text-gray-900">
                    {course.lessons.reduce((sum, l) => sum + l.quiz.length, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Zielgruppe</span>
                  <span className="font-medium text-gray-900 text-right max-w-[140px]">
                    {course.targetAudience}
                  </span>
                </div>

                {/* Preis nur für öffentliche Besucher */}
                <PublicOnly>
                  <div className="flex justify-between pt-3 border-t border-[#eaeaea]">
                    <span className="text-gray-500">Preis</span>
                    <span className="font-headline font-black text-gray-900 text-lg">€/CHF 48.20</span>
                  </div>
                </PublicOnly>
              </div>
              <div className="flex items-start gap-2 mt-4 pt-4 border-t border-[#eaeaea]">
                <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Direkt auf der hypnovital® Lernplattform – keine externe Software oder Installation nötig.
                </p>
              </div>
            </div>

            {/* Audio-Empfehlung – nur öffentlich */}
            <PublicOnly>
              {bundledProduct && (
                <div className="bg-[#f5f5f5] rounded-2xl p-6 border border-[#eaeaea]">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Music size={18} />
                    <span className="text-sm font-semibold">Empfohlene Ergänzung</span>
                  </div>
                  <h4 className="font-headline font-bold text-gray-900 mb-2">
                    hypnovital® «{bundledProduct.title}»
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    {bundledProduct.shortDescription}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">
                    Für noch tiefere Wirkung empfehlen wir das passende Hypnose-Audio-Programm als Ergänzung zum E-Learning.
                  </p>
                  <Link
                    href={`/audio/${bundledProduct.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Audio-Programm ansehen ({bundledProduct.priceFormatted})
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </PublicOnly>

            {/* CTA Kaufen – nur öffentlich */}
            <PublicOnly>
              <Link
                href="/shop#e-learning"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-[#6aaa22] transition-colors"
              >
                <ShoppingCart size={18} />
                E-Learning kaufen – €/CHF 48.20
              </Link>
            </PublicOnly>

            {/* Firmenkonditionen – nur öffentlich */}
            <PublicOnly>
              <div className="flex items-start gap-3 bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] rounded-2xl px-5 py-4">
                <Building2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Spezialkonditionen für Unternehmen</p>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Volumenpreise ab 10 Teilnehmenden, inkl. Teilnehmer-Tracking und HR-Reporting.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-2 hover:gap-2 transition-all"
                  >
                    Kontakt aufnehmen
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </PublicOnly>
          </div>
        </div>
      </SectionWrapper>

      {/* Beschreibung */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-5">
            Über diesen Kurs
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {course.description}
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
