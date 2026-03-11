import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import InquiryForm from '@/components/forms/InquiryForm'
import Link from 'next/link'
import {
  CheckCircle2, Heart, TrendingUp, Users, Zap,
  Shield, Award, Monitor, MapPin, Home, Star,
  Calendar, RefreshCw, Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programme & Coaching',
  description: 'Coaching mit Struktur, Qualität und echter Tiefe. Zertifizierte hypnovital® Coaches – online, vor Ort oder bei dir.',
}

export default function ProgrammePage() {
  return (
    <>

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Privatpersonen · Programme & Coaching
          </p>
          <h1 className="text-white font-headline font-black text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
            Coaching mit Struktur,<br />Qualität und echter Tiefe
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            Mit hypnovital® arbeitest du mit zertifizierten Coaches nach einem klaren, erprobten Konzept – online, vor Ort oder bei dir. Für nachhaltige Veränderung bei Stress, Gewohnheiten, Selbstvertrauen, Fokus und persönlichen Zielen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#anfrage"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Coaching anfragen
            </Link>
            <Link
              href="/veranstaltungen"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Veranstaltungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Qualität & Vertrauen */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Qualität & Vertrauen</p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Der Unterschied, der zählt
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Der Coaching-Markt ist unübersichtlich. Viele Coaches haben ihre eigene Homepage, ihr eigenes Vorgehen – und behaupten, sie seien die Besten. Für Klientinnen und Klienten ist es schwer zu beurteilen, wem sie wirklich vertrauen können.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            hypnovital® ist anders: eine Marke mit System, Standards und nachgewiesener Qualität. Jeder hypnovital® Coach durchläuft eine fundierte Ausbildung im hypnovital® Konzept, wird zertifiziert und regelmässig rezertifiziert. Das bedeutet für dich:{' '}
            <span className="font-semibold text-gray-900">Du erhältst professionelle Begleitung nach einem erprobten Konzept – unabhängig davon, mit welchem hypnovital® Coach du arbeitest.</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Award, label: 'Zertifizierte Coaches', desc: 'Jeder Coach wird im hypnovital® Konzept ausgebildet und zertifiziert – bevor er Klienten begleitet.' },
              { icon: RefreshCw, label: 'Regelmässige Rezertifizierung', desc: 'Coaches werden laufend weiterentwickelt und rezertifiziert. Qualität ist kein Einmalevent.' },
              { icon: Shield, label: 'Einheitliche Standards', desc: 'Klare Methodenstandards und strukturierte Prozesse – im gesamten DACH-Raum.' },
            ].map((item) => (
              <div key={item.label} className="bg-[#f5f5f5] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Themen / Einsatzbereiche */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900">
            Womit kann hypnovital® helfen?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Heart,
              title: 'Gesundheit',
              items: ['Stress reduzieren', 'Burnout vorbeugen', 'Gewicht reduzieren', 'Rauchfrei werden'],
            },
            {
              icon: Star,
              title: 'Persönliche Entwicklung',
              items: ['Selbstvertrauen stärken', 'Blockaden lösen', 'Ängste überwinden'],
            },
            {
              icon: Zap,
              title: 'Leistung & Fokus',
              items: ['Motivation steigern', 'Konzentration verbessern', 'Mentale Stärke entwickeln'],
            },
            {
              icon: TrendingUp,
              title: 'Lebensveränderung',
              items: ['Gewohnheiten verändern', 'Emotionale Belastungen lösen', 'Neue Perspektiven entwickeln'],
            },
          ].map((area) => (
            <div key={area.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <area.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-gray-900 mb-3">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. Angebotsboxen */}
      <SectionWrapper bg="white" id="angebote">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900">Unsere Angebote</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Einzelcoaching */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 flex flex-col">
            <div className="mb-5">
              <span className="inline-block bg-white text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">60 Minuten</span>
              <h3 className="font-headline font-bold text-xl text-gray-900 mb-1">Einzelcoaching</h3>
              <p className="font-headline font-black text-2xl text-primary">ab €/CHF 150</p>
              <p className="text-gray-400 text-sm">pro Session</p>
              <p className="text-xs text-gray-400 mt-0.5">inkl. MwSt. (CH) / zzgl. MwSt. (DE/AT)</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Individuelles Coaching mit einem zertifizierten hypnovital® Coach. Persönlich, tiefgehend und auf deine Situation zugeschnitten.
            </p>
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Geeignet für</p>
              <ul className="space-y-1.5">
                {['Stress & Burnout', 'Rauchstopp', 'Gewichtsreduktion', 'Selbstvertrauen', 'Lampenfieber', 'Fokus & Konzentration', 'Persönliche Blockaden'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={12} className="text-primary flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Inhalte</p>
              <ul className="space-y-1.5">
                {['Persönliche Zielklärung', 'Hypnose-Session', 'Coachinggespräch', 'Konkrete Impulse für den Alltag', 'Ergänzende Übungen (auf Wunsch)'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={12} className="text-primary flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Online', 'Vor Ort', 'Bei dir'].map((m) => (
                <span key={m} className="text-xs bg-white border border-[#eaeaea] text-gray-500 px-3 py-1 rounded-full">{m}</span>
              ))}
            </div>
            <div className="mt-auto">
              <Link href="#anfrage" className="block text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors text-sm">
                Anfragen
              </Link>
            </div>
          </div>

          {/* Intensivprogramm – highlighted */}
          <div className="bg-primary rounded-2xl p-6 flex flex-col">
            <div className="mb-5">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">12 Wochen</span>
              <h3 className="font-headline font-bold text-xl text-white mb-1">3-Monate Transformation</h3>
              <p className="font-headline font-black text-2xl text-white">ab €/CHF 2'400</p>
              <p className="text-white/60 text-sm">Intensivprogramm</p>
              <p className="text-white/40 text-xs mt-0.5">inkl. MwSt. (CH) / zzgl. MwSt. (DE/AT)</p>
            </div>
            <p className="text-white/85 text-sm leading-relaxed mb-5">
              Für Menschen, die echte und nachhaltige Veränderung erreichen möchten. Über 12 Wochen begleiten wir dich Schritt für Schritt durch einen strukturierten Transformationsprozess.
            </p>
            <div className="mb-4">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Inhalte</p>
              <ul className="space-y-1.5">
                {['12 Hypnose-Sessions', 'Regelmässige Coachinggespräche', 'Individuelle Audio-Programme', 'Wöchentliche Reflexion & Feedback'].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle2 size={12} className="text-white flex-shrink-0 mt-0.5" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mb-3">
              <p className="text-xs font-semibold text-white/60 mb-1.5">Individuelle Audio-Programme</p>
              <p className="text-white/75 text-xs leading-relaxed">
                Speziell auf dich und dein Thema zugeschnittene Audio-Programme, damit du zwischen den Sessions gezielt weiterarbeitest und Veränderungen im Alltag vertiefst.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 mb-4">
              <p className="text-xs font-semibold text-white/60 mb-2">Jede Woche</p>
              <ul className="space-y-1">
                {['Kurze Online-Reflexion', 'Persönliches Feedback vom Coach', 'Neue Übungen & Fokusthemen'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-white/80">
                    <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-white/55 text-xs italic leading-relaxed mb-5">
              Studien aus der Coaching- und Health-Coaching-Forschung zeigen, dass regelmässige Begleitung, Feedback, Zielklarheit und Accountability nachhaltige Verhaltensänderung und Zielerreichung wirksam unterstützen.
            </p>
            <div className="mt-auto">
              <Link href="#anfrage" className="block text-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors text-sm">
                Anfragen
              </Link>
            </div>
          </div>

          {/* Gruppen-Workshop */}
          <div className="bg-[#f5f5f5] rounded-2xl p-6 flex flex-col">
            <div className="mb-5">
              <span className="inline-block bg-white text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">ab 5 Personen</span>
              <h3 className="font-headline font-bold text-xl text-gray-900 mb-1">Gruppen-Workshop</h3>
              <p className="font-headline font-black text-2xl text-primary">ab €/CHF 90</p>
              <p className="text-gray-400 text-sm">pro Person</p>
              <p className="text-xs text-gray-400 mt-0.5">inkl. MwSt. (CH) / zzgl. MwSt. (DE/AT)</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Gemeinsam lernen und wachsen. Unsere Gruppen-Workshops verbinden fundiertes Wissen, persönliche Erfahrung und Hypnose-Anwendungen zu einem motivierenden Gruppenerlebnis.
            </p>
            <div className="mb-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Geeignet für</p>
              <ul className="space-y-1.5">
                {['Freundeskreis', 'Verein', 'Schule', 'Private Gruppen'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={12} className="text-primary flex-shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-gray-500 mb-5">
              <span className="font-semibold text-gray-700">Wir kommen zu euch –</span> ab 5 Personen auf Wunsch direkt bei euch.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Online', 'Vor Ort', 'Bei dir'].map((m) => (
                <span key={m} className="text-xs bg-white border border-[#eaeaea] text-gray-500 px-3 py-1 rounded-full">{m}</span>
              ))}
            </div>
            <div className="mt-auto">
              <Link href="#anfrage" className="block text-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors text-sm">
                Anfragen
              </Link>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* 5. Warum hypnovital® */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-3">
              Warum hypnovital®
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Nicht einfach irgendein Coach-Angebot. Eine Marke mit Methode, Standards und Qualitätssicherung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Award,      title: 'Zertifizierte Coaches',         desc: 'Alle hypnovital® Coaches absolvieren eine fundierte Ausbildung im hypnovital® Konzept und werden zertifiziert.' },
              { icon: RefreshCw,  title: 'Laufende Rezertifizierung',     desc: 'Regelmässige Weiterbildung und Rezertifizierung sichern die Qualität dauerhaft – nicht nur bei der Erstausbildung.' },
              { icon: Shield,     title: 'Einheitliche Standards',        desc: 'Klare Methodenstandards und strukturierte Prozesse im gesamten DACH-Raum – du weisst, was du bekommst.' },
              { icon: Users,      title: 'Vergleichbares Erlebnis',       desc: 'Du erhältst professionelle Begleitung nach einem erprobten Konzept – unabhängig davon, mit welchem hypnovital® Coach du arbeitest.' },
              { icon: Globe,      title: 'DACH-weites Netzwerk',          desc: 'Zertifizierte Coaches in der Schweiz, Deutschland und Österreich – online oder persönlich in deiner Region.' },
              { icon: Zap,        title: 'Wissenschaftlich fundiert',     desc: 'Hypnose ist eine anerkannte psychologische Methode. APA und BPS bestätigen die Wirksamkeit bei Stressreduktion und Verhaltensänderung.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs italic text-center mt-6 max-w-2xl mx-auto">
            Die American Psychological Association (APA) und die British Psychological Society (BPS) anerkennen Hypnose als wirksames psychologisches Werkzeug mit messbarer Wirkung bei Stressreduktion, Schmerzmanagement und Verhaltensänderung.
          </p>
        </div>
      </SectionWrapper>

      {/* 6. Online / Vor Ort / Bei dir */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900">
            Die Durchführungsart, die sich dir anpasst
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Monitor,
              title: 'Online Coaching',
              desc: 'Flexibel, ortsunabhängig und genauso wirkungsvoll. Per Video-Call von zu Hause oder von unterwegs – du brauchst nur einen ruhigen Ort.',
            },
            {
              icon: MapPin,
              title: 'Vor Ort beim Coach',
              desc: 'Persönliche Sessions bei einem zertifizierten hypnovital® Coach in deiner Region. Für alle, die den direkten Kontakt bevorzugen.',
            },
            {
              icon: Home,
              title: 'Oder bei dir',
              desc: 'Wenn es thematisch und organisatorisch passt, kommen wir auch zu dir – ob für ein Einzelcoaching oder einen Gruppen-Workshop.',
            },
          ].map((opt) => (
            <div key={opt.title} className="bg-[#f5f5f5] rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <opt.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-gray-900 mb-2">{opt.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6b. Coach finden */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">Coach-Suche</p>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-5">
              Finde deinen persönlichen hypnovital® Coach
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Alle hypnovital® Coaches sind nach demselben Konzept ausgebildet und zertifiziert – du kannst darauf vertrauen, professionelle Begleitung auf gleichem Niveau zu erhalten, wo auch immer du dich befindest.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Finde einen Coach in deiner Region oder entscheide dich für eine Online-Begleitung. Unsere Coach-Suche zeigt dir zertifizierte hypnovital® Coaches in der Schweiz, Deutschland und Österreich.
            </p>
            <Link
              href="/coach"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Zum Coach-Verzeichnis
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Zertifiziert', desc: 'Jeder Coach ist im hypnovital® Konzept ausgebildet und geprüft.' },
              { label: 'DACH-weit', desc: 'Coaches in der Schweiz, Deutschland und Österreich.' },
              { label: 'Online & vor Ort', desc: 'Du wählst, ob du persönlich oder per Video-Call arbeitest.' },
              { label: 'Alle Themen', desc: 'Von Stress bis Selbstvertrauen – jeder Coach begleitet das volle Spektrum.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm">
                <p className="font-semibold text-gray-900 text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Öffentliche Workshops & Events */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calendar size={22} className="text-primary" />
          </div>
          <h2 className="text-3xl font-headline font-black text-gray-900 mb-4">
            Öffentliche Workshops & Veranstaltungen
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Wir schreiben regelmässig öffentliche Workshops und Veranstaltungen aus. Diese eignen sich ideal, um die hypnovital® Methode in einer Gruppe kennenzulernen oder an einem bestimmten Thema gemeinsam mit anderen zu arbeiten.
          </p>
          <Link
            href="/veranstaltungen"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
          >
            Zu den Veranstaltungen
          </Link>
        </div>
      </SectionWrapper>

      {/* 8. FAQ */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-10 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              {
                q: 'Wie finde ich den passenden hypnovital® Coach?',
                a: 'Alle hypnovital® Coaches arbeiten nach denselben Standards und sind im gleichen Konzept ausgebildet. Du kannst über unsere Coach-Suche einen Coach in deiner Region finden oder direkt eine Anfrage stellen – wir helfen dir, den richtigen Coach zu finden.',
              },
              {
                q: 'Worin unterscheidet sich hypnovital® von anderen Coaching-Angeboten?',
                a: 'hypnovital® ist keine Einzelperson, sondern eine Marke mit klarer Methode, definierten Standards, eigenem Ausbildungsprogramm und regelmässiger Rezertifizierung. Du weisst, was dich erwartet – unabhängig davon, mit welchem hypnovital® Coach du arbeitest.',
              },
              {
                q: 'Ist Hypnose wissenschaftlich fundiert?',
                a: 'Ja. Die American Psychological Association (APA) und die British Psychological Society (BPS) anerkennen Hypnose als wirksames psychologisches Werkzeug. Klinische Studien belegen die Wirksamkeit bei Stressreduktion, Verhaltensänderung und mentalem Training.',
              },
              {
                q: 'Kann ich online oder vor Ort arbeiten?',
                a: 'Beides ist möglich. Unsere Coaches bieten Sessions online per Video-Call, vor Ort in ihrer Praxis oder auf Wunsch auch bei dir an. Bei Gruppen-Workshops kommen wir ab 5 Personen auch direkt zu euch.',
              },
              {
                q: 'Wie viele Sessions sind sinnvoll?',
                a: 'Das hängt vom Thema und deinen Zielen ab. Viele Klientinnen und Klienten erleben bereits nach wenigen Sessions eine spürbare Veränderung. Für tiefere, nachhaltige Transformation empfehlen wir das 3-Monate Intensivprogramm mit 12 Sessionen und wöchentlicher Begleitung.',
              },
              {
                q: 'Was ist der Unterschied zwischen Einzelcoaching und Intensivprogramm?',
                a: 'Einzelcoachings sind flexibel buchbar und ideal für konkrete Themen oder einen ersten Einstieg. Das Intensivprogramm ist ein strukturierter 12-Wochen-Prozess mit Hypnose-Sessions, individuellem Audio-Programm, wöchentlicher Reflexion und persönlichem Feedback – für echte, dauerhafte Veränderung.',
              },
              {
                q: 'Für welche Themen eignet sich das Intensivprogramm?',
                a: 'Das Intensivprogramm ist besonders wirkungsvoll bei tief verankerten Gewohnheiten: Gewichtsreduktion, Rauchstopp, chronischer Stress, Burnout-Prävention, Selbstvertrauen oder persönliche Neuausrichtung.',
              },
              {
                q: 'Kommt hypnovital® auch zu Gruppen, Schulen oder Vereinen?',
                a: 'Ja. Ab einer Gruppe von 5 Personen kommen wir auf Wunsch direkt zu euch – ob Freundeskreis, Verein, Schule oder eine andere private Gruppe. Einfach anfragen und wir besprechen das passende Format.',
              },
            ].map((faq) => (
              <details key={faq.q} className="group">
                <summary className="py-4 cursor-pointer font-semibold text-gray-900 list-none flex justify-between items-center hover:text-primary transition-colors">
                  {faq.q}
                  <ChevronIcon />
                </summary>
                <p className="pb-5 text-gray-500 leading-relaxed text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Gesundheitlicher Disclaimer */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto bg-[#f9f9f9] border border-[#eaeaea] rounded-xl px-6 py-4 text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700">Hinweis:</strong> Die Angebote von hypnovital® (Coaching, Hypnose, Audio-Programme) dienen der
          persönlichen Weiterentwicklung, Entspannung und Stressprävention. Sie ersetzen keine medizinische,
          psychotherapeutische oder psychiatrische Behandlung und stellen keine Heilkunde dar.
          Bei gesundheitlichen Beschwerden oder psychischen Erkrankungen wenden Sie sich bitte an eine
          qualifizierte Fachperson.
        </div>
      </SectionWrapper>

      {/* 9. CTA / Anfrage */}
      <SectionWrapper bg="gray" id="anfrage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Deine Veränderung beginnt<br className="hidden sm:block" /> mit dem ersten Schritt
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
              Ob Einzelcoaching, Intensivprogramm oder Workshop – wir finden gemeinsam das passende Format für dich.
            </p>
            <Link
              href="/veranstaltungen"
              className="inline-flex items-center justify-center px-7 py-3 border border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-white transition-colors text-sm mb-8"
            >
              Veranstaltungen ansehen
            </Link>
          </div>
          <InquiryForm
            title="Coaching anfragen"
            context="Coaching / Programme"
            showDeliveryMethod
            interestOptions={['Einzelcoaching', '3-Monate Transformation', 'Gruppen-Workshop']}
          />
        </div>
      </SectionWrapper>

    </>
  )
}

function ChevronIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
