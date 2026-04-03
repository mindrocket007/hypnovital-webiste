import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import MethodeTeaser from '@/components/ui/MethodeTeaser'
import PersonalAudioSection from '@/components/shop/PersonalAudioSection'
import Link from 'next/link'
import {
  Headphones, User, Target, Heart, Clock, Shield,
  CheckCircle2, ArrowRight, Sparkles, MessageCircle,
  RefreshCw, Zap, Star, Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Persönliches Hypnose-Audio – Exklusiv für dich erstellt | hypnovital',
  description:
    'Dein individuelles Hypnose-Audio, persönlich auf dein Ziel und deine Situation abgestimmt. Wirksam wie eine Einzelsitzung – jederzeit verfügbar. Einmalig 89 €.',
  openGraph: {
    title: 'Persönliches Hypnose-Audio – Exklusiv für dich erstellt',
    description:
      'Kein Programm von der Stange. Ein Hypnose-Audio, das wir exklusiv für dich produzieren – auf dein Ziel, deine Situation und deine Bedürfnisse abgestimmt.',
    url: 'https://hypnovital.net/persoenliches-audio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persönliches Hypnose-Audio – Exklusiv für dich erstellt',
    description:
      'Individuelles Hypnose-Audio, persönlich auf dein Ziel abgestimmt. Einmalig 89 €.',
  },
  alternates: {
    canonical: 'https://hypnovital.net/persoenliches-audio',
  },
}

const benefits = [
  {
    icon: User,
    title: 'Exklusiv für dich erstellt',
    desc: 'Wir produzieren dein Audio einmalig – nur für dich. Kein Massenprodukt, keine Kompromisse.',
  },
  {
    icon: Target,
    title: 'Auf dein Ziel abgestimmt',
    desc: 'Dein Anliegen, deine Situation, deine Worte. Die Suggestionen sind massgeschneidert auf das, was du verändern möchtest.',
  },
  {
    icon: Sparkles,
    title: 'Tiefere Wirkung',
    desc: 'Dein Unterbewusstsein reagiert stärker auf persönlich zugeschnittene Inhalte als auf allgemeine Programme.',
  },
  {
    icon: Headphones,
    title: 'Unbegrenzt nutzbar',
    desc: 'Einmal erstellt, gehört das Audio dir. Höre es so oft du willst – die Wirkung verstärkt sich mit jeder Wiederholung.',
  },
  {
    icon: Clock,
    title: 'Innerhalb von 24 Stunden',
    desc: 'Du beantwortest einen kurzen Fragebogen. Wir erstellen dein Audio und liefern es direkt per E-Mail.',
  },
  {
    icon: Shield,
    title: 'Professionelle Qualität',
    desc: 'Erstellt nach dem bewährten hypnovital® Konzept – mit sorgfältig ausgearbeiteten Suggestionen und beruhigender Hintergrundmusik.',
  },
]

const steps = [
  {
    nr: '01',
    title: 'Fragebogen ausfüllen',
    desc: 'Du wählst dein Thema, beschreibst dein Ziel und deine persönliche Situation. Das dauert nur wenige Minuten.',
  },
  {
    nr: '02',
    title: 'Wir erstellen dein Audio',
    desc: 'Auf Basis deiner Angaben produzieren wir eine professionelle Hypnose-Session – individuell für dich, mit deinem Namen und deinen Suggestionen.',
  },
  {
    nr: '03',
    title: 'Dein Audio per E-Mail',
    desc: 'Innerhalb von 24 Stunden erhältst du dein fertiges Hypnose-Audio als MP3 per E-Mail. Sofort einsatzbereit.',
  },
]

const themen = [
  'Besser schlafen',
  'Stress abbauen',
  'Selbstvertrauen stärken',
  'Abnehmen',
  'Rauchfrei werden',
  'Fokus & Motivation steigern',
  'Ängste reduzieren',
  'Gewohnheiten verändern',
  'Erfolg im Beruf',
  'Lampenfieber besiegen',
  'Und vieles mehr',
]

const faqs = [
  {
    q: 'Wie unterscheidet sich das persönliche Audio von den Shop-Audios?',
    a: 'Die Shop-Audios sind allgemein formuliert und sofort verfügbar. Dein persönliches Audio wird exklusiv für dich erstellt – mit deinem Namen, deinem spezifischen Ziel und auf deine persönliche Situation zugeschnitten. Dadurch ist die Wirkung deutlich tiefer.',
  },
  {
    q: 'Für welche Themen kann ich ein Audio erstellen lassen?',
    a: 'Grundsätzlich für jedes Thema, das sich mit Hypnose bearbeiten lässt: Stress, Schlaf, Selbstvertrauen, Gewohnheiten, Ängste, Motivation, Gewichtsreduktion, Rauchstopp und vieles mehr. Wenn du unsicher bist, beschreibe einfach dein Anliegen – wir beraten dich.',
  },
  {
    q: 'Wie lang ist das Audio?',
    a: 'Dein persönliches Hypnose-Audio dauert ca. 45–55 Minuten. Es enthält eine professionelle Einleitung, Vertiefung, deinen individuellen Suggestionsteil und eine sanfte Ausleitung.',
  },
  {
    q: 'Kann ich das Audio zurückgeben?',
    a: 'Da es sich um eine Einzelanfertigung handelt, ist ein Widerruf nach Produktionsbeginn ausgeschlossen. Sollte das Audio technisch fehlerhaft sein oder nicht deinem Fragebogen entsprechen, erstellen wir es kostenlos neu.',
  },
  {
    q: 'Wie oft sollte ich das Audio hören?',
    a: 'Für die beste Wirkung empfehlen wir, das Audio mindestens 21 Tage lang täglich zu hören – am besten abends vor dem Einschlafen. Die Suggestionen verankern sich mit jeder Wiederholung tiefer.',
  },
  {
    q: 'Ist das ein Ersatz für Coaching?',
    a: 'Das persönliche Audio ist eine wirksame Methode für klar definierte Themen. Für komplexere Anliegen, begleitete Prozesse oder wenn du Rückfragen hast, empfehlen wir ein persönliches Coaching – das Audio kann dabei eine wertvolle Ergänzung sein.',
  },
]

