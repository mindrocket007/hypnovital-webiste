import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Building2, GraduationCap, Shield, Brain, Network, Star } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/lib/data'

export const metadata: Metadata = {
  title: 'hypnovital – Mentale Veränderung beginnt im Unterbewusstsein',
  description:
    'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit – für Privatpersonen, Unternehmen und Coaches in der Schweiz, Deutschland und Österreich.',
  openGraph: {
    title: 'hypnovital – Mentale Veränderung beginnt im Unterbewusstsein',
    description:
      'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit.',
    url: 'https://hypnovital.net',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hypnovital – Mentale Veränderung beginnt im Unterbewusstsein',
    description:
      'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit.',
  },
  alternates: {
    canonical: 'https://hypnovital.net',
  },
}

// ---- Startseite ----

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.isActive).slice(0, 3)

  return (
    <>
      {/* ==============================
          1. HERO
      ============================== */}
      <section className="relative min-h-[88vh] flex items-center bg-white overflow-hidden">
        {/* Subtile Hintergrund-Akzente */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block text-primary text-xs font-semibold tracking-widest mb-6">
              hypnovital&#174;
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-brand-dark leading-[1.05] tracking-tight mb-6">
              Veränderung beginnt im Unterbewusstsein
            </h1>
            <p className="text-brand-gray text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und
              Leistungsfähigkeit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programme"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-200 text-base"
              >
                Für Privatpersonen
              </Link>
              <Link
                href="/unternehmen/firmenangebote"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-200 text-base"
              >
                Für Unternehmen
              </Link>
              <Link
                href="/coach"
                className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-200 text-base"
              >
                Coach suchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          2. DREI EINSTIEGSKARTEN
      ============================== */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            Für wen ist hypnovital®?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Wir begleiten Menschen und Organisationen auf dem Weg zu nachhaltiger mentaler Stärke.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={24} className="text-primary" />,
              title: 'Privatpersonen',
              description:
                'Audio-Programme, persönliches Coaching und Workshops für deinen individuellen Weg zu mehr Stärke und Gesundheit.',
              href: '/programme',
              cta: 'Programme entdecken',
            },
            {
              icon: <Building2 size={24} className="text-primary" />,
              title: 'Unternehmen',
              description:
                'Massgeschneiderte Workshops und Programme für Teams und Führungskräfte. Mehr Resilienz, Leistung und Wohlbefinden.',
              href: '/unternehmen/firmenangebote',
              cta: 'Mehr erfahren',
            },
            {
              icon: <GraduationCap size={24} className="text-primary" />,
              title: 'Coaches & Franchise',
              description:
                'Werde hypnovital® Coach. Nutze unsere Methode, Materialien und Marke für deinen eigenen Erfolg.',
              href: '/franchise',
              cta: 'Coach werden',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[16px] p-8 flex flex-col border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 tracking-tight">{card.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-6">{card.description}</p>
              <Link
                href={card.href}
                className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                {card.cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          3. VERTRAUEN / POSITIONIERUNG
      ============================== */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Brain size={20} className="text-primary" />,
              title: 'Wissenschaftlich fundiert',
              text: 'Unsere Methode basiert auf anerkannten psychologischen Grundlagen und modernen Coaching-Ansätzen.',
            },
            {
              icon: <Shield size={20} className="text-primary" />,
              title: 'Seriös & professionell',
              text: 'Kein Showhypnose-Look. Kein Esoterik-Ansatz. Klare Methode, klare Wirkung.',
            },
            {
              icon: <Users size={20} className="text-primary" />,
              title: 'Für alle Lebensbereiche',
              text: 'Von persönlichen Veränderungen bis hin zu Unternehmensprogrammen – wir begleiten ganzheitlich.',
            },
            {
              icon: <Network size={20} className="text-primary" />,
              title: 'Wachsendes Netzwerk',
              text: 'Coaches in der Schweiz, Deutschland und Österreich. Lokal verfügbar, digital überall.',
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-bold text-brand-dark tracking-tight">{item.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          4. HYPNOVITAL METHODE
      ============================== */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Die Methode</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-2 mb-4">
            House of Change
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Die hypnovital® Methode begleitet dich in fünf strukturierten Schritten zur nachhaltigen
            mentalen Veränderung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              step: '01',
              title: 'House of Change',
              text: 'Das Fundament. Verstehe, wie mentale Veränderung wirklich funktioniert.',
            },
            {
              step: '02',
              title: 'Responsibility',
              text: 'Übernimm Verantwortung für deine Gedanken, Gefühle und Handlungen.',
            },
            {
              step: '03',
              title: 'Forgiveness',
              text: 'Löse alte Muster und Blockaden durch tiefes Vergeben und Loslassen.',
            },
            {
              step: '04',
              title: 'Resources',
              text: 'Aktiviere deine inneren Ressourcen und stärke deine Resilienz.',
            },
            {
              step: '05',
              title: 'Power Room',
              text: 'Dein mentaler Kraftraum. Hier entfaltest du dein volles Potenzial.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-[16px] p-6 flex flex-col border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-4xl font-bold text-primary/20 mb-4 leading-none tracking-tight">
                {item.step}
              </span>
              <h3 className="font-bold text-brand-dark mb-2 tracking-tight">{item.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          5. SHOP PREVIEW
      ============================== */}
      <SectionWrapper bg="gray">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Shop</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-1">
              Audio-Programme
            </h2>
          </div>
          <Link
            href="/shop"
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Alle Programme <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard
              key={p.id}
              slug={p.slug}
              title={p.title}
              shortDescription={p.shortDescription}
              priceFormatted={p.priceFormatted}
              category={p.category}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          6. UNTERNEHMEN TEASER
      ============================== */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">B2B</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-2 mb-4">
              hypnovital® für Unternehmen
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Mentale Gesundheit ist kein Luxus – sie ist ein Wettbewerbsvorteil. Mit unseren
              Workshops und Programmen investieren Sie in das wichtigste Kapital Ihres Unternehmens:
              Ihre Menschen.
            </p>
            <LinkButton href="/unternehmen/firmenangebote" size="md">
              Mehr erfahren
            </LinkButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Stressmanagement',
              'Resilienz',
              'Führungskräfte-Coaching',
              'Raucherentwöhnung',
              'Kreativität & Innovation',
              'Change Management',
            ].map((topic) => (
              <div
                key={topic}
                className="bg-[#f5f5f5] rounded-xl px-4 py-3 text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Star size={14} className="text-primary flex-shrink-0" />
                {topic}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ==============================
          7. COACH-NETZWERK
      ============================== */}
      <SectionWrapper bg="gray">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Coaches</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-2 mb-4">
            Unser Coach-Netzwerk
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Zertifizierte hypnovital® Coaches in der Schweiz, Deutschland und Österreich. Persönlich,
            einfühlsam und methodisch fundiert.
          </p>
          <LinkButton href="/coach" size="lg">
            Coach in deiner Nähe finden
          </LinkButton>
        </div>

        {/* Mini Coach-Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { name: 'Franz Ruchti', city: 'Alpnach', spec: 'Stressmanagement' },
            { name: 'Anna Müller', city: 'Bern', spec: 'Entspannung' },
            { name: 'Markus Weber', city: 'Basel', spec: 'Führungskräfte' },
            { name: 'Sarah Klein', city: 'München', spec: 'Lampenfieber' },
          ].map((c) => (
            <div key={c.name} className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary text-sm">{c.name.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-400">
                  {c.city} · {c.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ==============================
          8. ÜBER HYPNOVITAL
      ============================== */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Über uns</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-2 mb-6">
            Die Idee hinter hypnovital®
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg mb-4">
            hypnovital® entstand aus der Überzeugung, dass echte, nachhaltige Veränderung im
            Unterbewusstsein beginnt. Nicht mit Willenskraft allein – sondern mit der richtigen Methode.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Gegründet von Franz Ruchti, verbindet hypnovital® Hypnosetherapie, systemisches Coaching und
            mentale Trainingstechniken zu einem zugänglichen, professionellen Angebot – für Menschen
            und Unternehmen, die wirklich etwas verändern wollen.
          </p>
          <LinkButton href="/ueber-uns" variant="outline" size="md">
            Mehr über uns
          </LinkButton>
        </div>
      </SectionWrapper>

      {/* ==============================
          9. ABSCHLUSS-CTA
      ============================== */}
      <section className="bg-brand-dark py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Wähle deinen Weg zu mehr mentaler Stärke, Gesundheit und Leistungsfähigkeit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/shop"
              className="px-7 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
            >
              Programme entdecken
            </Link>
            <Link
              href="/kontakt"
              className="px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Workshop anfragen
            </Link>
            <Link
              href="/coach"
              className="px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Coach finden
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
