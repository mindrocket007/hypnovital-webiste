import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import CourseCover from '@/components/academy/CourseCover'
import { getCoursesByCategory } from '@/lib/academy-data'
import { BookOpen, Lock, Users, Clock, ArrowRight, GraduationCap, Video, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academy – E-Learning | hypnovital®',
  description:
    'Fundierte E-Learning-Kurse zu Stressmanagement, Resilienz und mentaler Stärke. Für Unternehmen und hypnovital Partner.',
}

export default function AcademyPage() {
  const firmenCourses = getCoursesByCategory('firmen').filter((c) => c.isActive)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Academy
            </span>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-white mt-3 mb-5 leading-tight">
              Wissen, das wirkt.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Fundierte E-Learning-Kurse zu mentaler Gesundheit und Stressmanagement –
              entwickelt von Fachpersonen, ergänzt durch hypnovital® Audio-Programme.
            </p>

            {/* Feature-Badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Video, text: 'Video-Lektionen' },
                { icon: HelpCircle, text: 'Interaktive Quizzes' },
                { icon: GraduationCap, text: 'Inkl. Audio-Programm' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <Icon size={14} className="text-primary" />
                  <span className="text-white/60 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Für Unternehmen */}
      <SectionWrapper bg="white">
        <div className="mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            E-Learning
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-2 mb-3">
            Für Unternehmen
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Praxisnahe Kurse für Mitarbeitende und Führungskräfte. Jeder Kurs enthält
            Video-Lektionen, interaktive Quizzes und ein passendes hypnovital® Audio-Programm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {firmenCourses.map((course) => {
            const totalMinutes = course.lessons.reduce((sum, l) => {
              const match = l.duration.match(/(\d+)/)
              return sum + (match ? parseInt(match[1]) : 0)
            }, 0)

            return (
              <Link
                key={course.slug}
                href={`/academy/kurs/${course.slug}`}
                className="group bg-white rounded-2xl border border-[#eaeaea] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                {/* Course Cover */}
                <CourseCover
                  title={course.title}
                  subtitle={course.subtitle}
                  lessonCount={course.lessons.length}
                />

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {course.description.length > 140 ? course.description.substring(0, 140) + '...' : course.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <BookOpen size={14} />
                      {course.lessons.length} Lektionen
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      ca. {totalMinutes} Min.
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-5">
                    <Users size={14} />
                    {course.targetAudience}
                  </div>

                  {course.bundledProduct && (
                    <div className="flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-xl px-4 py-2.5 mb-5">
                      <GraduationCap size={14} className="text-primary flex-shrink-0" />
                      <span className="text-xs text-gray-600">Inkl. hypnovital® Audio-Programm</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Kurs ansehen
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Für Partner */}
      <SectionWrapper bg="gray">
        <div className="mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Exklusiv
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-2 mb-3">
            Für hypnovital® Partner
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Weiterbildungskurse exklusiv für lizenzierte hypnovital® Partner.
            Vertiefe dein Wissen und erweitere dein Angebot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-[#eaeaea] overflow-hidden opacity-75">
            {/* Locked Cover */}
            <div className="bg-gradient-to-br from-[#0e1e08] to-[#1a3a0e] aspect-[16/9] flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)',
                }} />
              </div>
              <Lock size={32} className="text-white/20 mb-3" />
              <span className="text-white/30 text-sm font-semibold">Exklusiv für Partner</span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-2">
                Partner-Ausbildung
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Vertiefende Weiterbildung in Hypnosetechniken, Kundenführung und
                Geschäftsaufbau – speziell für das hypnovital® Partner-Netzwerk.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#f5f5f5] rounded-xl px-4 py-2.5 text-sm text-gray-500 font-medium">
                <Clock size={14} />
                Demnächst verfügbar
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
