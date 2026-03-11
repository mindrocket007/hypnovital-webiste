import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, CheckCircle2, ArrowLeft, Monitor, Users } from 'lucide-react'
import { getEventBySlug, getEvents } from '@/lib/queries'
import { events as staticEvents } from '@/lib/events-data'
import EventRegistrationForm from '@/components/forms/EventRegistrationForm'

export async function generateStaticParams() {
  const sanityEvents = await getEvents()
  const events = sanityEvents.length > 0 ? sanityEvents : staticEvents
  return events.map((e: any) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = await getEventBySlug(params.slug)
    ?? staticEvents.find((e) => e.slug === params.slug)
  if (!event) return {}
  const url = `https://hypnovital.net/veranstaltungen/${params.slug}`
  return {
    title: event.title,
    description: event.shortDescription,
    openGraph: {
      title: event.title,
      description: event.shortDescription,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.shortDescription,
    },
    alternates: { canonical: url },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = (await getEventBySlug(params.slug))
    ?? staticEvents.find((e) => e.slug === params.slug)

  if (!event) notFound()

  const coach = (event as any).coach ?? null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.shortDescription,
    startDate: event.eventDate,
    url: `https://hypnovital.net/veranstaltungen/${event.slug}`,
    organizer: {
      '@type': 'Organization',
      name: 'hypnovital',
      url: 'https://hypnovital.net',
    },
    ...((event as any).deliveryMethod === 'Online'
      ? { eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode', location: { '@type': 'VirtualLocation', url: 'https://hypnovital.net' } }
      : {
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          location: {
            '@type': 'Place',
            name: (event as any).venue ?? '',
            address: {
              '@type': 'PostalAddress',
              addressLocality: (event as any).city ?? '',
              addressCountry: (event as any).country === 'Schweiz' ? 'CH' : (event as any).country === 'Deutschland' ? 'DE' : 'AT',
            },
          },
        }),
    ...((event as any).price && {
      offers: {
        '@type': 'Offer',
        price: (event as any).price,
        priceCurrency: 'CHF',
        availability: 'https://schema.org/InStock',
        url: `https://hypnovital.net/veranstaltungen/${event.slug}`,
      },
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/veranstaltungen"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Alle Veranstaltungen
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {(event as any).type && (
              <span className="text-xs font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full">
                {(event as any).type}
              </span>
            )}
            {(event as any).topic && (
              <span className="text-xs font-semibold bg-white/10 text-white/70 px-3 py-1 rounded-full">
                {(event as any).topic}
              </span>
            )}
            {(event as any).deliveryMethod && (
              <span className="text-xs font-semibold bg-white/10 text-white/70 px-3 py-1 rounded-full">
                {(event as any).deliveryMethod}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-5 leading-tight tracking-tight">
            {event.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
            {event.shortDescription}
          </p>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Hauptinhalt */}
          <div className="lg:col-span-2">
            {(event as any).detailedDescription && (
              <>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">Um was geht es?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {(event as any).detailedDescription}
                </p>
              </>
            )}

            {(event as any).targetAudience?.length > 0 && (
              <>
                <p className="text-gray-700 font-medium mb-3">Der Workshop richtet sich an Menschen,</p>
                <ul className="space-y-2 mb-8">
                  {(event as any).targetAudience.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {(event as any).content?.length > 0 && (
              <>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">Inhalte</h2>
                <ul className="space-y-3 mb-8">
                  {(event as any).content.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {(event as any).additionalInfo && (
              <div className="bg-[#f5f5f5] rounded-2xl p-6 mb-10">
                <p className="text-gray-700 leading-relaxed mb-4">{(event as any).additionalInfo}</p>
                {(event as any).additionalInfoItems?.length > 0 && (
                  <ul className="space-y-2">
                    {(event as any).additionalInfoItems.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Anmeldeformular */}
            <EventRegistrationForm
              eventTitle={event.title}
              eventDate={event.eventDate}
              eventStartTime={(event as any).startTime ?? ''}
              eventEndTime={(event as any).endTime ?? ''}
              eventVenue={(event as any).venue ?? ''}
              eventDeliveryMethod={(event as any).deliveryMethod ?? ''}
              eventCity={(event as any).city ?? ''}
              eventCountry={(event as any).country ?? ''}
              eventType={(event as any).type ?? ''}
              eventPrice={(event as any).price ?? ''}
            />
          </div>

          {/* Info-Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#f5f5f5] rounded-2xl p-6 sticky top-24">
              <h3 className="font-headline font-bold text-gray-900 mb-5">Details</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Datum</p>
                    <p className="text-sm text-gray-700">{formatDate(event.eventDate)}</p>
                    {((event as any).startTime || (event as any).endTime) && (
                      <p className="text-sm text-gray-500">
                        {(event as any).startTime ?? ''}
                        {(event as any).startTime && (event as any).endTime ? ` – ${(event as any).endTime}` : (event as any).endTime ? `bis ${(event as any).endTime}` : ''}
                        {' '}Uhr
                      </p>
                    )}
                  </div>
                </div>

                {(event as any).deliveryMethod && (
                  <div className="flex items-start gap-3">
                    {(event as any).deliveryMethod === 'Online' ? (
                      <Monitor size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    ) : (
                      <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Durchführung</p>
                      <p className="text-sm text-gray-700">{(event as any).deliveryMethod}</p>
                      {(event as any).deliveryMethod === 'Vor Ort' && (event as any).city && (
                        <p className="text-sm text-gray-500">
                          {(event as any).country}, {(event as any).city}<br />
                          {(event as any).venue}
                        </p>
                      )}
                      {(event as any).deliveryMethod === 'Online' && (event as any).venue && (
                        <p className="text-sm text-gray-500">{(event as any).venue}</p>
                      )}
                    </div>
                  </div>
                )}

                {(event as any).type && (
                  <div className="flex items-start gap-3">
                    <Users size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Format</p>
                      <p className="text-sm text-gray-700">{(event as any).type}</p>
                    </div>
                  </div>
                )}
              </div>

              {(event as any).price && (
                <div className="border-t border-[#eaeaea] pt-5 mb-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Preis</p>
                  <p className="text-2xl font-black font-headline text-gray-900">{(event as any).price}</p>
                  <p className="text-xs text-gray-400 mt-0.5">pro Person, inkl. Unterlagen</p>
                </div>
              )}

              {/* Kursleitung */}
              {coach && (
                <div className="border-t border-[#eaeaea] pt-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Kursleitung</p>
                  <div className="flex flex-col items-center text-center gap-3">
                    {coach.photoUrl ? (
                      <Image
                        src={`${coach.photoUrl}?w=300&h=300&fit=crop`}
                        alt={coach.name}
                        width={120}
                        height={120}
                        className="w-36 h-36 rounded-full object-cover flex-shrink-0"
                      />
                    ) : coach.imageUrl ? (
                      <Image
                        src={coach.imageUrl}
                        alt={coach.name}
                        width={120}
                        height={120}
                        className="w-36 h-36 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-36 h-36 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-4xl">
                          {coach.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{coach.name}</p>
                      <p className="text-xs text-gray-500 leading-snug mt-1">
                        {coach.shortBio ?? coach.title ?? ''}
                      </p>
                      {(coach.profileSlug ?? coach.slug) && (
                        <Link
                          href={`/coach/${coach.profileSlug ?? coach.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-xs font-semibold text-primary border border-primary/30 rounded-lg px-3 py-1.5 hover:bg-primary hover:text-white transition-all"
                        >
                          Kursleiterprofil ansehen →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </SectionWrapper>
    </>
  )
}
