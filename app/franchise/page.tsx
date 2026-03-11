import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import InquiryForm from '@/components/forms/InquiryForm'
import {
  CheckCircle2, BookOpen, Globe, TrendingUp, HeartHandshake,
  Users, Building2, GraduationCap, Star, ArrowRight,
  Briefcase, Lightbulb, Shield, Award, Clock, MapPin,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Franchise – Werde hypnovital® Coach',
  description: 'Baue ein sinnvolles Business als zertifizierter hypnovital® Coach. Bewährtes System, starke Marke, Privat- und Firmenkunden.',
}

// ─── Infografik 1: Marktchance ───────────────────────────────────────────────
function MarktchanceGrafik() {
  // SVG bar chart – viewBox 320×140, bars from bottom baseline y=120
  const bars = [
    { label: '2019', h: 40 },
    { label: '2020', h: 52 },
    { label: '2021', h: 62 },
    { label: '2022', h: 74 },
    { label: '2023', h: 86 },
    { label: '2024', h: 98 },
    { label: '2025', h: 112, highlight: true },
  ]
  const baseline = 120
  const barW = 28
  const gap = 18
  const startX = 14

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Marktentwicklung</p>
      <p className="font-headline font-bold text-gray-900 text-lg mb-4">Coaching & Mental Health – anhaltender Wachstumstrend</p>
      <svg viewBox="0 0 320 140" className="w-full" aria-hidden="true">
        {/* Baseline */}
        <line x1="0" y1={baseline} x2="320" y2={baseline} stroke="#eaeaea" strokeWidth="1" />
        {/* Grid lines */}
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" y1={baseline - y} x2="320" y2={baseline - y} stroke="#f5f5f5" strokeWidth="1" />
        ))}
        {bars.map((b, i) => {
          const x = startX + i * (barW + gap)
          const y = baseline - b.h
          return (
            <g key={b.label}>
              <rect
                x={x} y={y} width={barW} height={b.h}
                rx="4"
                fill={b.highlight ? '#7FBF2F' : '#7FBF2F33'}
              />
              <text
                x={x + barW / 2} y={baseline + 14}
                textAnchor="middle"
                fontSize="9"
                fontWeight={b.highlight ? '700' : '500'}
                fill={b.highlight ? '#7FBF2F' : '#9ca3af'}
              >
                {b.label}
              </text>
              {b.highlight && (
                <text x={x + barW / 2} y={y - 5} textAnchor="middle" fontSize="8" fontWeight="700" fill="#7FBF2F">
                  ↑
                </text>
              )}
            </g>
          )
        })}
      </svg>
      <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#eaeaea]">
        {[
          { label: 'Coaching-Markt DACH', trend: '↑ stark wachsend' },
          { label: 'BGM in Unternehmen', trend: '↑ stark wachsend' },
          { label: 'Mental Health Angebote', trend: '↑ stark wachsend' },
        ].map((item) => (
          <div key={item.label} className="flex-1 min-w-[110px]">
            <p className="text-xs font-semibold text-gray-700">{item.label}</p>
            <p className="text-xs text-primary font-semibold">{item.trend}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-300 mt-3">Illustrative Darstellung des allgemeinen Markttrends im Coaching- und Mental-Health-Bereich (DACH). Kein Anspruch auf statistische Exaktheit.</p>
    </div>
  )
}

// ─── Infografik 2: Einzelkämpfer vs. Netzwerk ────────────────────────────────
const vergleichRows = [
  { thema: 'System & Struktur',    solo: 'Alles selbst aufbauen',          hv: 'Bewährtes System sofort einsatzbereit' },
  { thema: 'Marke & Vertrauen',    solo: 'Von null beginnen',              hv: 'Starke Marke & Reputation inklusive' },
  { thema: 'Marketing',            solo: 'Komplett auf eigene Kosten',     hv: 'Vorlagen, Support & Plattform' },
  { thema: 'Sichtbarkeit',         solo: 'Kaum vorhanden',                 hv: 'Coach-Verzeichnis & Profilseite' },
  { thema: 'Firmenkunden',         solo: 'Schwer zugänglich',              hv: 'Zugang zu B2B-Aufträgen' },
  { thema: 'Netzwerk',             solo: 'Isolation, kein Austausch',      hv: 'Community & laufender Austausch' },
  { thema: 'Fokus',                solo: 'Verzettelung in Administration', hv: 'Fokus auf Menschen & Wirkung' },
]

function NetzwerkVergleich() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#eaeaea]">
      {/* Header */}
      <div className="grid grid-cols-[1fr_1fr_1fr] bg-[#f5f5f5]">
        <div className="px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Bereich</div>
        <div className="px-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest border-l border-[#eaeaea]">
          Einzelkämpfer
        </div>
        <div className="px-4 py-3 text-xs font-bold text-primary uppercase tracking-widest border-l border-[#eaeaea] bg-primary/5">
          hypnovital® Coach
        </div>
      </div>
      {/* Rows */}
      {vergleichRows.map((row, i) => (
        <div
          key={row.thema}
          className={`grid grid-cols-[1fr_1fr_1fr] ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}
        >
          <div className="px-4 py-3.5 text-sm font-semibold text-gray-700 border-t border-[#eaeaea]">
            {row.thema}
          </div>
          <div className="px-4 py-3.5 border-l border-t border-[#eaeaea] flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-gray-400 text-[10px] font-bold leading-none">✕</span>
            </span>
            <span className="text-sm text-gray-400">{row.solo}</span>
          </div>
          <div className="px-4 py-3.5 border-l border-t border-[#eaeaea] bg-primary/5 flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle2 size={10} className="text-white" />
            </span>
            <span className="text-sm text-gray-700 font-medium">{row.hv}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Infografik 3: System-Übersicht ──────────────────────────────────────────
function SystemGrafik() {
  const spokes = [
    { label: 'Marke & Identität', icon: '◈' },
    { label: 'hypnovital Academy', icon: '◎' },
    { label: 'Methode & Zertifizierung', icon: '◉' },
    { label: 'Marketing & Sichtbarkeit', icon: '◈' },
    { label: 'Community & Netzwerk', icon: '◎' },
    { label: 'Firmenkunden-Zugang', icon: '◉' },
    { label: 'Privatkundenprogramme', icon: '◈' },
    { label: 'Support & Begleitung', icon: '◎' },
  ]
  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-8">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Das hypnovital System</p>
      <p className="font-headline font-bold text-gray-900 text-lg mb-6">Mehr als eine Methode – ein vollständiges Ökosystem</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {spokes.map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-primary font-bold text-lg">{s.icon}</span>
            </div>
            <p className="text-xs font-semibold text-gray-700 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-primary/10 rounded-xl p-4 text-center">
        <p className="text-sm font-bold text-primary">Du als hypnovital® Coach – im Zentrum des Systems</p>
        <p className="text-xs text-gray-500 mt-1">Alle Komponenten greifen ineinander – damit du wirksam arbeitest.</p>
      </div>
    </div>
  )
}

// ─── Infografik 4: Einnahmequellen ───────────────────────────────────────────
function EinnahmequellenGrafik() {
  const quellen = [
    { label: 'Einzelcoachings', bar: 70, desc: 'Persönliche Sessions, 1:1' },
    { label: 'Gruppenworkshops', bar: 55, desc: 'Kleine Gruppen, lokal oder online' },
    { label: 'Firmenprogramme', bar: 88, desc: 'Workshops, BGM, Führung' },
    { label: 'Transformationsprogramme', bar: 65, desc: 'Mehrstufige Begleitprogramme' },
    { label: 'Audio-Programme', bar: 40, desc: 'Passiv, skalierbar' },
  ]
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Einnahmequellen</p>
      <p className="font-headline font-bold text-gray-900 text-lg mb-6">Typische Tätigkeitsfelder eines hypnovital® Coaches</p>
      <div className="space-y-4">
        {quellen.map((q) => (
          <div key={q.label}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-semibold text-gray-700">{q.label}</span>
              <span className="text-xs text-gray-400">{q.desc}</span>
            </div>
            <div className="h-2 bg-[#f5f5f5] rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${q.bar}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Illustrative Übersicht typischer Tätigkeitsfelder – keine Einkommens- oder Umsatzversprechen.
        Individuelle Ergebnisse hängen von persönlichem Einsatz, Markt, Erfahrung und weiteren Faktoren ab.
      </p>
    </div>
  )
}

// ─── Hauptseite ───────────────────────────────────────────────────────────────
export default function FranchisePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Franchise</span>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-white mt-3 mb-6 leading-tight">
              Werde hypnovital® Coach
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Baue ein sinnvolles Business mit einem bewährten System, einer starken Marke und echter Wirkung auf. Als zertifizierter hypnovital® Coach – im eigenen Tempo, an deinem Ort.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-8">
              <p className="text-white font-semibold mb-1">Zwei Märkte. Doppelte Chancen.</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Als hypnovital® Coach arbeitest du nicht nur mit Privatpersonen – sondern auch mit Unternehmen. Firmenprogramme ermöglichen oft grössere Auftragsvolumen, wiederkehrende Programme und langfristige Zusammenarbeit.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#anfrage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Jetzt Interesse melden <ArrowRight size={18} />
              </a>
              <a
                href="#warum"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Marktchance */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Marktchance</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Ein Markt im Aufbruch
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Mentale Gesundheit, Coaching und persönliche Entwicklung sind keine Nischenthemen mehr. Unternehmen investieren zunehmend in Resilienz, Leistungsfähigkeit und das Wohlbefinden ihrer Teams. Privatpersonen suchen aktiv nach wirksamer Unterstützung bei Veränderung.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Coaching-Markt DACH', text: 'Wächst seit Jahren kontinuierlich, getrieben durch steigende Nachfrage in Unternehmen und bei Privatpersonen.' },
                { label: 'Betriebliches Gesundheitsmanagement', text: 'Unternehmen aller Grössen investieren in BGM, Burnout-Prävention und mentale Stärke ihrer Mitarbeitenden.' },
                { label: 'Mental Health Bewusstsein', text: 'Gesellschaftlich wächst das Bewusstsein für mentale Gesundheit – die Nachfrage nach professionellen Angeboten steigt.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <TrendingUp size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <MarktchanceGrafik />
        </div>
      </SectionWrapper>

      {/* 3. Problem der Branche */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Das Problem</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Viele Coaches kämpfen allein
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Die Coaching-Branche ist voll talentierter Menschen – aber viele von ihnen arbeiten ohne System, ohne starke Marke und ohne Netzwerk. Das Ergebnis: viel Aufwand, wenig Momentum.
          </p>
        </div>
        <NetzwerkVergleich />
      </SectionWrapper>

      {/* 4. Warum hypnovital */}
      <SectionWrapper bg="white" id="warum">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Die Lösung</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            hypnovital® ist mehr als eine Methode
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Du erhältst ein vollständiges System – von der Ausbildung über die Marke bis hin zu Marketing, Community und Zugang zu zwei Märkten.
          </p>
        </div>
        <SystemGrafik />
      </SectionWrapper>

      {/* 5. Privat- & Firmenkunden */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Dein Markt</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Zwei Märkte. Mehr Stabilität.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Als hypnovital® Coach erschliesst du nicht nur den Privatkundenmarkt – sondern auch den deutlich grösseren Unternehmensmarkt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <Users size={24} className="text-primary" />
            </div>
            <h3 className="font-headline font-bold text-xl text-gray-900 mb-3">Privatpersonen</h3>
            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
              Menschen, die etwas in ihrem Leben verändern wollen – bei Gewicht, Stress, Schlaf, Selbstvertrauen, Gewohnheiten oder persönlicher Entwicklung.
            </p>
            <div className="space-y-2">
              {['Einzelcoachings', 'Transformationsprogramme (3–6 Monate)', 'Gruppenworkshops', 'Online-Programme'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0e1e08] rounded-2xl p-8">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5">
              <Building2 size={24} className="text-primary" />
            </div>
            <h3 className="font-headline font-bold text-xl text-white mb-3">Unternehmen</h3>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              Unternehmen suchen wirksame Lösungen für Stress, Burnout-Prävention, Resilienz und Leadership. Hier entstehen oft grössere, wiederkehrende und langfristige Aufträge.
            </p>
            <div className="space-y-2">
              {[
                'Firmenworkshops & Trainings',
                'Betriebliche Gesundheitsprogramme',
                'Leadership & Executive Coaching',
                'Teamresilienz-Programme',
                'Wiederkehrende Jahresprogramme',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-primary/10 rounded-xl p-3">
              <p className="text-primary text-xs font-semibold">Firmenprogramme ermöglichen grössere Auftragsvolumen, Planbarkeit und langfristige Zusammenarbeit.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Was du erhältst */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Dein Paket</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6">
              Was du als hypnovital® Coach erhältst
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Wir sind nur erfolgreich, wenn du es auch bist. Deshalb erhältst du alles, was du brauchst, um sofort professionell zu starten.
            </p>
            <div className="space-y-3">
              {[
                'Ausbildung zum zertifizierten hypnovital® Coach',
                'Zugang zur hypnovital® Academy',
                'Vollständige Schulungsunterlagen & Materialien',
                'Workshop-Strukturen für Gruppen und Einzelsettings',
                'Hypnose-Audioprogramme zur Weitergabe',
                'Marketing-Vorlagen, Präsentationen & Verkaufsunterlagen',
                'Eintrag im hypnovital® Coach-Verzeichnis',
                'Eigene Profilseite auf hypnovital.net',
                'Community und regelmässiger Austausch',
                'Laufende Weiterentwicklung und neue Materialien',
                'Support durch die Zentrale in Marketing & Akquise',
                'Unterstützung beim Zugang zu Firmenkunden',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: <BookOpen size={22} className="text-primary" />, title: 'Bewährte Methode', text: 'Die hypnovital® Methode (House of Change) ist strukturiert, wirksam und direkt einsetzbar.' },
              { icon: <Globe size={22} className="text-primary" />, title: 'Sichtbarkeit & Reichweite', text: 'Du bist sichtbar im Coach-Verzeichnis und erreichst neue Klienten über die hypnovital® Plattform.' },
              { icon: <Shield size={22} className="text-primary" />, title: 'Qualität & Standards', text: 'Zertifizierung und laufende Weiterbildung sichern das Qualitätsniveau aller hypnovital® Coaches.' },
              { icon: <HeartHandshake size={22} className="text-primary" />, title: 'Gemeinschaft', text: 'Du bist nie allein. Das Netzwerk aus Coaches, der Zentrale und der Academy begleitet dich.' },
              { icon: <Briefcase size={22} className="text-primary" />, title: 'Firmenzugang', text: 'hypnovital® öffnet dir die Tür zu Unternehmensaufträgen – mit Unterlagen, Präsentationen und Unterstützung.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f5] rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Einnahmequellen */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Einnahmequellen</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Mehrere Einnahmequellen. Mehr Stabilität.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Als hypnovital® Coach baust du kein abhängiges Einkommen von einer einzigen Quelle auf. Du kombinierts verschiedene Tätigkeitsfelder – und schaffst damit Flexibilität, Planbarkeit und Wachstumspotenzial.
            </p>
            <div className="bg-[#f9f9f9] border border-[#eaeaea] rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-1 text-sm">Rechtlicher Hinweis</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                hypnovital® macht <strong>keine Einkommens- oder Umsatzversprechen</strong>. Alle
                dargestellten Tätigkeitsfelder und Beispiele sind illustrativ. Dein wirtschaftlicher
                Erfolg hängt von deinem persönlichen Einsatz, deinem Markt, deiner Erfahrung und
                weiteren individuellen Faktoren ab und kann nicht garantiert werden.
              </p>
            </div>
          </div>
          <EinnahmequellenGrafik />
        </div>
      </SectionWrapper>

      {/* 8. Nebenberuflich oder hauptberuflich */}
      <SectionWrapper bg="white">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Flexibler Einstieg</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Dein Tempo. Dein Weg.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Ob du nebenberuflich einsteigst oder direkt hauptberuflich startest – das hypnovital® System ist so aufgebaut, dass beides möglich ist.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock size={24} className="text-primary" />,
              title: 'Nebenberuflich starten',
              text: 'Du behältst deinen Job oder dein bisheriges Business. Starte mit ersten Klienten, baue Erfahrung auf und wachse in eigenem Tempo.',
              tag: 'Einstieg mit geringem Risiko',
            },
            {
              icon: <TrendingUp size={24} className="text-primary" />,
              title: 'Schrittweise aufbauen',
              text: 'Mit wachsendem Kundenstamm, ersten Firmenaufträgen und stabilen Einnahmen bereitest du den Übergang vor – ohne Druck.',
              tag: 'Nachhaltiges Wachstum',
            },
            {
              icon: <Briefcase size={24} className="text-primary" />,
              title: 'Hauptberuflich durchstarten',
              text: 'Du bist bereit, hypnovital® zu deinem Hauptberuf zu machen. Wir begleiten dich mit System, Support und dem vollen Paket.',
              tag: 'Voller Fokus',
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#f5f5f5] rounded-2xl p-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.tag}</span>
              <h3 className="font-headline font-bold text-gray-900 mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#f5f5f5] rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <Lightbulb size={22} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">Bereits als Coach, Therapeut oder Berater tätig?</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Viele unserer Partner führen ihr bestehendes Business weiter und ergänzen es sinnvoll mit dem hypnovital® Konzept. Du musst nichts aufgeben – sondern kannst etwas Starkes hinzugewinnen.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 9. Warum jetzt */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Warum jetzt</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Jetzt einsteigen – während der Markt noch offen ist
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              hypnovital® befindet sich in einer frühen, aktiven Wachstumsphase. Wir bauen das Netzwerk im DACH-Raum jetzt auf. Das bedeutet: Viele Regionen sind noch frei – und wer früh einsteigt, kann sich früh positionieren.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Wir setzen auf Qualität statt Quantität. Deshalb wählen wir Franchisepartner sorgfältig aus. Wer jetzt Teil der Bewegung wird, baut auf einem starken Fundament.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: <MapPin size={20} className="text-primary" />, title: 'Viele Regionen noch frei', text: 'Im DACH-Raum gibt es noch viel Potenzial – regional, lokal und digital.' },
              { icon: <Star size={20} className="text-primary" />, title: 'Frühe Partner profitieren', text: 'Wer früh dabei ist, baut Bekanntheit und Erfahrung auf, wenn die Marke wächst.' },
              { icon: <TrendingUp size={20} className="text-primary" />, title: 'Markt im Aufwind', text: 'Coaching und mentale Gesundheit sind gefragte Themen – der Zeitpunkt ist günstig.' },
              { icon: <Award size={20} className="text-primary" />, title: 'Bewusstes Wachstum', text: 'Wir wachsen gezielt und mit Qualitätsanspruch – keine Massenfranchise, sondern ein starkes Netzwerk.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 10. Passt hypnovital zu dir? */}
      <SectionWrapper bg="white">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Selbstcheck</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Passt hypnovital® zu dir?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Nicht jede Methode passt zu jedem Menschen. Wir suchen Persönlichkeiten, die wirklich etwas bewegen wollen – mit Haltung, Motivation und echtem Interesse an der Arbeit mit Menschen.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Du bist vielleicht die richtige Person, wenn du …</p>
            <div className="space-y-3">
              {[
                'gerne und wirkungsvoll mit Menschen arbeitest',
                'Freude an persönlicher und professioneller Entwicklung hast',
                'offen für evidenzbasierte, moderne Methoden bist',
                'bereit bist, Verantwortung für dein Business zu übernehmen',
                'an Hypnose, Coaching und mentaler Stärke interessiert bist',
                'ein seriöses, sinnvolles Business aufbauen möchtest',
                'bereit bist, in deine Ausbildung und Entwicklung zu investieren',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wider">Wir freuen uns besonders über Personen aus diesen Bereichen</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Users size={18} className="text-primary" />, label: 'Coaches & Trainer' },
                { icon: <HeartHandshake size={18} className="text-primary" />, label: 'Therapeuten & Berater' },
                { icon: <GraduationCap size={18} className="text-primary" />, label: 'Gesundheitsfachpersonen' },
                { icon: <Briefcase size={18} className="text-primary" />, label: 'HR & People Management' },
                { icon: <Lightbulb size={18} className="text-primary" />, label: 'Quereinsteiger mit Motivation' },
                { icon: <Star size={18} className="text-primary" />, label: 'Unternehmer & Selbstständige' },
              ].map((item) => (
                <div key={item.label} className="bg-[#f5f5f5] rounded-xl p-4 flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 11. Academy */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-[#0e1e08] rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-5">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <h3 className="font-headline font-black text-white text-2xl mb-4">hypnovital® Academy</h3>
              <div className="space-y-3">
                {[
                  { label: 'Grundausbildung', text: 'Fundiertes Wissen in Hypnose, Coaching und der House of Change Methode.' },
                  { label: 'Zertifizierung', text: 'Offizielles Zertifikat als hypnovital® Coach nach Abschluss der Ausbildung.' },
                  { label: 'Qualitätsstandards', text: 'Einheitliche Methodik und professionelle Arbeitsweise für alle Coaches.' },
                  { label: 'Laufende Weiterbildung', text: 'Neue Inhalte, Rezertifizierung und fachliche Vertiefung – kontinuierlich.' },
                  { label: 'Community & Austausch', text: 'Online und vor Ort: regelmässiger Austausch im Coach-Netzwerk.' },
                ].map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <p className="text-primary font-semibold text-sm">{item.label}</p>
                    <p className="text-white/60 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Ausbildung</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Die hypnovital® Academy – Ausbildung mit Standard
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Die Academy ist das Herzstück der Qualitätssicherung. Sie stellt sicher, dass alle hypnovital® Coaches nach denselben hohen Standards arbeiten – und sich laufend weiterentwickeln.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              Von der Grundausbildung über die Zertifizierung bis hin zur Rezertifizierung und laufenden Weiterbildung: Die Academy begleitet dich auf deinem gesamten Weg als hypnovital® Coach.
            </p>
            <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
              <Shield size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Qualität als Versprechen:</strong> Klienten vertrauen dem hypnovital® Label – weil sie wissen, dass dahinter echte Ausbildung und Standards stehen.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 12. So läuft der Einstieg ab */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Prozess</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            So läuft der Einstieg ab
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Wir wählen unsere Franchisepartner sorgfältig aus. Neben der persönlichen Eignung braucht es auch die notwendigen finanziellen Mittel für Ausbildung und Start.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Erstgespräch',
              text: 'Unverbindliches Kennenlernen – wir schauen gemeinsam, ob hypnovital® zu dir passt.',
            },
            {
              step: '02',
              title: 'Auswahlverfahren',
              text: 'Persönliche Eignung, Motivation und Voraussetzungen werden gemeinsam beurteilt.',
            },
            {
              step: '03',
              title: 'Ausbildung',
              text: 'Grundausbildung in der hypnovital® Academy – Zertifizierung inklusive.',
            },
            {
              step: '04',
              title: 'Start in der Region',
              text: 'Du startest in deiner Region mit System, Materialien und Unterstützung durch die Zentrale.',
            },
            {
              step: '05',
              title: 'Begleitung & Wachstum',
              text: 'Laufender Support, Community, Weiterbildung und gemeinsames Wachstum im Netzwerk.',
            },
          ].map((item, i) => (
            <div key={item.step} className="relative">
              <div className="bg-[#f5f5f5] rounded-2xl p-5 h-full">
                <div className="text-3xl font-black font-headline text-primary/20 mb-3">{item.step}</div>
                <h3 className="font-headline font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
              {i < 4 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-primary rounded-full items-center justify-center">
                  <ArrowRight size={10} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 13. Abschluss CTA */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Jetzt starten</span>
          <h2 className="text-3xl md:text-5xl font-headline font-black text-white mt-3 mb-5 leading-tight">
            Werde Teil der hypnovital® Bewegung
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Baue ein Business mit Sinn, Wirkung und Wachstumspotenzial. Hilf Menschen bei echter Veränderung – und entwickle gleichzeitig dein eigenes Coaching-Business in einem starken Netzwerk.
          </p>
          <a
            href="#anfrage"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark transition-colors"
          >
            Franchise-Infos anfordern <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* 14. Formular */}
      <SectionWrapper bg="white" id="anfrage">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Kontakt</span>
            <h2 className="text-3xl font-headline font-black text-gray-900 mt-3 mb-3">
              Interesse melden
            </h2>
            <p className="text-gray-500">
              Wir besprechen gerne unverbindlich, ob hypnovital® der richtige Schritt für dich ist. Füll das Formular aus – wir melden uns innerhalb von 1–2 Werktagen.
            </p>
          </div>
          <InquiryForm
            title="Anfrage Coach / Franchise"
            context="Coach werden / Franchise"
            showLocation
            showFranchiseRegion
            requirePhone
            interestOptions={['Nebenberuflicher Einstieg', 'Hauptberuflicher Einstieg', 'Bestehende Coaching-Tätigkeit ergänzen', 'Ich möchte mehr Informationen']}
          />
        </div>
      </SectionWrapper>
    </>
  )
}
