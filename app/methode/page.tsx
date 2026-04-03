import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import { Shield, Heart, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Die Methode – House of Change | hypnovital®',
  description:
    'Die hypnovital® Methode House of Change begleitet dich in 5 psychologisch fundierten Schritten zur nachhaltigen mentalen Veränderung. Dort wo andere aufhören, fangen wir erst an.',
  openGraph: {
    title: 'Die Methode – House of Change | hypnovital®',
    description: '5 strukturierte Schritte zur nachhaltigen mentalen Veränderung. Das hypnovital® Konzept.',
    url: 'https://hypnovital.net/methode',
    type: 'website',
  },
  alternates: { canonical: 'https://hypnovital.net/methode' },
}

const steps = [
  {
    nr: '01',
    title: 'House of Change',
    subtitle: 'Sicherheit schaffen',
    desc: 'Bevor Veränderung beginnen kann, brauchst du einen Ort, an dem du dich vollkommen sicher fühlst. Wir führen dich in einen tiefen Zustand der Entspannung und schaffen einen geschützten Raum – dein persönliches Haus der Veränderung. Dieses Fundament ist entscheidend: Nur wenn sich dein Unterbewusstsein sicher fühlt, öffnet es sich für Neues.',
    benefit: 'Du fühlst dich geborgen und dein Unterbewusstsein wird aufnahmebereit.',
    color: '#1a3e0e',
    lightColor: '#e8f5d4',
  },
  {
    nr: '02',
    title: 'Responsibility',
    subtitle: 'Verantwortung übernehmen',
    desc: 'Echte Veränderung beginnt mit einer bewussten Entscheidung. In diesem Schritt übernimmst du die Verantwortung für dein Handeln, deine Gedanken und deine Zukunft. Kein Opfer der Umstände – du bist die treibende Kraft. Dieser Moment der Selbstverpflichtung aktiviert eine tiefe innere Bereitschaft, die den gesamten weiteren Prozess trägt.',
    benefit: 'Du triffst eine bewusste Entscheidung für deine Veränderung.',
    color: '#245012',
    lightColor: '#dff0c8',
  },
  {
    nr: '03',
    title: 'Forgiveness',
    subtitle: 'Loslassen und vergeben',
    desc: 'Alte Verletzungen, Schuldgefühle und unverarbeitete Erfahrungen blockieren Veränderung. Bevor neue Muster entstehen können, müssen die alten losgelassen werden. Du vergibst anderen – und vor allem dir selbst. Dieser Schritt ist therapeutisch einer der wirkungsvollsten und wird in herkömmlicher Hypnose oft übersprungen.',
    benefit: 'Du befreist dich von inneren Blockaden, die dich bisher zurückgehalten haben.',
    color: '#1a3e0e',
    lightColor: '#d6eabc',
  },
  {
    nr: '04',
    title: 'Resources',
    subtitle: 'Innere Ressourcen aktivieren',
    desc: 'Du trägst bereits alles in dir, was du für deine Veränderung brauchst. In diesem Schritt aktivieren wir verborgene Stärken, positive Erinnerungen und innere Kraftquellen. Dein Unterbewusstsein erkennt, dass du fähig bist – mehr als fähig. Diese Ressourcen bilden das Fundament für die Suggestionen, die folgen.',
    benefit: 'Du spürst deine eigene Stärke und Fähigkeit zur Veränderung.',
    color: '#245012',
    lightColor: '#cde5b0',
  },
  {
    nr: '05',
    title: 'Power Room',
    subtitle: 'Veränderung verankern',
    desc: 'Jetzt bist du bereit. In deinem mentalen Kraftraum – einem Ort, den nur du kennst – werden die massgeschneiderten* Suggestionen tief in deinem Unterbewusstsein verankert. Hier findet die eigentliche Transformation statt. Und wenn du diesen Raum verlässt, nimmst du neue Bilder deiner Zukunft mit – verankert auf deinem Weg zurück ins Wachbewusstsein.',
    benefit: 'Die Veränderung wird tief in deinem Unterbewusstsein verankert.',
    color: '#2e6216',
    lightColor: '#c4df a4',
  },
]

const differences = [
  { standard: 'Keine Übernahme von Verantwortung', hypnovital: 'Bewusste Selbstverpflichtung als Fundament für Veränderung' },
  { standard: 'Keine Vergebungsarbeit', hypnovital: 'Aktives Loslassen alter Blockaden und Verletzungen' },
  { standard: 'Keine standardisierte Ressourcenarbeit', hypnovital: 'Gezielte Aktivierung innerer Stärken und Kraftquellen' },
  { standard: 'Direkt zu den Suggestionen', hypnovital: 'Suggestionen erst nach 5 Stufen systematischer Vorbereitung' },
  { standard: 'Allgemeine Entspannung', hypnovital: 'Tiefe Trance durch bewährte Vertiefungstechnik' },
  { standard: 'Kurze Einleitung', hypnovital: 'Strukturierter Aufbau über 5 psychologisch fundierte Stufen' },
]