export default function PersoenlichesAudioPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Privatpersonen · Persönliches Audio
          </p>
          <h1 className="text-white font-headline font-black text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
            Dein persönliches<br />Hypnose-Audio
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-4 leading-relaxed">
            Nicht für alle. Nur für dich.
          </p>
          <p className="text-white/60 text-base max-w-2xl mb-10 leading-relaxed">
            Kein fertiges Programm von der Stange – sondern ein Hypnose-Audio, das wir exklusiv für dich produzieren. Auf dein Ziel, deine Situation und deine persönlichen Bedürfnisse abgestimmt. So wirksam wie eine Einzelsitzung – jederzeit verfügbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#audio-erstellen"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Mein Audio erstellen – 89 €
            </a>
            <a
              href="#so-funktioniert-es"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              So funktioniert es
            </a>
          </div>
        </div>
      </section>

      {/* 2. Warum persönlich? */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Warum ein persönliches Audio?</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Wie eine Hypnose-Session –<br />jederzeit abrufbar
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Stell dir vor, du hättest einen erfahrenen Hypnose-Coach, der eine Session nur für dich aufnimmt – mit deinem Namen, deinem Thema und deinen persönlichen Suggestionen. Genau das ist dein persönliches Hypnose-Audio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-[#f5f5f5] rounded-2xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <b.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. So funktioniert es */}
      <SectionWrapper bg="gray" id="so-funktioniert-es">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4 text-center">In 3 Schritten zu deinem Audio</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-14 text-center">
            So funktioniert es
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.nr} className="relative">
                <div className="text-5xl font-black text-primary/15 mb-3">{s.nr}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4">
                    <ArrowRight size={20} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Themen */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Themen</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Dein Thema. Dein Audio.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Egal was dich beschäftigt – wir erstellen dein Audio genau für das Thema, das dich gerade am meisten bewegt.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {themen.map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm font-medium text-gray-700 border border-[#eaeaea]"
            >
              {t}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. Vergleich: Audio vs. Coaching */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4 text-center">Dein Weg zu Veränderung</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6 text-center">
            Persönliches Audio oder Coaching?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
            Beides hat seine Stärken. Viele starten mit dem Audio und vertiefen später im Coaching – oder nutzen beides parallel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Audio Card */}
            <div className="bg-white rounded-2xl border border-[#eaeaea] p-8 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Beliebter Einstieg</span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Headphones size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-1">Persönliches Audio</h3>
              <p className="text-primary font-bold text-2xl mb-4">89 €<span className="text-gray-400 text-sm font-normal ml-2">einmalig</span></p>
              <ul className="space-y-3 mb-6">
                {[
                  'Einmalige Produktion, unbegrenzt nutzbar',
                  'Auf dein Thema und Ziel zugeschnitten',
                  'Mit deinem Namen und persönlichen Suggestionen',
                  'Innerhalb von 24 Stunden per E-Mail',
                  'Ideal als Einstieg in die Hypnose',
                  'Perfekte Ergänzung zum Coaching',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#audio-erstellen"
                className="block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
              >
                Audio erstellen
              </a>
            </div>

            {/* Coaching Card */}
            <div className="bg-white rounded-2xl border border-[#eaeaea] p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <MessageCircle size={24} className="text-gray-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-1">Einzelcoaching</h3>
              <p className="text-gray-900 font-bold text-2xl mb-4">ab 150 €<span className="text-gray-400 text-sm font-normal ml-2">pro Session</span></p>
              <ul className="space-y-3 mb-6">
                {[
                  'Persönliche Begleitung durch zertifizierten Coach',
                  'Interaktive Session mit direktem Feedback',
                  'Ideal für komplexe oder tiefgreifende Themen',
                  'Laufende Anpassung an deinen Fortschritt',
                  'Online, vor Ort oder bei dir',
                  'Kombination mit persönlichem Audio möglich',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/programme"
                className="block w-full text-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors"
              >
                Coaching ansehen
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Methode Teaser */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <MethodeTeaser />
        </div>
      </SectionWrapper>

      {/* 7. Formular */}
      <div id="audio-erstellen">
        <PersonalAudioSection showInfoLink={false} />
      </div>

      {/* 7. FAQ */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4 text-center">Häufige Fragen</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-10 text-center">
            Gut zu wissen
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#f5f5f5] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-gray-900 font-semibold text-sm hover:text-primary transition-colors">
                  {faq.q}
                  <ChevronIcon />
                </summary>
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. CTA Coaching-Übergang */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Noch tiefer gehen?</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Persönliches Coaching als nächster Schritt
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Du möchtest noch intensiver an deinem Thema arbeiten? In einer persönlichen Coaching-Session arbeitet ein zertifizierter hypnovital® Coach direkt mit dir – mit der Möglichkeit, auf deine Reaktionen einzugehen und den Prozess individuell zu steuern. Dein persönliches Audio ist dabei eine perfekte Ergänzung für die Zeit zwischen den Sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programme"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Coaching-Programme ansehen
            </Link>
            <Link
              href="/coach"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              Coach in deiner Nähe finden
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

function ChevronIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
