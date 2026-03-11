import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import InquiryForm from '@/components/forms/InquiryForm'
import { CheckCircle2, TrendingUp, Users, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Für Unternehmen',
  description:
    'Workshops und Coaching-Programme für Unternehmen. Stressmanagement, Resilienz und Führungskräfte-Coaching.',
}

const topics = [
  'Stressmanagement',
  'Resilienz & mentale Stärke',
  'Motivation & Energie',
  'Führung & Kommunikation',
  'Kreativität & Innovation',
  'Change Management',
  'Rauchstopp im Team',
  'Gewichtsreduktion',
]

const packages = [
  {
    name: 'Kompakt-Workshop',
    price: 'ab €/CHF 1\'000',
    duration: '3–4 Stunden',
    description: 'Einmaliger Impuls-Workshop für dein Team. Ideal als Einstieg oder Teamanlass.',
    features: ['1 Thema', 'Bis 15 Personen', 'Vor Ort oder online', 'Nachbereitung inklusive'],
  },
  {
    name: '3-Monatsprogramm',
    price: 'ab €/CHF 4\'800',
    duration: '3 Monate',
    description: 'Nachhaltiges Programm mit monatlichen Sessions, Coaching und Audiomaterial.',
    features: ['3 Workshop-Sessions', 'Individuelle Begleitung', 'Audio-Programme für alle', 'Fortschrittsmessung'],
    highlighted: true,
  },
  {
    name: 'Führungskräfte-Coaching',
    price: '€/CHF 180 / 45 Min.',
    duration: 'flexibel',
    description: 'Individuelles Coaching für Führungspersönlichkeiten. Fokus, Klarheit, Wirkung.',
    features: ['1:1 Coaching', 'Online oder vor Ort', 'Flexible Terminplanung', 'Vertraulich & diskret'],
  },
]

const faqs = [
  {
    q: 'Für wen eignen sich die Workshops?',
    a: 'Unsere Workshops sind für alle Unternehmensgrößen geeignet – vom KMU bis zum Konzern. Wir passen Inhalte und Format auf eure Bedürfnisse an.',
  },
  {
    q: 'Können Workshops online stattfinden?',
    a: 'Ja. Alle Formate sind wahlweise vor Ort oder online verfügbar.',
  },
  {
    q: 'Wie schnell ist ein Workshop umsetzbar?',
    a: 'In der Regel innerhalb von 2–4 Wochen nach der Anfrage.',
  },
  {
    q: 'Gibt es Rabatte bei mehreren Buchungen?',
    a: 'Ja. Bei regelmäßigen Buchungen und längerfristigen Programmen bieten wir attraktive Konditionen an.',
  },
]

export default function UnternehmenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Unternehmen</span>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-white mt-3 mb-5 leading-tight">
              Mentale Gesundheit als Wettbewerbsvorteil
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Investiere in das wichtigste Kapital deines Unternehmens: die mentale Stärke deiner
              Menschen. Mit hypnovital® Workshops und Coaching-Programmen.
            </p>
            <a
              href="#anfrage"
              className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Workshop anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Problem / Lösung */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-5">
              Die Herausforderung
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Stress, Burnout und innere Leere sind in vielen Unternehmen Alltag. Die Folge:
              sinkende Produktivität, erhöhte Fluktuation und steigende Krankheitskosten.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Herkömmliche Massnahmen greifen oft nur an der Oberfläche. Echte Veränderung braucht
              mehr – sie beginnt im Kopf.
            </p>
            <div className="space-y-3">
              {['Reduktion von Stressausfällen', 'Stärkeres Team-Commitment', 'Mehr Energie und Fokus'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Brain size={24} className="text-primary" />, title: 'Mentale Stärke', text: 'Nachhaltige Stressresistenz und emotionale Stabilität' },
              { icon: <TrendingUp size={24} className="text-primary" />, title: 'Höhere Leistung', text: 'Mehr Fokus, Kreativität und Entscheidungsklarheit' },
              { icon: <Users size={24} className="text-primary" />, title: 'Besseres Klima', text: 'Gesündere Kommunikation und stärkerer Zusammenhalt' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-[#f5f5f5] rounded-xl p-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Workshop-Themen */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            Workshop-Themen
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Alle Formate sind massgeschneidert und auf eure Unternehmenssituation zugeschnitten.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <div
              key={topic}
              className="bg-white rounded-xl px-4 py-3.5 text-sm font-medium text-gray-700 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {topic}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pakete */}
      <SectionWrapper bg="white" id="pakete">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            Pakete & Preise
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Wähle das Format, das am besten zu euch passt. Alles ist individuell anpassbar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 flex flex-col ${pkg.highlighted ? 'bg-primary text-white' : 'bg-[#f5f5f5] text-gray-900'}`}
            >
              <h3 className={`font-headline font-bold text-xl mb-1 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-2xl font-black font-headline mb-1 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.price}
              </p>
              <p className={`text-sm mb-4 ${pkg.highlighted ? 'text-white/70' : 'text-gray-400'}`}>
                {pkg.duration}
              </p>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${pkg.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${pkg.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                    <CheckCircle2 size={16} className={pkg.highlighted ? 'text-white' : 'text-primary'} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-black text-gray-900 mb-8 text-center">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Anfrageformular */}
      <SectionWrapper bg="white" id="anfrage">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-headline font-black text-gray-900 mb-3">
              Workshop anfragen
            </h2>
            <p className="text-gray-500">
              Teile uns kurz mit, was euch beschäftigt – wir melden uns innerhalb von 48 Stunden.
            </p>
          </div>
          <InquiryForm title="Anfrage Firmenprogramm" context="Firmenprogramm" />
        </div>
      </SectionWrapper>
    </>
  )
}