export default function MethodePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32 relative overflow-hidden">
        {/* Decorative house silhouette */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 600" fill="white" className="h-full ml-auto">
            <path d="M200 20L350 140V580H50V140L200 20Z" />
            <rect x="80" y="200" width="60" height="60" rx="4" fill="none" stroke="white" strokeWidth="2" />
            <rect x="260" y="200" width="60" height="60" rx="4" fill="none" stroke="white" strokeWidth="2" />
            <rect x="170" y="350" width="60" height="60" rx="4" fill="none" stroke="white" strokeWidth="2" />
            <rect x="160" y="460" width="80" height="120" rx="4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Die Methode
          </p>
          <h1 className="text-white font-headline font-black text-4xl md:text-6xl leading-tight max-w-3xl mb-6">
            House of Change
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mb-4 leading-relaxed font-medium">
            5 Schritte zur nachhaltigen mentalen Veränderung.
          </p>
          <p className="text-white/60 text-base max-w-2xl mb-10 leading-relaxed">
            Die meisten Hypnose-Angebote bestehen aus einer kurzen Einleitung und Suggestionen. Die hypnovital® Methode geht weiter: 5 psychologisch fundierte Stufen bereiten dein Unterbewusstsein systematisch auf echte, dauerhafte Veränderung vor. Dort wo andere aufhören, fangen wir erst an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#die-5-stufen"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Die 5 Stufen entdecken
            </a>
            <Link
              href="/persoenliches-audio"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Methode erleben – persönliches Audio
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Intro */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Warum 5 Stufen?</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Veränderung braucht Vorbereitung
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Stell dir vor, du möchtest ein Haus renovieren. Du würdest nicht einfach die Wände streichen, ohne vorher den Boden zu prüfen, alte Tapeten zu entfernen und das Fundament zu sichern. Genau so funktioniert mentale Veränderung: Ohne die richtige Vorbereitung bleiben Suggestionen an der Oberfläche. Die hypnovital® Methode bereitet dein Unterbewusstsein Schritt für Schritt vor – damit die Veränderung tief und nachhaltig wirkt.
          </p>
        </div>
      </SectionWrapper>

      {/* 3. Die 5 Stufen – visuell als aufsteigendes Haus */}
      <section className="bg-[#f5f5f5] py-16 md:py-24" id="die-5-stufen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Die 5 Stufen</p>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Dein Weg durch das House of Change
            </h2>
          </div>

          {/* Visual staircase */}
          <div className="max-w-5xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.nr}
                className="relative"
                style={{ paddingLeft: `${i * 2}rem` }}
              >
                <div className="bg-white rounded-2xl border border-[#eaeaea] overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Step number + visual bar */}
                    <div
                      className="md:w-48 flex-shrink-0 flex items-center justify-center py-6 md:py-0"
                      style={{ backgroundColor: step.color }}
                    >
                      <div className="text-center">
                        <div className="text-white/30 text-5xl font-black">{step.nr}</div>
                        <div className="text-primary font-bold text-sm mt-1">{step.title}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-1">
                        {step.title}
                        <span className="text-gray-400 font-normal text-base ml-3">– {step.subtitle}</span>
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-4">
                        {step.desc}
                      </p>
                      <div className="flex items-start gap-2 bg-primary/5 rounded-xl px-4 py-3">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-gray-700">{step.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -bottom-6 w-px h-6 bg-primary/20" style={{ marginLeft: `${i}rem` }} />
                )}
              </div>
            ))}

            {/* Fussnote */}
            <p className="text-gray-400 text-xs mt-8 ml-4">
              * Bei den persönlichen Hypnose-Audios werden die Suggestionen individuell auf dein Thema, dein Ziel und deine Situation abgestimmt – das macht die hypnovital® Methode einzigartig.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vergleich: Standard vs. hypnovital */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Der Unterschied</p>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Standard-Hypnose vs. hypnovital®
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Die meisten Hypnose-Programme überspringen die entscheidenden Schritte. Hier siehst du, was uns unterscheidet.
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 gap-px bg-[#eaeaea]">
              <div className="bg-gray-100 px-6 py-4 text-center">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Standard-Hypnose</span>
              </div>
              <div className="bg-[#0e1e08] px-6 py-4 text-center">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">hypnovital®</span>
              </div>
            </div>
            {/* Rows */}
            {differences.map((d, i) => (
              <div key={i} className="grid grid-cols-2 gap-px bg-[#eaeaea]">
                <div className="bg-white px-6 py-4 flex items-center">
                  <span className="text-sm text-gray-400">{d.standard}</span>
                </div>
                <div className="bg-white px-6 py-4 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{d.hypnovital}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Zitat / Kernaussage */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-white text-2xl md:text-3xl font-headline font-black leading-snug mb-6">
            &laquo;Suggestionen ohne Vorbereitung sind wie Samen auf Beton. Die hypnovital® Methode bereitet den Boden – damit Veränderung wirklich Wurzeln schlägt.&raquo;
          </blockquote>
          <p className="text-white/50 text-sm uppercase tracking-widest">Das hypnovital® Prinzip</p>
        </div>
      </section>

      {/* 6. CTAs */}
      <SectionWrapper bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Methode erleben</p>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Bereit für echte Veränderung?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/shop" className="group bg-[#f5f5f5] rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Shop-Audios</h3>
              <p className="text-gray-500 text-sm flex-1">Fertige Hypnose-Audios nach der House of Change Methode – sofort verfügbar.</p>
              <span className="text-primary text-sm font-semibold group-hover:underline mt-4">Ab 29.90 € →</span>
            </Link>

            <Link href="/persoenliches-audio" className="group bg-primary/5 rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 border-2 border-primary/20 flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Heart size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Persönliches Audio</h3>
              <p className="text-gray-500 text-sm flex-1">Exklusiv für dich erstellt – mit deinem Thema, deinem Namen, deinen Suggestionen.</p>
              <span className="text-primary text-sm font-semibold group-hover:underline mt-4">89 € einmalig →</span>
            </Link>

            <Link href="/programme" className="group bg-[#f5f5f5] rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Einzelcoaching</h3>
              <p className="text-gray-500 text-sm flex-1">Persönliche Begleitung durch einen zertifizierten hypnovital® Coach.</p>
              <span className="text-primary text-sm font-semibold group-hover:underline mt-4">Ab 150 € / Session →</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
