import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import PartnerQualifyForm from '@/components/forms/PartnerQualifyForm'
import {
  CheckCircle2, ArrowRight, Rocket, Users, Building2,
  GraduationCap, HeartHandshake, Globe, Shield, Briefcase,
  Zap, Star, MapPin, Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner werden – hypnovital®',
  description: 'Werde einer der ersten hypnovital® Partner und baue ein sinnvolles Business auf.',
  robots: { index: false, follow: false },
}

export default function PartnerPage() {
  return (
    <>
      {/* 1. Hero – Stunde 0 */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <Rocket size={16} className="text-primary" />
              <span className="text-primary text-sm font-bold">Exklusive Partner-Information</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-white mb-6 leading-tight">
              Sei von Stunde 0 an dabei.
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Wir bauen gerade etwas Grosses auf. hypnovital ist kein fertiges Franchise, das du einfach übernimmst – es ist eine Bewegung, die du aktiv mitgestaltest. Als einer der ersten Partner.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
              <p className="text-primary font-bold text-lg mb-2">Warum jetzt der perfekte Zeitpunkt ist</p>
              <div className="space-y-2">
                {[
                  'Du gestaltest mit – Methoden, Prozesse, die Zukunft der Marke',
                  'Du sicherst dir deine Region, bevor es andere tun',
                  'Du profitierst vom Gründerpreis – die Konditionen werden nie wieder so günstig sein',
                  'Du wirst Teil der Gründungsgeschichte von hypnovital',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#bewerbung"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Jetzt bewerben <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Was hypnovital wirklich ist */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Mehr als Audio</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            hypnovital ist ein vollständiges Business-System
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Audio-Programme sind nur ein kleiner Teil. Als hypnovital Partner arbeitest du in drei grossen Bereichen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users size={28} className="text-primary" />,
              title: 'Privatcoaching',
              items: ['Einzelsitzungen (ab €/CHF 150)', 'Transformationsprogramme (3–6 Monate)', 'Gruppenworkshops', 'Persönliche Audio-Programme'],
              desc: 'Begleite Menschen bei echter Veränderung – von Stress über Gewohnheiten bis Selbstvertrauen.',
            },
            {
              icon: <Building2 size={28} className="text-primary" />,
              title: 'Firmenschulungen',
              items: ['Kompakt-Workshops (3–4 Stunden)', '3-Monatsprogramme für Teams', 'Executive Coaching', 'Keynotes und Vorträge'],
              desc: 'Unternehmen investieren zunehmend in mentale Gesundheit. Hier entstehen die grössten Aufträge.',
              highlight: true,
            },
            {
              icon: <Globe size={28} className="text-primary" />,
              title: 'Digitale Produkte',
              items: ['Audio-Programme im Shop', 'Personalisierte Hypnose-Audios', 'Online-Coaching-Sessions', 'Wissensplattform für Klienten'],
              desc: 'Skalierbare Einnahmen, die auch arbeiten, wenn du es nicht tust.',
            },
          ].map((block) => (
            <div
              key={block.title}
              className={`rounded-2xl p-8 ${block.highlight ? 'bg-[#0e1e08] text-white' : 'bg-white shadow-sm'}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                block.highlight ? 'bg-primary/20' : 'bg-primary/10'
              }`}>
                {block.icon}
              </div>
              <h3 className={`font-headline font-bold text-xl mb-2 ${
                block.highlight ? 'text-white' : 'text-gray-900'
              }`}>{block.title}</h3>
              <p className={`text-sm mb-4 leading-relaxed ${
                block.highlight ? 'text-white/60' : 'text-gray-500'
              }`}>{block.desc}</p>
              <div className="space-y-2">
                {block.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                    <span className={`text-sm ${block.highlight ? 'text-white/80' : 'text-gray-600'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Was du als Partner bekommst */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Dein Paket</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6">
              Alles, was du für einen professionellen Start brauchst
            </h2>
            <div className="space-y-3">
              {[
                'Ausbildung in der hypnovital Academy (House of Change Methode)',
                'Offizielle Zertifizierung als hypnovital Coach',
                'Vollständige Schulungsunterlagen und Hypnosetexte',
                'Workshop-Strukturen für Gruppen und Einzelsettings',
                'Firmen-Präsentationen und Verkaufsunterlagen',
                'Marketing-Vorlagen (Flyer, Inserate, Social Media)',
                'CI/CD-Richtlinien und professioneller Markenauftritt',
                'Eigene Profilseite im Coach-Verzeichnis',
                'Audio-Produktlinie zum Weiterverkauf',
                'Zugang zur Wissensplattform für deine Klienten',
                'Laufender Support durch die Zentrale',
                'Community und regelmässiger Austausch',
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
              { icon: <GraduationCap size={22} className="text-primary" />, title: 'hypnovital Academy', text: 'Fundierte Ausbildung in Hypnose, Coaching und der House of Change Methode. Inkl. Zertifizierung und laufende Weiterbildung.' },
              { icon: <Briefcase size={22} className="text-primary" />, title: 'Firmenkunden-Zugang', text: 'Firmenveranstaltungen werden zentral organisiert. Du wirst für Einsätze gebucht und separat vergütet.' },
              { icon: <Shield size={22} className="text-primary" />, title: 'Zentrale Administration', text: 'Rechnungsstellung, Zahlungsabwicklung, Teilnehmerverwaltung – das übernehmen wir für dich.' },
              { icon: <HeartHandshake size={22} className="text-primary" />, title: 'Persönliches Coaching', text: 'Laufende Betreuung durch den Franchisegeber. Bei Fragen, Herausforderungen oder strategischer Weiterentwicklung.' },
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

      {/* 5. Investition */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Investition</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-6">
            Transparent und fair
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Deutschland */}
            <svg width="36" height="24" viewBox="0 0 36 24" className="rounded shadow-sm">
              <rect width="36" height="8" fill="#000000" />
              <rect y="8" width="36" height="8" fill="#DD0000" />
              <rect y="16" width="36" height="8" fill="#FFCC00" />
            </svg>
            {/* Schweiz */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="rounded shadow-sm">
              <rect width="24" height="24" fill="#DA291C" />
              <rect x="4" y="9" width="16" height="6" fill="#FFFFFF" />
              <rect x="9" y="4" width="6" height="16" fill="#FFFFFF" />
            </svg>
            {/* Österreich */}
            <svg width="36" height="24" viewBox="0 0 36 24" className="rounded shadow-sm">
              <rect width="36" height="8" fill="#ED2939" />
              <rect y="8" width="36" height="8" fill="#FFFFFF" />
              <rect y="16" width="36" height="8" fill="#ED2939" />
            </svg>
          </div>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Wir glauben an Transparenz. Hier siehst du die Grössenordnung der Investition – die genauen Konditionen besprechen wir im persönlichen Gespräch.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 border border-red-200 rounded-full mb-10">
            <span className="text-red-600 text-sm font-bold">Gründerpreis – nur für die ersten 10 Partner. Danach steigt die Einstiegsgebühr auf €/CHF 24'900.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Einstieg */}
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={24} className="text-primary" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Einstiegsgebühr</p>
            <p className="text-3xl font-headline font-black text-gray-900 mb-1">ab €/CHF 9'900</p>
            <p className="text-sm text-gray-500 mb-4">einmalig</p>
            <div className="text-left space-y-2 pt-4 border-t border-[#eaeaea]">
              {['Academy-Ausbildung', 'Zertifizierung', 'Alle Materialien', 'Coach-Verzeichnis'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Jährlich */}
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center ring-2 ring-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={24} className="text-primary" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Jährliche Lizenz</p>
            <p className="text-3xl font-headline font-black text-gray-900 mb-1">€/CHF 2'400</p>
            <p className="text-sm text-gray-500 mb-4">pro Jahr (€/CHF 200/Mt.)</p>
            <div className="text-left space-y-2 pt-4 border-t border-[#eaeaea]">
              {['Marketing & Plattform', 'Weiterbildungen', 'Support & Community', 'Rezertifizierung'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Veranstaltung */}
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-primary" />
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Pro Teilnehmer</p>
            <p className="text-3xl font-headline font-black text-gray-900 mb-1">€/CHF 49</p>
            <p className="text-sm text-gray-500 mb-4">pro Seminarteilnehmer</p>
            <div className="text-left space-y-2 pt-4 border-t border-[#eaeaea]">
              {['Hypnose-MP3 für Teilnehmer', 'Wissensplattform-Zugang', 'Administration & Abrechnung', 'Zentrale Kommunikation'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gründerangebot */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-[#0e1e08] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star size={28} className="text-primary" />
            </div>
            <div>
              <p className="text-primary font-bold text-lg mb-2">Gründer-Angebot – nur für die ersten Partner</p>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                Wer jetzt einsteigt, profitiert von Sonderkonditionen, die es später nicht mehr geben wird. Du bist nicht nur Partner – du bist Mitgestalter. Die Details besprechen wir im persönlichen Gespräch.
              </p>
              <a
                href="#bewerbung"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:underline"
              >
                Jetzt bewerben <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. So läuft es ab */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Dein Weg</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Vom Interesse zum Partner in 4 Schritten
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              step: '01',
              title: 'Bewerbung',
              text: 'Du füllst das Formular unten aus. Wir prüfen, ob dein Profil grundsätzlich passt.',
            },
            {
              step: '02',
              title: 'Gespräch mit Franz',
              text: 'Wir lernen uns kennen, besprechen deine Situation und klären alle Fragen persönlich.',
            },
            {
              step: '03',
              title: 'Ausbildung & Zertifizierung',
              text: 'Du durchläufst die hypnovital Academy und wirst offiziell zertifiziert.',
            },
            {
              step: '04',
              title: 'Start in deiner Region',
              text: 'Du startest mit System, Materialien und voller Unterstützung durch die Zentrale.',
            },
          ].map((item, i) => (
            <div key={item.step} className="relative">
              <div className="bg-[#f5f5f5] rounded-2xl p-6 h-full">
                <div className="text-4xl font-black font-headline text-primary/20 mb-3">{item.step}</div>
                <h3 className="font-headline font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 bg-primary rounded-full items-center justify-center">
                  <ArrowRight size={10} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 7. Wen wir suchen */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Profil</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Wen wir suchen
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Wir suchen keine Mitarbeiter – wir suchen unternehmerisch denkende Persönlichkeiten, die etwas aufbauen wollen. Erfahrung im Coaching-Bereich ist wertvoll, aber nicht zwingend. Was zählt: Haltung, Motivation und der Wille, etwas Sinnvolles zu tun.
            </p>
            <div className="space-y-3">
              {[
                'Du arbeitest gerne mit Menschen und möchtest echte Wirkung erzielen',
                'Du denkst unternehmerisch und übernimmst Verantwortung',
                'Du bist offen für eine bewährte Methode und bereit zu lernen',
                'Du möchtest nicht nur Klienten begleiten, sondern ein Business aufbauen',
                'Du bist bereit, in deine Zukunft zu investieren',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <Users size={20} className="text-primary" />, label: 'Coaches & Trainer' },
              { icon: <HeartHandshake size={20} className="text-primary" />, label: 'Hypnotiseure & Therapeuten' },
              { icon: <GraduationCap size={20} className="text-primary" />, label: 'Mentaltrainer & NLP' },
              { icon: <Briefcase size={20} className="text-primary" />, label: 'HR & People Manager' },
              { icon: <MapPin size={20} className="text-primary" />, label: 'Selbständige mit Praxis' },
              { icon: <Rocket size={20} className="text-primary" />, label: 'Motivierte Quereinsteiger' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. Bewerbungsformular */}
      <SectionWrapper bg="white" id="bewerbung">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Bewerbung</span>
            <h2 className="text-3xl font-headline font-black text-gray-900 mt-3 mb-3">
              Passt es? Finden wir es heraus.
            </h2>
            <p className="text-gray-500">
              Beantworte die Fragen ehrlich – direkt nach dem Absenden siehst du, ob dein Profil passt. Wenn ja, kannst du sofort einen persönlichen Kennenlerntermin mit Franz buchen.
            </p>
          </div>
          <PartnerQualifyForm />
        </div>
      </SectionWrapper>
    </>
  )
}
