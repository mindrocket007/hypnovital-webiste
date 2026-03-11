'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PersonalAudioSection from '@/components/shop/PersonalAudioSection'
import ShopCategoryNav from '@/components/shop/ShopCategoryNav'
import ShopProductGrid from '@/components/shop/ShopProductGrid'
import VoucherCard from '@/components/shop/VoucherCard'
import { products } from '@/lib/data'
import { BookOpen, Sliders, ShieldCheck, Star, CheckCircle2, Clock } from 'lucide-react'

export default function ShopPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('alle')

  return (
    <>
      {/* Hero */}
      <section id="shop-top" className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Shop</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight tracking-tight">
              Impulse für mentale Stärke, Gesundheit und persönliche Entwicklung
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Entdecke ausgewählte Programme, Inhalte und Produkte rund um mentale Stärke, persönliche Entwicklung und Wohlbefinden.
            </p>
            <p className="text-white/50 text-base leading-relaxed mt-3">
              Aktuell findest du hier unsere hypnovital® Audio-Programme – künftig werden weitere Angebote wie E-Learnings, Trainingsprogramme und ergänzende Produkte folgen, die dich auf deinem Weg zu mehr innerer Stärke und Lebensqualität unterstützen.
            </p>
          </div>
        </div>
      </section>

      {/* Kategorie-Navigation */}
      <ShopCategoryNav
        query={query}
        onQueryChange={setQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* ── SECTION 1: AUDIO-PROGRAMME ── */}
      <div id="audio-programme">
        {/* Qualitäts- und Vertrauensbereich */}
        <SectionWrapper bg="gray">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Qualitätsanspruch</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6 leading-tight tracking-tight">
              Qualität, die man hören und fühlen kann
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-sm text-gray-500 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Die hypnovital® Hypnose-Audios sind keine Standardaufnahmen und keine schnell produzierten Massenprodukte. Jedes Programm wurde mit grosser Sorgfalt entwickelt – von erfahrenen Fachleuten aus den Bereichen Hypnose, Coaching, mentale Trainingsmethoden und Audioproduktion.
                </p>
                <p>
                  Von der Formulierung der Suggestionen über den Aufbau der hypnotischen Reise bis hin zur Auswahl der Hintergrundmusik wird jedes Detail bewusst gestaltet.
                </p>
                <p className="font-semibold text-gray-700">Unsere Programme entstehen in mehreren Schritten:</p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'Konzeption der Hypnosestruktur',
                    text: 'Jede Audio-Session folgt einer klaren methodischen Struktur, die den Geist Schritt für Schritt in einen Zustand tiefer Entspannung und Offenheit führt.',
                  },
                  {
                    title: 'Professionell entwickelte Suggestionen',
                    text: 'Die Suggestionen werden sorgfältig formuliert, damit sie positiv, verständlich und wirkungsvoll auf das Unterbewusstsein wirken können.',
                  },
                  {
                    title: 'Sorgfältig gestaltete Hintergrundmusik',
                    text: 'Musik und Klanglandschaften werden gezielt ausgewählt, um den hypnotischen Prozess zu unterstützen und eine ruhige, sichere Atmosphäre zu schaffen.',
                  },
                  {
                    title: 'Mehrstufige Qualitätsprüfung',
                    text: 'Jedes Programm wird vor der Veröffentlichung mehrfach überprüft und optimiert – inhaltlich, sprachlich und technisch.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Abschluss-Statement */}
            <div className="mt-8 border-l-2 border-primary pl-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                Das Ergebnis sind hochwertige Hypnose-Audios, die nicht nur entspannend wirken, sondern gezielt dabei unterstützen können, mentale Veränderungen anzustossen. Mit hypnovital® entscheidest du dich bewusst gegen ein 08/15-Produkt – und für ein durchdachtes Programm, das mit Erfahrung, Sorgfalt und Qualitätsanspruch entwickelt wurde.
              </p>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Unser Ziel ist einfach: dir ein Audio-Programm zur Verfügung zu stellen, das dich zuverlässig auf deinem persönlichen Veränderungsweg unterstützt.
              </p>
            </div>

            {/* Garantie */}
            <div className="mt-8 flex items-start gap-5 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-5">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-headline font-bold text-gray-900 mb-1">
                  Wir sind von unseren Programmen überzeugt – und das beweisen wir.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Jedes hypnovital® Audio-Programm wurde mit grösster Sorgfalt entwickelt.
                  Wenn du nach dem Kauf nicht überzeugt bist, erstatten wir dir den vollen Betrag –
                  innerhalb von 14 Tagen, ohne Fragen, ohne Aufwand.
                  Einfach eine kurze E-Mail an{' '}
                  <a href="mailto:info@hypnovital.net" className="text-primary font-medium hover:underline">
                    info@hypnovital.net
                  </a>.
                </p>
                <p className="text-xs text-primary font-semibold mt-2">14-Tage Geld-zurück-Garantie</p>
              </div>
            </div>

            {/* 4 Qualitäts-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {[
                {
                  icon: BookOpen,
                  title: 'Fachlich entwickelt',
                  text: 'Unsere Inhalte werden auf Basis von Erfahrung aus Hypnose, Coaching und mentalem Training konzipiert.',
                },
                {
                  icon: Sliders,
                  title: 'Sorgfältig produziert',
                  text: 'Von den Suggestionen bis zur Hintergrundmusik wird jedes Detail bewusst aufgebaut und aufeinander abgestimmt.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Mehrfach geprüft',
                  text: 'Jedes Audio-Programm durchläuft mehrere Qualitätsprüfungen – inhaltlich, sprachlich und technisch.',
                },
                {
                  icon: Star,
                  title: 'Mit höchstem Anspruch',
                  text: 'hypnovital® steht für hochwertige Programme, die mit Sorgfalt, Professionalität und Blick fürs Detail entwickelt werden.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-headline font-bold text-gray-900 text-sm leading-snug">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Produktgrid */}
        <SectionWrapper bg="white">
          <ShopProductGrid
            products={products}
            query={query}
            activeCategory={activeCategory}
          />
        </SectionWrapper>

        {/* Persönliches Audio */}
        <PersonalAudioSection />

        {/* So funktioniert es */}
        <SectionWrapper bg="gray">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-headline font-bold text-gray-900 mb-6">So funktioniert es</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Programm wählen',
                  text: 'Wähle das Audio-Programm, das zu deiner aktuellen Situation passt.',
                },
                {
                  step: '2',
                  title: 'Sicher bezahlen',
                  text: 'Kauf direkt via Stripe Checkout – schnell, sicher, ohne Konto.',
                },
                {
                  step: '3',
                  title: 'Sofort herunterladen',
                  text: 'Du erhältst per E-Mail deinen persönlichen Downloadlink.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-headline font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* ── SECTION 2: GUTSCHEIN ── */}
      <div id="gutschein">
        <SectionWrapper bg="white">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Gutscheine</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6 leading-tight tracking-tight">
              Sinnvoll schenken
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-500 leading-relaxed mb-10">
              <div className="space-y-4">
                <p>
                  Mit einem hypnovital® Gutschein verschenkst du nicht einfach ein Produkt, sondern einen Impuls für mehr Ruhe, Klarheit und persönliche Entwicklung.
                </p>
                <p>
                  Der Gutschein kann für eine hypnovital® Hypnose-Session bei jedem hypnovital® Coach eingelöst werden – online oder vor Ort, je nach Angebot des jeweiligen Coaches.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Nach dem Kauf senden wir dir den Gutschein per E-Mail in einem ansprechend gestalteten Format, sodass du ihn ganz einfach weiterleiten oder verschenken kannst.
                </p>
                <p>
                  Eine besondere Geschenkidee für Menschen, denen du etwas Gutes tun möchtest und die sich mehr mentale Stärke, Entspannung oder neue Perspektiven wünschen.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper bg="white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <VoucherCard
              slug="gutschein"
              title="hypnovital® Hypnose-Session Gutschein"
              shortDescription="Verschenke eine persönliche hypnovital® Hypnose-Session für mehr Ruhe, Klarheit und mentale Stärke."
              priceFormatted="€/CHF 150"
              formatBadge="EINZELCOACHING"
            />
            <VoucherCard
              slug="transformation-gutschein"
              title="hypnovital® 3-Monate Transformation Gutschein"
              shortDescription="12 Wochen strukturierter Transformationsprozess mit Hypnose-Sessions, Coaching und individuellen Audio-Programmen."
              priceFormatted="€/CHF 2'400"
              formatBadge="EINZELCOACHING"
            />
          </div>
        </SectionWrapper>

        {/* Workshop-Gutscheine mit Intro-Text */}
        <SectionWrapper bg="gray">
          <div className="max-w-4xl mx-auto mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Veranstaltungs-Gutscheine</span>
            <h3 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mt-3 mb-4 leading-tight">
              Schenke ein echtes Erlebnis
            </h3>
            <p className="text-gray-500 leading-relaxed mb-3">
              Mit einem hypnovital® Veranstaltungs-Gutschein schenkst du nicht nur einen Besuch – du schenkst einen Moment, der bleibt. Der Beschenkte löst den Gutschein bei einer unserer öffentlichen Veranstaltungen ein: Themen und Daten sind vorgegeben, das Erlebnis ist garantiert.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Unser Veranstaltungsangebot wächst laufend: Impuls-Sessions, Halb- und Tagesworkshops zu Themen wie Entspannung, Stressmanagement, Selbstvertrauen und mehr. Der Beschenkte wählt einfach aus dem aktuellen Angebot, was ihn anspricht – und meldet sich direkt an.
            </p>
            <Link
              href="/veranstaltungen"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Alle aktuellen Veranstaltungen ansehen →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <VoucherCard
              slug="gutschein-impuls-session"
              title="hypnovital® Impuls-Session Gutschein"
              shortDescription="Schenke einen kurzen, wirkungsvollen Impuls: eine geführte Hypnose-Session für Tiefenentspannung und innere Klarheit – ideal als Einstieg oder gezielter Auszeit-Moment."
              priceFormatted="€/CHF 95"
              formatBadge="GRUPPENFORMAT"
            />
            <VoucherCard
              slug="gutschein-halbtagesworkshop"
              title="hypnovital® Halbtagesworkshop Gutschein"
              shortDescription="Ein halber Tag mit echter Wirkung: Verschenke einen halbtägigen hypnovital® Workshop für mehr Entspannung, Fokus oder persönliche Stärke – kompakt, intensiv und direkt erlebbar."
              priceFormatted="€/CHF 195"
              formatBadge="GRUPPENFORMAT"
            />
            <VoucherCard
              slug="gutschein-tagesworkshop"
              title="hypnovital® Tagesworkshop Gutschein"
              shortDescription="Ein ganzer Tag voller Tiefe und Veränderung: Schenke einen intensiven hypnovital® Tagesworkshop für nachhaltige mentale Stärke, neue Perspektiven und echte Transformation."
              priceFormatted="€/CHF 345"
              formatBadge="GRUPPENFORMAT"
            />
          </div>
        </SectionWrapper>
      </div>

      {/* ── SECTION 3: E-LEARNING ── */}
      <div id="e-learning">
        <SectionWrapper bg="gray">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">E-Learning</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6 leading-tight tracking-tight">
              Wissen, das weiterbringt
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-500 leading-relaxed mb-8">
              <div className="space-y-4">
                <p>
                  Unsere E-Learning-Angebote ergänzen die hypnovital® Welt um fundiertes Wissen für mentale Stärke, Stresskompetenz und persönliche Entwicklung.
                </p>
                <p>
                  Dabei achten wir auf Inhalte, die praxisnah, verständlich und direkt im Alltag anwendbar sind – für Einzelpersonen ebenso wie für Unternehmen.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  'relevante Themen mit echtem Nutzen',
                  'verständlich und klar aufgebaut',
                  'flexibel digital nutzbar',
                  'sinnvoll ergänzbar mit Audio-Programmen und Coachings',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ComingSoonBadge />
          </div>
        </SectionWrapper>
      </div>

      {/* ── SECTION 4: SUPPLEMENTS ── */}
      <div id="supplements">
        <SectionWrapper bg="white">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Supplements</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6 leading-tight tracking-tight">
              Sorgfältig ausgewählt
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-500 leading-relaxed mb-8">
              <p>
                Im Bereich Supplements setzen wir auf Produkte, die mentale Leistungsfähigkeit, Regeneration und Wohlbefinden sinnvoll unterstützen können.
              </p>
              <p>
                Dabei achten wir auf Qualität, Alltagstauglichkeit und eine stimmige Ergänzung zu unserem ganzheitlichen Ansatz rund um mentale Stärke und Gesundheit.
              </p>
            </div>
            <ComingSoonBadge />
          </div>
        </SectionWrapper>
      </div>

      {/* ── SECTION 5: EQUIPMENT ── */}
      <div id="equipment">
        <SectionWrapper bg="gray">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Equipment</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6 leading-tight tracking-tight">
              Unterstützende Tools für deinen Alltag
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-500 leading-relaxed mb-8">
              <p>
                Equipment kann helfen, Entspannung, Fokus und Regeneration gezielt in den Alltag zu integrieren.
              </p>
              <p>
                Wir wählen Produkte aus, die einfach anwendbar sind und unsere Themen rund um mentale Stärke, Erholung und persönliche Entwicklung sinnvoll ergänzen.
              </p>
            </div>
            <ComingSoonBadge />
          </div>
        </SectionWrapper>
      </div>
    </>
  )
}

function ComingSoonBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#eaeaea] rounded-xl px-5 py-3 shadow-sm">
      <Clock size={15} className="text-primary" />
      <span className="text-sm font-semibold text-gray-600">Demnächst verfügbar</span>
    </div>
  )
}
