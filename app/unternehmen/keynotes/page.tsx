import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import InquiryForm from '@/components/forms/InquiryForm'
import { CheckCircle2, Zap, Mic, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Keynotes & Impulsvorträge',
  description: 'Die Faszination des Unterbewusstseins – packend, wissenschaftlich fundiert und mit Live-Elementen. Keynotes und Impulsvorträge von hypnovital®.',
}

export default function KeynotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Unternehmen · Keynotes & Impulsvorträge
          </p>
          <h1 className="text-white font-headline font-black text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
            Keynotes & Impulsvorträge
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            Die Faszination des Unterbewusstseins – packend, wissenschaftlich fundiert, mit Live-Elementen, die Ihr Publikum direkt erleben lassen, wie das Unterbewusstsein funktioniert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#anfrage"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Keynote anfragen
            </Link>
            <Link
              href="/unternehmen/firmenangebote"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Alle Firmenangebote
            </Link>
          </div>
        </div>
      </section>

      {/* Keynote Überblick */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Die Faszination des Unterbewusstseins
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Was wäre, wenn Ihre Mitarbeitenden in einer einzigen Stunde erleben könnten, wie mächtig das Unterbewusstsein ist – und wie man es gezielt nutzt? hypnovital® Keynotes sind mehr als Vorträge: Sie sind Erlebnisse. Mit Live-Hypnose-Elementen, wissenschaftlichen Erkenntnissen und praxisnahen Impulsen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Mic, label: '30 Min bis 4 Stunden', desc: 'Flexibel auf Ihr Event angepasst' },
              { icon: Zap, label: 'Live-Experimente', desc: 'Direkte Erfahrung für das Publikum' },
              { icon: Users, label: 'Ab 10 bis 1000+ Personen', desc: 'Skalierbar für jede Eventgrösse' },
            ].map((item) => (
              <div key={item.label} className="bg-[#f5f5f5] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Themen & Einsatz */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-headline font-bold text-2xl text-gray-900 mb-6">Themen</h3>
            <ul className="space-y-3">
              {[
                'Die Macht der Gedanken – wie Überzeugungen Realität formen',
                'Visualisierung als Erfolgswerkzeug im Alltag',
                'Mentale Programme erkennen und umprogrammieren',
                'Der Einfluss von Sprache auf das Unterbewusstsein',
                'Stress als Programm – und wie man es ändert',
                'Fokus und Flow-Zustände gezielt herbeiführen',
              ].map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-bold text-2xl text-gray-900 mb-6">Geeignet für</h3>
            <ul className="space-y-3">
              {[
                'Kickoff-Events & Jahresauftakte',
                'Sales-Events & Vertriebs-Kickoffs',
                'Leadership Events & Management-Klausuren',
                'Gesundheitstage & Wellbeing-Initiativen',
                'Teamtage & Mitarbeiterevents',
                'Konferenzen & Branchenevents',
              ].map((event) => (
                <li key={event} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Formate */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline font-black text-gray-900 mb-8 text-center">
            Keynote-Formate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { duration: '30–60 Min.', title: 'Impulsvortrag', desc: 'Kompakter, packender Einstieg. Ideal als Eröffnung oder Abschluss Ihres Events. Mit einem Live-Experiment für das Publikum.' },
              { duration: '90–120 Min.', title: 'Keynote', desc: 'Ausführliche Keynote mit mehreren Live-Elementen, interaktiven Elementen und konkreten Take-aways für den Alltag.' },
              { duration: 'bis 4 Std.', title: 'Workshop-Keynote', desc: 'Kombination aus Keynote und Workshop-Elementen. Teilnehmende erarbeiten konkrete persönliche Strategien.' },
            ].map((format) => (
              <div key={format.title} className="bg-[#f5f5f5] rounded-2xl p-6">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">{format.duration}</span>
                <h3 className="font-headline font-bold text-lg text-gray-900 mb-2">{format.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA / Anfrage */}
      <SectionWrapper bg="gray" id="anfrage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Keynote für Ihr Event anfragen
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Teilen Sie uns Datum, Eventformat und Teilnehmerzahl mit – wir melden uns innerhalb von 1–2 Werktagen.
            </p>
          </div>
          <InquiryForm title="Keynote anfragen" context="Keynote & Impulsvortrag" />
        </div>
      </SectionWrapper>
    </>
  )
}
