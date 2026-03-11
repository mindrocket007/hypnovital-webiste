import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { getEvents } from '@/lib/queries'
import { events as staticEvents, allTopics, allCountries } from '@/lib/events-data'

export const metadata: Metadata = {
  title: 'Veranstaltungen',
  description: 'Öffentliche Veranstaltungen, Workshops, Webinare und Online-Programme von hypnovital®.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getMonth(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('de-CH', { month: 'short' })
}

function getDay(dateStr: string) {
  return new Date(dateStr).getDate()
}

function getYear(dateStr: string) {
  return new Date(dateStr).getFullYear()
}

export default async function VeranstaltungenPage({
  searchParams,
}: {
  searchParams: { deliveryMethod?: string; country?: string; topic?: string }
}) {
  const { deliveryMethod, country, topic } = searchParams

  // Sanity-Daten laden, Fallback auf statische Daten
  const sanityEvents = await getEvents()
  const allEvents = sanityEvents.length > 0 ? sanityEvents : staticEvents

  const filtered = allEvents.filter((e: any) => {
    if (deliveryMethod && e.deliveryMethod !== deliveryMethod) return false
    if (country && e.country !== country) return false
    if (topic && e.topic !== topic) return false
    return true
  })

  // Themen dynamisch aus Sanity-Daten + statischen Daten zusammenstellen
  const topics = sanityEvents.length > 0
    ? [...new Set(sanityEvents.map((e: any) => e.topic).filter(Boolean))]
    : allTopics

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Veranstaltungen</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight tracking-tight">
              Veranstaltungen
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Öffentliche Workshops, Webinare und Online-Programme – lerne die hypnovital® Methode persönlich kennen.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white">
        {/* Filter */}
        <div className="bg-[#f5f5f5] rounded-2xl p-6 mb-10">
          <h3 className="font-headline font-bold text-gray-900 mb-4">Filter</h3>
          <form method="get" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Durchführungsart
              </label>
              <select
                name="deliveryMethod"
                defaultValue={deliveryMethod || ''}
                className="w-full px-4 py-2.5 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Online & Vor Ort</option>
                <option value="Online">Online</option>
                <option value="Vor Ort">Vor Ort</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Land
              </label>
              <select
                name="country"
                defaultValue={country || ''}
                className="w-full px-4 py-2.5 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Alle Länder</option>
                {allCountries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Thema
              </label>
              <select
                name="topic"
                defaultValue={topic || ''}
                className="w-full px-4 py-2.5 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Alle Themen</option>
                {(topics as string[]).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-3 flex gap-3">
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Filtern
              </button>
              {(deliveryMethod || country || topic) && (
                <a
                  href="/veranstaltungen"
                  className="px-6 py-2.5 border border-[#eaeaea] text-gray-600 text-sm font-semibold rounded-lg hover:bg-[#f5f5f5] transition-colors"
                >
                  Zurücksetzen
                </a>
              )}
            </div>
          </form>
        </div>

        {/* Ergebnisse */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Calendar size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-2">Keine Veranstaltungen gefunden</p>
            <p className="text-sm mb-4">Probiere einen anderen Filter oder{' '}
              <a href="/veranstaltungen" className="text-primary hover:underline">setze zurück</a>.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-gray-400 mb-2">
              {filtered.length} Veranstaltung{filtered.length !== 1 ? 'en' : ''} gefunden
            </p>
            {filtered.map((event: any) => (
              <div
                key={event._id ?? event.id}
                className="bg-[#f5f5f5] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start"
              >
                {/* Datum-Block */}
                <div className="md:w-28 flex-shrink-0">
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      {getMonth(event.eventDate)}
                    </p>
                    <p className="text-3xl font-black font-headline text-primary">
                      {getDay(event.eventDate)}
                    </p>
                    <p className="text-xs text-gray-400">
                      {getYear(event.eventDate)}
                    </p>
                  </div>
                </div>

                {/* Inhalt */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {event.type && (
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {event.type}
                      </span>
                    )}
                    {event.topic && (
                      <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                        {event.topic}
                      </span>
                    )}
                    {event.deliveryMethod && (
                      <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                        {event.deliveryMethod}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-headline font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatDate(event.eventDate)}
                      {(event.startTime || event.endTime) && (
                        <>, {event.startTime ?? ''}{event.startTime && event.endTime ? ` – ${event.endTime}` : event.endTime ? `bis ${event.endTime}` : ''} Uhr</>
                      )}
                    </span>
                    {event.deliveryMethod === 'Vor Ort' && event.city && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {event.country}, {event.city}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{event.shortDescription}</p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      {event.price && (
                        <span className="text-sm font-bold text-gray-900">{event.price}</span>
                      )}
                      {/* Coach-Vorschau */}
                      {event.coach && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300">·</span>
                          {event.coach.photoUrl ? (
                            <Image
                              src={`${event.coach.photoUrl}?w=48&h=48&fit=crop`}
                              alt={event.coach.name}
                              width={24}
                              height={24}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-primary font-bold text-xs">
                                {event.coach.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <span className="text-xs text-gray-500">{event.coach.name}</span>
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/veranstaltungen/${event.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      Mehr Infos & Anmelden <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="gray">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Kein passender Termin dabei?
          </h2>
          <p className="text-gray-500 mb-8">
            Schreib uns – wir planen regelmässig neue Veranstaltungen und informieren dich gerne über kommende Termine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/programme"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[#eaeaea] text-gray-700 font-semibold rounded-xl hover:bg-white transition-colors"
            >
              Programme ansehen
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
