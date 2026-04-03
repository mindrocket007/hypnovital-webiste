'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PersonalAudioSection from '@/components/shop/PersonalAudioSection'
import ShopCategoryNav from '@/components/shop/ShopCategoryNav'
import ShopProductGrid from '@/components/shop/ShopProductGrid'
import VoucherCard from '@/components/shop/VoucherCard'
import { products } from '@/lib/data'
import { BookOpen, Sliders, ShieldCheck, Star, CheckCircle2, Clock, FileSignature, Target, Eye, TrendingUp, GraduationCap, Video, HelpCircle, Building2, ArrowRight } from 'lucide-react'
import { courses } from '@/lib/academy-data'

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

        {/* Selbstverpflichtungsvertrag */}
        <SectionWrapper bg="white">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] rounded-3xl overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)',
                }} />
              </div>

              <div className="relative px-6 py-10 md:px-12 md:py-14">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-4 py-1.5 mb-6">
                  <FileSignature size={14} className="text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Das macht uns anders</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-headline font-black text-white mb-4 leading-tight tracking-tight">
                  Jedes Programm kommt mit deinem persönlichen Selbstverpflichtungsvertrag
                </h2>

                <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                  Wir liefern nicht einfach eine MP3 – sondern ein System, das wirkt. Deshalb erhältst du zu jedem Audio-Programm einen Selbstverpflichtungsvertrag, der deine Veränderung messbar verstärkt.
                </p>

                {/* How it works */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                  {[
                    {
                      icon: Target,
                      title: 'Ziele formulieren',
                      text: 'Du schreibst deine persönlichen Ziele auf und unterschreibst – das schafft innere Verbindlichkeit.',
                    },
                    {
                      icon: Eye,
                      title: 'Täglich sichtbar',
                      text: 'Häng den Vertrag dort auf, wo du ihn siehst – Spiegel, Nachttisch, Kühlschrank. So bleibst du dran.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Wirkung verstärken',
                      text: 'Während der Hypnose verankert dein innerer Bodyguard genau diese Ziele tief im Unterbewusstsein.',
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                      <div className="w-9 h-9 bg-primary/15 rounded-xl flex items-center justify-center mb-3">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="font-headline font-bold text-white text-sm mb-1.5">{title}</h3>
                      <p className="text-xs text-white/55 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Stat */}
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-headline font-black text-primary">+42%</div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Schriftliche Selbstverpflichtungen erhöhen die Erfolgsrate nachweislich. Deshalb ist der Vertrag fester Bestandteil jedes hypnovital® Programms.
                  </p>
                </div>
              </div>
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
                  Unsere E-Learning-Kurse ergänzen die hypnovital® Welt um fundiertes Wissen für mentale Stärke, Stresskompetenz und persönliche Entwicklung.
                </p>
                <p>
                  Jeder Kurs enthält Video-Lektionen, interaktive Quizzes und lässt sich ideal mit einem passenden Hypnose-Audio kombinieren.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  'Video-Lektionen mit professioneller Moderation',
                  'Interaktive Quizzes zur Wissensüberprüfung',
                  'Ideal kombinierbar mit Hypnose-Audio-Programmen',
                  'Auch als Firmenangebot mit Teilnehmer-Tracking verfügbar',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Firmenangebot-Hinweis */}
            <div className="flex items-start gap-5 bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] rounded-2xl px-6 py-5 mt-2">
              <div className="w-11 h-11 bg-primary/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-headline font-bold text-white mb-1.5">
                  Spezielle Firmenangebote
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Für Unternehmen bieten wir massgeschneiderte Pakete: E-Learning-Kurse kombiniert mit Hypnose-Audio-Programmen und persönlichen Workshops – vor Ort oder online. Ein umfassendes Angebot für die mentale Gesundheit Ihrer Mitarbeitenden, inklusive Teilnehmer-Tracking und HR-Reporting.
                </p>
                <Link
                  href="/unternehmen/firmenangebote"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-3 hover:gap-3 transition-all"
                >
                  Firmenangebote entdecken
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper bg="white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.filter(c => c.isActive).map((course) => {
              const totalMinutes = course.lessons.reduce((sum, l) => {
                const match = l.duration.match(/(\d+)/)
                return sum + (match ? parseInt(match[1]) : 0)
              }, 0)

              const stripePriceMap: Record<string, string> = {
                'stressmanagement-grundlagen': 'elearning-stressmanagement',
                'rauchfrei-werden': 'elearning-rauchfrei',
                'gesund-abnehmen': 'elearning-abnehmen',
              }
              const productSlug = stripePriceMap[course.slug] || course.slug

              return (
                <div
                  key={course.slug}
                  className="bg-white rounded-2xl border border-[#eaeaea] overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  {/* Course Cover – klickbar zur Kursseite */}
                  <Link href={`/academy/kurs/${course.slug}`} className="group">
                    <div className="bg-gradient-to-br from-[#0e1e08] to-[#1a3a0e] px-5 py-6 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)',
                        }} />
                      </div>
                      <div className="relative">
                        <div className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/25 rounded-full px-3 py-1 mb-3">
                          <GraduationCap size={12} className="text-primary" />
                          <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">E-Learning</span>
                        </div>
                        <h3 className="text-lg font-headline font-bold text-white leading-snug group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-white/50 text-xs mt-1">{course.subtitle}</p>
                      </div>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Video size={12} />
                        {course.lessons.length} Lektionen
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        ca. {totalMinutes} Min.
                      </span>
                      <span className="flex items-center gap-1">
                        <HelpCircle size={12} />
                        {course.lessons.length * 3} Quizfragen
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                      {course.description.length > 120 ? course.description.substring(0, 120) + '...' : course.description}
                    </p>

                    <Link
                      href={`/academy/kurs/${course.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all mb-4"
                    >
                      Kurs ansehen
                      <ArrowRight size={14} />
                    </Link>

                    <div className="mt-auto pt-4 border-t border-[#f0f0f0]">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-black text-gray-900 font-headline">€/CHF 48.20</span>
                          <span className="text-xs text-gray-400 ml-1">inkl. MwSt.</span>
                        </div>
                        <ELearningBuyButton slug={productSlug} />
                      </div>

                      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#f0f0f0]">
                        <Building2 size={13} className="text-primary flex-shrink-0" />
                        <span className="text-xs text-gray-400">Spezialkonditionen für Unternehmen</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
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

function ELearningBuyButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()
      if (res.ok && data.url) {
        window.open(data.url, '_blank')
      }
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#6aaa22] transition-colors disabled:opacity-50"
    >
      {loading ? 'Bitte warten...' : 'Kaufen'}
    </button>
  )
}
