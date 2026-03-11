import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Mail, Phone, Globe, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { getCoachBySlug } from '@/lib/queries'
import { coaches } from '@/lib/data'
import CoachContactForm from '@/components/coach/CoachContactForm'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const coach = await getCoachBySlug(params.slug)
  if (!coach) return { title: 'Coach nicht gefunden' }
  const url = `https://hypnovital.net/coach/${coach.slug}`
  return {
    title: `${coach.name} – hypnovital Coach`,
    description: coach.shortBio,
    openGraph: {
      title: `${coach.name} – hypnovital Coach`,
      description: coach.shortBio,
      url,
      type: 'profile',
    },
    twitter: {
      card: 'summary',
      title: `${coach.name} – hypnovital Coach`,
      description: coach.shortBio,
    },
    alternates: { canonical: url },
  }
}

export function generateStaticParams() {
  return coaches.map((c) => ({ slug: c.slug }))
}

export default async function CoachProfilePage({ params }: PageProps) {
  const coach = await getCoachBySlug(params.slug)

  if (!coach) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: coach.name,
    url: `https://hypnovital.net/coach/${coach.slug}`,
    description: coach.shortBio,
    jobTitle: 'Zertifizierter hypnovital® Coach',
    worksFor: {
      '@type': 'Organization',
      name: 'hypnovital',
      url: 'https://hypnovital.net',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: coach.city,
      addressCountry: coach.country === 'Schweiz' ? 'CH' : coach.country === 'Deutschland' ? 'DE' : 'AT',
    },
    knowsAbout: coach.specializations,
    ...(coach.email && { email: coach.email }),
    ...(coach.imageUrl && { image: coach.imageUrl.startsWith('/') ? `https://hypnovital.net${coach.imageUrl}` : coach.imageUrl }),
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Back-Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/coach"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} /> Alle Coaches
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              {/* Avatar */}
              <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-5">
                {coach.imageUrl ? (
                  <img src={coach.imageUrl} alt={coach.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-4xl font-black font-headline text-primary">{coach.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              <h1 className="text-xl font-headline font-bold text-gray-900 text-center mb-1">
                {coach.name}
              </h1>
              <p className="flex items-center justify-center gap-1.5 text-sm text-gray-400 mb-6">
                <MapPin size={14} />
                {coach.city}, {coach.country}
              </p>

              {/* Kontaktdaten */}
              <div className="space-y-3 mb-6">
                {coach.email && (
                  <a
                    href={`mailto:${coach.email}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail size={16} className="text-primary" />
                    {coach.email}
                  </a>
                )}
                {coach.phone && (
                  <a
                    href={`tel:${coach.phone}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Phone size={16} className="text-primary" />
                    {coach.phone}
                  </a>
                )}
                {coach.website && (
                  <a
                    href={coach.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Globe size={16} className="text-primary" />
                    Website besuchen
                  </a>
                )}
              </div>

              {/* CTA */}
              {coach.email && (
                <a
                  href="#kontakt"
                  className="block w-full text-center bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Termin anfragen
                </a>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Über */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Über {coach.name}
              </h2>
              {coach.fullBio ? (
                <div className="prose prose-gray text-sm">
                  {/* Bei Sanity-Daten: PortableText-Renderer */}
                  <p className="text-gray-500 leading-relaxed">{coach.shortBio}</p>
                </div>
              ) : (
                <p className="text-gray-500 leading-relaxed">{coach.shortBio}</p>
              )}
            </div>

            {/* Spezialisierungen */}
            {coach.specializations?.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-headline font-bold text-gray-900 mb-4">
                  Spezialisierungen
                </h2>
                <div className="flex flex-wrap gap-2">
                  {coach.specializations.map((s: string) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 text-sm bg-[#f5f5f5] text-gray-700 px-4 py-2 rounded-full"
                    >
                      <CheckCircle2 size={14} className="text-primary" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Angebote */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-headline font-bold text-gray-900 mb-4">Angebote</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Einzel-Coaching', desc: 'Persönliche 1:1-Sessions vor Ort oder online' },
                  ...(coach.offersCorporateWorkshops
                    ? [{ title: 'Firmen-Workshops', desc: 'Massgeschneiderte Programme für Teams' }]
                    : []),
                  { title: 'Gruppen-Workshops', desc: 'Workshops in kleinen Gruppen' },
                  { title: 'Online-Begleitung', desc: 'Begleitung via Video-Call, flexibel & ortsunabhängig' },
                ].map((offer) => (
                  <div key={offer.title} className="bg-[#f5f5f5] rounded-xl p-4">
                    <h4 className="font-bold text-sm text-gray-900 mb-1">{offer.title}</h4>
                    <p className="text-xs text-gray-500">{offer.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kontakt-Formular */}
            {coach.email && (
              <div id="kontakt">
                <CoachContactForm coachEmail={coach.email} coachName={coach.name} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
