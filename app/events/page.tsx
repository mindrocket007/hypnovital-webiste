import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Veranstaltungen',
  description: 'Öffentliche Veranstaltungen, Workshops, Webinare und Online-Programme von hypnovital®.',
}

const events = [
  {
    id: '1',
    title: 'House of Change – Tagesworkshop',
    eventDate: '2026-04-12T09:00:00',
    endTime: '17:00',
    city: 'Zürich',
    country: 'Schweiz',
    venue: 'Raum Zürich (Details nach Anmeldung)',
    type: 'Workshop',
    shortDescription:
      'Erlebe die hypnovital® Methode live: Ein intensiver Tagesworkshop mit Tiefenentspannung, mentalen Übungen und nachhaltigem Transfer in den Alltag.',
    bookingUrl: '/kontakt',
  },
  {
    id: '2',
    title: 'Stressmanagement für Führungskräfte',
    eventDate: '2026-05-08T09:00:00',
    endTime: '13:00',
    city: 'Bern',
    country: 'Schweiz',
    venue: 'Hotel Belle Époque, Bern',
    type: 'Workshop',
    shortDescription:
      'Halbtagesworkshop für Führungskräfte: Mit Hypnose und mentalem Training zu mehr Klarheit, Fokus und Resilienz.',
    bookingUrl: '/kontakt',
  },
  {
    id: '3',
    title: 'Online: Tief entspannen in 4 Wochen',
    eventDate: '2026-06-02T19:00:00',
    endTime: '20:30',
    city: 'Online',
    country: 'Online',
    venue: 'Zoom (Link nach Anmeldung)',
    type: 'Online',
    shortDescription:
      'Vierwöchiges Online-Programm mit wöchentlichen Live-Sessions, Audioprogrammen und persönlichem Support.',
    bookingUrl: '/kontakt',
  },
]

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

export default function EventsPage() {
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
        {events.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Calendar size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-2">Aktuell keine Veranstaltungen geplant</p>
            <p className="text-sm mb-6">Melde dich bei uns – wir informieren dich über kommende Termine.</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
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
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatDate(event.eventDate)}, {event.endTime} Uhr
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {event.city !== 'Online' ? `${event.venue}` : event.venue}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{event.shortDescription}</p>
                  <Link
                    href={event.bookingUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    Anmelden / Mehr Infos <ArrowRight size={14} />
                  </Link>
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
