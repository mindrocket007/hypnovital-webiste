import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import InquiryForm from '@/components/forms/InquiryForm'
import { Heart, TrendingUp, Users, Zap, CheckCircle2, X, Activity, BarChart3, Clock, CalendarX, Banknote, TrendingDown, Target } from 'lucide-react'
import StresskostenInfografik from '@/components/ui/StresskostenInfografik'
import UebergewichtInfografik from '@/components/ui/UebergewichtInfografik'
import DemotivationInfografik from '@/components/ui/DemotivationInfografik'
import Link from 'next/link'
import LaptopMockup from '@/components/ui/LaptopMockup'
import { GraduationCap, Video, HelpCircle, ArrowRight, Monitor } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Firmenangebote',
  description: 'Wissenschaftlich fundierte Workshops, Programme und Coachings für Stressreduktion, Burnout-Prävention und Performance.',
}

export default function FirmenangebotePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Unternehmen · Firmenangebote
          </p>
          <h1 className="text-white font-headline font-black text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
            Gesunde Mitarbeitende als Wettbewerbsvorteil
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-10 leading-relaxed">
            hypnovital® unterstützt Unternehmen mit wissenschaftlich fundierten Workshops, Programmen und Coachings für Stressreduktion, Burnout-Prävention, Rauchstopp, Gewichtsreduktion, Fokus und Performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="#angebote"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              Firmenangebot entdecken
            </Link>
            <Link
              href="#anfrage"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Unverbindlich anfragen
            </Link>
          </div>
          <p className="text-white/40 text-sm">
            Wissenschaftlich fundiert · Keine Esoterik · Massgeschneidert
          </p>
        </div>
      </section>

      {/* 2. Kennzahlen */}
      <SectionWrapper bg="white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
            Mentale Gesundheit am Arbeitsplatz – in Zahlen
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Psychische Belastung ist heute die grösste Einzelursache für Produktivitätsverlust in Unternehmen – mit enormen wirtschaftlichen Folgen.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Activity,
              value: 'ca. 40 %',
              label: 'der Fehltage haben eine psychische Ursache',
              source: 'BAG · SECO, Schweiz',
            },
            {
              icon: BarChart3,
              value: 'CHF 6.5 Mrd.',
              label: 'jährliche Kosten von Stress am Arbeitsplatz in der Schweiz',
              source: 'Job-Stress-Index · Gesundheitsförderung Schweiz',
            },
            {
              icon: TrendingUp,
              value: '4 : 1',
              label: 'Return on Investment bei betrieblicher Gesundheitsförderung',
              source: 'WHO Report, 2019',
            },
            {
              icon: Clock,
              value: '12 Wochen',
              label: 'für nachhaltige, messbare Verhaltensänderung durch Coaching',
              source: 'Coaching-Forschung',
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#eaeaea] border-t-4 border-t-primary flex flex-col"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <stat.icon size={20} className="text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-headline font-black text-primary mb-2 leading-none">
                {stat.value}
              </p>
              <p className="text-gray-700 text-sm leading-snug font-medium flex-1 mb-3">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.source}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Angaben basieren auf öffentlich zugänglichen Studien und Berichten. Individuelle Ergebnisse können abweichen.
        </p>
      </SectionWrapper>

      {/* 3. Problem Section */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
              Die unsichtbaren Kosten mentaler Belastung
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Stress und psychische Belastung sind die grösste Herausforderung moderner Organisationen. Fehlzeiten, Präsentismus, innere Kündigung und Burnout kosten Unternehmen jährlich Milliarden – und herkömmliche Trainings lösen das Problem nicht, weil sie an der Oberfläche bleiben.
            </p>
            <ul className="space-y-4">
              {[
                'Stressbedingte Fehlzeiten steigen jährlich',
                'Klassische Trainings zeigen wenig Langzeitwirkung',
                'Motivationsprobleme und innere Kündigung',
                'Hohe Fluktuation durch Überlastung',
                "Burnout-Fälle kosten Unternehmen durchschnittlich CHF 16'000+",
              ].map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X size={12} className="text-red-500" />
                  </div>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <StresskostenInfografik />
          </div>
        </div>
      </SectionWrapper>

      {/* 3b. Übergewicht – Kennzahlen */}
      <SectionWrapper bg="white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
            Übergewicht am Arbeitsplatz – in Zahlen
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Übergewicht ist nicht nur ein individuelles Gesundheitsthema – es hat messbare Auswirkungen auf Produktivität, Fehlzeiten und Kosten in Unternehmen.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Users,
              value: 'ca. 42 %',
              label: 'der Schweizer Erwachsenen sind übergewichtig oder adipös (BMI ≥ 25)',
              source: 'BAG · Schweizerische Gesundheitsbefragung, 2022',
            },
            {
              icon: CalendarX,
              value: '+5 Tage',
              label: 'mehr Fehltage pro Jahr bei übergewichtigen vs. normalgewichtigen Mitarbeitenden',
              source: 'Journal of Occupational & Environmental Medicine',
            },
            {
              icon: Banknote,
              value: 'CHF 5.7 Mrd.',
              label: 'geschätzte Gesamtkosten von Übergewicht und Adipositas in der Schweiz',
              source: 'BAG · Obsan, Schweiz',
            },
            {
              icon: Heart,
              value: '2–3×',
              label: 'höheres Risiko für chronische Erkrankungen (Diabetes, Herz-Kreislauf, MSK)',
              source: 'WHO · Weltgesundheitsorganisation',
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#eaeaea] border-t-4 border-t-primary flex flex-col"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <stat.icon size={20} className="text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-headline font-black text-primary mb-2 leading-none">
                {stat.value}
              </p>
              <p className="text-gray-700 text-sm leading-snug font-medium flex-1 mb-3">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.source}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Angaben basieren auf öffentlich zugänglichen Studien und Berichten. Individuelle Ergebnisse können abweichen.
        </p>
      </SectionWrapper>

      {/* 3c. Übergewicht – Unsichtbare Kosten */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
              Die unsichtbaren Kosten von Übergewicht
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Übergewicht verursacht weit mehr als Kranktage. Leistungsminderung, häufigere Behandlungen und frühere Erwerbsunfähigkeit belasten Unternehmen jährlich erheblich – und bleiben in klassischen HR-Kennzahlen unsichtbar.
            </p>
            <ul className="space-y-4">
              {[
                'Erhöhte Fehlzeiten durch übergewichtsbedingte Erkrankungen',
                'Präsentismus: anwesend, aber leistungsgemindert',
                'Steigende Gesundheits- und Folgebehandlungskosten',
                'Höheres Risiko für Muskel-Skelett-Erkrankungen',
                'Frühinvalidität und erhöhte Fluktuationsrate',
              ].map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X size={12} className="text-red-500" />
                  </div>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <UebergewichtInfografik />
          </div>
        </div>
      </SectionWrapper>

      {/* 3d. Motivation & Sales Performance – Kennzahlen */}
      <SectionWrapper bg="white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
            Motivation & Sales Performance – in Zahlen
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Demotivation und innere Kündigung sind die teuerste Kostenstelle moderner Unternehmen –
            und gleichzeitig das grösste ungenutzte Wachstumspotenzial im Sales und in der Teamkultur.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: TrendingDown,
              value: 'nur 23 %',
              label: 'der Mitarbeitenden weltweit sind voll engagiert – 77 % schöpfen ihr Potenzial nicht aus',
              source: 'Gallup State of the Global Workplace, 2023',
            },
            {
              icon: Banknote,
              value: '€ 167 Mrd.',
              label: 'jährliche Kosten mangelnden Engagements für die deutsche Wirtschaft',
              source: 'Gallup Engagement Index Deutschland, 2023',
            },
            {
              icon: TrendingUp,
              value: '3×',
              label: 'höhere Rendite (TSR) bei Unternehmen mit starker Leistungs- und Teamkultur',
              source: 'McKinsey Organizational Health Research',
            },
            {
              icon: Target,
              value: '70 %',
              label: 'der Coaching-Teilnehmenden berichten von signifikant verbesserter Arbeitsleistung',
              source: 'ICF Global Coaching Client Study',
            },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#eaeaea] border-t-4 border-t-primary flex flex-col"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <stat.icon size={20} className="text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-headline font-black text-primary mb-2 leading-none">
                {stat.value}
              </p>
              <p className="text-gray-700 text-sm leading-snug font-medium flex-1 mb-3">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.source}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Angaben basieren auf öffentlich zugänglichen Studien und Berichten. Individuelle Ergebnisse können abweichen.
        </p>
      </SectionWrapper>

      {/* 3e. Demotivation – Unsichtbare Kosten */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
              Die unsichtbaren Kosten von Demotivation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Innere Kündigung ist keine Faulheit – sie ist das Ergebnis fehlender Ziele, mangelnder Sinnhaftigkeit
              und unzureichender mentaler Ausrichtung. Die Folgen für Teams, Führungskräfte und den Gesamtumsatz
              sind enorm – und in keiner Bilanz sichtbar.
            </p>
            <ul className="space-y-4">
              {[
                'Hohe Fluktuation durch fehlende Bindung und Perspektive',
                'Sales-Teams verfehlen Ziele trotz gutem Produkt',
                'Führungskräfte vergeuden Energie auf Motivationsarbeit statt Strategie',
                'Fehlende Identifikation mit Unternehmenskultur und Zielen',
                'Schwache Teamdynamik bremst die gesamte Organisation',
              ].map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X size={12} className="text-red-500" />
                  </div>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <DemotivationInfografik />
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Wissenschaftliche Basis */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            Hypnose – wissenschaftlich untersucht, klinisch eingesetzt
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hypnose ist keine Magie. Sie ist eine anerkannte psychologische Methode, die in Medizin, Psychologie und Leistungscoaching eingesetzt wird – mit messbaren Ergebnissen bei Stressreduktion, Verhaltensänderung und mentaler Performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: 'Stressreduktion', text: 'Nachweisliche Senkung von Cortisol und physiologischen Stressindikatoren durch Hypnoseanwendungen.' },
            { title: 'Verhaltensänderung', text: 'Tiefe Verankerung neuer Denk- und Verhaltensmuster direkt im Unterbewusstsein.' },
            { title: 'Fokus & Konzentration', text: 'Gezielte Stärkung der Aufmerksamkeitssteuerung und mentalen Leistungsfähigkeit.' },
            { title: 'Gewohnheiten', text: 'Auflösung hinderlicher Routinen und nachhaltige Etablierung förderlicher Gewohnheiten.' },
          ].map((card) => (
            <div key={card.title} className="bg-[#f5f5f5] rounded-2xl p-6">
              <h3 className="font-headline font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <blockquote className="bg-primary/5 border-l-4 border-primary rounded-r-2xl px-6 py-5 mb-6">
            <p className="text-gray-700 italic leading-relaxed">
              "Die American Psychological Association (APA) und die British Psychological Society (BPS) anerkennen Hypnose als wirksames therapeutisches Werkzeug."
            </p>
          </blockquote>
          <div className="mt-6 bg-[#f9f9f9] border border-[#eaeaea] rounded-xl px-5 py-4 text-xs text-gray-500 leading-relaxed text-center">
            <strong className="text-gray-700">Wichtiger Hinweis:</strong> Die Angebote von hypnovital® ersetzen keine medizinische,
            psychotherapeutische oder psychiatrische Behandlung. Sie dienen der persönlichen Weiterentwicklung,
            Stressprävention und mentalen Gesundheitsförderung. Bei gesundheitlichen Beschwerden wenden
            Sie sich bitte an eine qualifizierte Fachperson.
          </div>
        </div>
      </SectionWrapper>


      {/* 6. Einsatzbereiche */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900">
            Einsatzbereiche
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: 'Gesundheit',
              items: ['Stressreduktion', 'Burnout-Prävention', 'Gewichtsreduktion', 'Rauchstopp'],
            },
            {
              icon: TrendingUp,
              title: 'Performance',
              items: ['Sales Motivation', 'Fokus & Konzentration', 'Zielerreichung', 'Mentale Stärke'],
            },
            {
              icon: Users,
              title: 'Führung',
              items: ['Leadership Mindset', 'Selbstführung', 'Resilienz', 'Entscheidungsstärke'],
            },
            {
              icon: Zap,
              title: 'Transformation',
              items: ['Change-Prozesse', 'Kulturentwicklung', 'Teamentwicklung', 'Organisationsklima'],
            },
          ].map((area) => (
            <div key={area.title} className="bg-white border border-[#eaeaea] rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <area.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-headline font-bold text-gray-900 text-lg mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* E-Learning Academy */}
      <SectionWrapper bg="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
              <GraduationCap size={14} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">Academy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              E-Learning auf der hypnovital® Lernplattform
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Fundierte Online-Kurse mit Video-Lektionen, interaktiven Quizzes und Teilnehmer-Tracking – direkt im Browser, ohne Installation oder externe Software. Einzeln buchbar oder als Ergänzung zu Workshops und Hypnose-Audio-Programmen.
            </p>
          </div>

          {/* Feature-Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {[
              { icon: Video, text: 'Video-Lektionen mit professioneller Moderation' },
              { icon: HelpCircle, text: 'Interaktive Quizzes zur Wissensüberprüfung' },
              { icon: Monitor, text: 'Keine Installation – direkt im Browser' },
              { icon: BarChart3, text: 'HR-Dashboard mit Teilnehmer-Tracking' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-[#f5f5f5] rounded-full px-4 py-2">
                <Icon size={14} className="text-primary" />
                <span className="text-gray-600 text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Kurs-Mockups */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {[
              { title: 'Stressmanagement Grundlagen', src: '/images/academy-stress.jpg' },
              { title: 'Rauchfrei werden', src: '/images/academy-rauchfrei.jpg' },
              { title: 'Gesund abnehmen', src: '/images/academy-abnehmen.jpg' },
            ].map(({ title, src }) => (
              <div key={title} className="text-center">
                <LaptopMockup src={src} alt={`E-Learning ${title}`} />
                <p className="font-headline font-bold text-gray-900 mt-4 text-sm">{title}</p>
                <span className="inline-block text-[10px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 uppercase tracking-widest">E-Learning</span>
              </div>
            ))}
          </div>

          {/* HR Dashboard + Teilnehmer-Sicht */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Für HR-Verantwortliche</p>
              <LaptopMockup src="/images/academy-hr-dashboard.jpg" alt="HR Dashboard" />
              <p className="font-headline font-bold text-gray-900 mt-4 text-sm">Teilnehmer-Tracking Dashboard</p>
              <p className="text-xs text-gray-500 mt-1">Fortschritt, Quiz-Ergebnisse und Abschlussraten auf einen Blick</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Für Teilnehmende</p>
              <LaptopMockup src="/images/academy-teilnehmer.jpg" alt="Teilnehmer Ansicht" />
              <p className="font-headline font-bold text-gray-900 mt-4 text-sm">Personalisierte Kursansicht</p>
              <p className="text-xs text-gray-500 mt-1">Persönliche Begrüssung, Fortschrittsanzeige und Quiz-Ergebnisse</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-[#6aaa22] transition-colors"
            >
              <GraduationCap size={18} />
              Alle E-Learning-Kurse entdecken
              <ArrowRight size={16} />
            </Link>
            <p className="text-xs text-gray-400 mt-3">Auch einzeln für Privatpersonen verfügbar ab €/CHF 48.20</p>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Angebotsformate */}
      <SectionWrapper bg="gray" id="angebote">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900">
            Unsere Angebotsformate
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Card 1: Kompakt-Workshop */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-[#f5f5f5] text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">3–4 Stunden</span>
              <h3 className="font-headline font-bold text-xl text-gray-900 mb-1">Kompakt-Workshop</h3>
              <p className="text-primary font-black text-2xl font-headline">ab €/CHF 1'690</p>
              <p className="text-xs text-gray-400">zzgl. MwSt. (DE/AT) resp. CHF inkl. MWST (CH)</p>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Einsatz</p>
              <ul className="space-y-2 mb-6">
                {['Gesundheitstage', 'Kickoff-Events', 'Sales Motivation', 'Fokus & Energie'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#f5f5f5] rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">Praxisbeispiel Sales</p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">"Zielvisualisierung für Sales-Teams"</span> – Mentale Vorbereitung auf Kundengespräche, Zielfokus und Abschlussstärke durch gezielte Hypnose-Techniken.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Tages-Workshop */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-[#f5f5f5] text-gray-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">1 Tag</span>
              <h3 className="font-headline font-bold text-xl text-gray-900 mb-1">Tages-Workshop</h3>
              <p className="text-primary font-black text-2xl font-headline">ab €/CHF 2'490</p>
              <p className="text-xs text-gray-400">zzgl. MwSt. (DE/AT) resp. CHF inkl. MWST (CH)</p>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Einsatz</p>
              <ul className="space-y-2 mb-6">
                {['Teamtage', 'Leadership Workshops', 'Sales Aktivierung', 'Gesundheitsprogramme'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-[#f5f5f5] rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 mb-1">Praxisbeispiel Gesundheit</p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">"Gesundes Gewicht für Chauffeure & Zugführer"</span> – Ganztägiges Programm zu Essverhalten, Stressreduktion und nachhaltigem Gewichtsmanagement im Berufsalltag.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Transformationsprogramm (highlighted) */}
          <div className="bg-primary rounded-2xl p-6 shadow-sm flex flex-col text-white">
            <div className="mb-4">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">12 Wochen · 1 Session/Woche</span>
              <h3 className="font-headline font-bold text-xl text-white mb-1">3-Monate Transformationsprogramm</h3>
              <p className="text-white/60 text-sm font-semibold">Preis auf Anfrage</p>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Inklusive</p>
              <ul className="space-y-2 mb-4">
                {['Gruppenhypnose-Sessions', 'Audio-Programme', 'Fortschrittsmessung', 'Vor- und Nachbereitung'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 size={13} className="text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">Optional</p>
              <ul className="space-y-2 mb-4">
                {['Einzelcoachings', 'E-Learning', 'Follow-up Sessions'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 size={13} className="text-white/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs font-semibold text-white/60 mb-1">Praxisbeispiel</p>
                <p className="text-sm text-white/90">Regelmässige Formate wie "Entspannung über Mittag" als integrierter Bestandteil.</p>
              </div>
            </div>
          </div>

          {/* Card 4: Executive Coaching */}
          <div className="bg-white border-2 border-gray-900 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="mb-4">
              <span className="inline-block bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Exklusiv</span>
              <h3 className="font-headline font-bold text-xl text-gray-900 mb-1">Executive Mental Performance Coaching</h3>
              <p className="text-primary font-black text-2xl font-headline">Preis auf Anfrage</p>
              <p className="text-xs text-gray-400">Individuelles Angebot nach Erstgespräch</p>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Zielgruppe</p>
              <p className="text-sm text-gray-600 mb-4">Geschäftsleitung, Führungskräfte, High Performer</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Themen</p>
              <ul className="space-y-2">
                {['Entscheidungsstärke', 'Mentale Klarheit', 'Stressresilienz', 'Fokus & Performance'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Link
                href="/unternehmen/executive-coaching"
                className="block text-center text-sm font-semibold text-gray-900 hover:text-primary transition-colors underline underline-offset-2"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 8. Keynote Section */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Keynote & Impulsvortrag
          </p>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-6">
            Die Faszination des Unterbewusstseins
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Von 30 Minuten bis 4 Stunden. Packend, wissenschaftlich fundiert und mit Live-Elementen, die Ihr Publikum direkt erleben lassen, wie das Unterbewusstsein funktioniert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Themen</p>
              <ul className="space-y-2">
                {['Die Macht der Gedanken', 'Visualisierung als Erfolgswerkzeug', 'Mentale Programme erkennen & umprogrammieren', 'Einfluss von Sprache auf das Unterbewusstsein'].map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Geeignet für</p>
              <ul className="space-y-2 mb-4">
                {['Kickoff-Events', 'Sales-Events', 'Leadership Events', 'Gesundheitstage'].map((event) => (
                  <li key={event} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                    {event}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-xl">
                <Zap size={14} />
                Live-Experimente möglich
              </div>
            </div>
          </div>
          <Link
            href="/unternehmen/keynotes"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-[#6aaa22] transition-colors"
          >
            Keynote-Angebot ansehen
          </Link>
        </div>
      </SectionWrapper>


      {/* 10. Begleitende Massnahmen */}
      <SectionWrapper bg="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900">
            Massgeschneiderte Begleitung
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Von einem einzelnen Workshop bis zum vollständigen Transformationsprogramm – wir passen das Angebot an Ihre Organisation an.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: 'Workshop',
              desc: 'Einmaliger Impuls für Ihren Gesundheitstag, Ihr Teammeeting oder Kickoff-Event.',
              features: ['Kompakt-Workshop (3–4h)', 'Tages-Workshop (1 Tag)', 'Keynote / Impulsvortrag'],
              highlight: false,
            },
            {
              title: 'Workshop + Coaching',
              desc: 'Kombination aus Workshop-Format und individueller Begleitung für nachhaltige Wirkung.',
              features: ['Workshop nach Wahl', 'Begleitende Einzelcoachings', 'Audio-Programme', 'Follow-up Session'],
              highlight: false,
            },
            {
              title: 'Vollständiges Transformationsprogramm',
              desc: '12 Wochen tiefgreifende organisationale Veränderung mit messbaren Ergebnissen.',
              features: ['Wöchentliche Gruppenformate', 'Individuelle Coachings', 'E-Learning & Audio-Programme', 'Fortschrittsmessung', 'Interne Kommunikation'],
              highlight: true,
            },
          ].map((pkg) => (
            <div
              key={pkg.title}
              className={`rounded-2xl p-6 shadow-sm ${pkg.highlight ? 'bg-primary/5 border-2 border-primary' : 'bg-[#f5f5f5]'}`}
            >
              <h3 className={`font-headline font-bold text-lg mb-2 ${pkg.highlight ? 'text-primary' : 'text-gray-900'}`}>
                {pkg.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{pkg.desc}</p>
              <ul className="space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={13} className="text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl p-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Add-ons & Erweiterungen</p>
          <div className="flex flex-wrap gap-3">
            {['E-Learning Module', 'Audio-Programme', 'Individuelle Einzelcoachings', 'Follow-up Sessions', 'Fortschrittsmessung', 'Massgeschneiderte Inhalte'].map((addon) => (
              <span key={addon} className="inline-flex items-center gap-1.5 bg-white border border-[#eaeaea] text-sm text-gray-600 px-4 py-2 rounded-xl">
                <CheckCircle2 size={12} className="text-primary" />
                {addon}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. Interne Kommunikation */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            Wir unterstützen auch intern
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Die beste Massnahme bringt nichts, wenn sie intern nicht angenommen wird. Unsere Experten begleiten Unternehmen bei der internen Positionierung des Angebots – damit Ihre Mitarbeitenden informiert, motiviert und gut vorbereitet teilnehmen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Interne Ankündigungstexte',
              'Informationsflyer',
              'Präsentationsfolien',
              'Einladungstexte',
              'Intranet- und E-Mail-Texte',
              'FAQ für Mitarbeitende',
            ].map((material) => (
              <div key={material} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11b. Neue Partnerschaften & Spezialformate */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Partnerschaften</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Partnerschaften & Spezialformate
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-3">
            hypnovital® arbeitet nicht nur mit Unternehmen zusammen. Auch Gesundheitsanbieter, Fitnesscenter und Wellnesshotels integrieren unsere Programme erfolgreich in ihr bestehendes Angebot.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Viele Organisationen suchen heute nach neuen Formaten für mentale Gesundheit, Stressreduktion und persönliche Entwicklung. Genau hier kann hypnovital® eine wertvolle Ergänzung sein.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            Wenn du ein entsprechendes Angebot aufbauen oder erweitern möchtest, entwickeln wir gemeinsam mit dir ein passendes Konzept. Je nach Umfang und Zusammenarbeit bieten wir auch Spezialkonditionen für Partnerorganisationen an.
          </p>
          <p className="text-gray-600 leading-relaxed mb-2">Nimm einfach Kontakt mit uns auf – wir besprechen gemeinsam:</p>
          <ul className="space-y-1.5 mb-10">
            {[
              'welches Format zu deiner Organisation passt',
              'welche Inhalte sinnvoll sind',
              'ob eine Umsetzung möglich ist',
              'und in welchem Rahmen eine Zusammenarbeit stattfinden kann',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* 2 Boxen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* Box 1: Fitnesscenter */}
            <div className="bg-[#f5f5f5] rounded-2xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <h3 className="font-headline font-bold text-xl text-gray-900 mb-3">
                  Für Gesundheits- und Fitnesscenter
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Viele Fitnesscenter stellen fest: Der körperliche Fortschritt beginnt im Kopf. hypnovital® ergänzt klassische Trainingsangebote um eine mentale Komponente, die Motivation, Gewohnheiten und Selbstdisziplin nachhaltig stärkt.
                </p>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Typische Einsatzbereiche</p>
                <ul className="space-y-1.5 mb-5">
                  {['Gewichtsreduktion', 'Trainingsmotivation', 'mentale Stärke im Sport', 'Stressreduktion und Regeneration', 'Fokus und Zielerreichung'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Nutzen für dein Fitnesscenter</p>
                <ul className="space-y-1.5 mb-5">
                  {['neues, attraktives Kursangebot', 'Differenzierung gegenüber anderen Studios', 'höhere Mitgliederbindung', 'Zusatzumsatz durch Spezialprogramme', 'innovative Positionierung im Bereich Gesundheit'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">Mögliche Formate</p>
                <ul className="space-y-1">
                  {['Gruppenhypnose-Sessions', 'mentale Trainingsprogramme', 'Workshops für Mitglieder', 'kombinierte Fitness- und Mindset-Kurse'].map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 2: Wellnesshotels */}
            <div className="bg-[#f5f5f5] rounded-2xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Heart size={20} className="text-primary" />
                </div>
                <h3 className="font-headline font-bold text-xl text-gray-900 mb-3">
                  Für Wellnesshotels
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Wellnessgäste suchen heute mehr als Massage und Sauna. Sie suchen mentale Entspannung, innere Ruhe und echte Regeneration. hypnovital® erweitert das klassische Wellnessangebot um Programme, die direkt auf das Unterbewusstsein wirken und tiefgehende Entspannung ermöglichen.
                </p>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Typische Einsatzbereiche</p>
                <ul className="space-y-1.5 mb-5">
                  {['Tiefenentspannung', 'Stressabbau', 'besserer Schlaf', 'mentale Regeneration', 'persönliche Entwicklung'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Nutzen für dein Wellnesshotel</p>
                <ul className="space-y-1.5 mb-5">
                  {['einzigartiges Zusatzangebot für Gäste', 'Differenzierung im Wellnessmarkt', 'attraktive Programmpunkte für Retreats', 'höhere Gästezufriedenheit', 'innovative Positionierung im Bereich Mental Wellness'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 mb-2">Mögliche Formate</p>
                <ul className="space-y-1">
                  {['Abendprogramme für Hotelgäste', 'Entspannungs-Sessions', 'Retreat-Programme', 'individuelle Hypnose-Sitzungen'].map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* 12. FAQ */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-10 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="divide-y divide-gray-200">
            {[
              {
                q: 'Ist Hypnose wissenschaftlich anerkannt?',
                a: 'Ja. Die American Psychological Association (APA) und die British Psychological Society (BPS) anerkennen Hypnose als wirksames psychologisches Werkzeug. Zahlreiche klinische Studien belegen die Wirksamkeit bei Stressreduktion, Schmerzmanagement und Verhaltensänderung.',
              },
              {
                q: 'Ist Hypnose sicher?',
                a: 'Ja. Hypnose ist ein natürlicher Entspannungszustand, den jeder Mensch auch im Alltag erlebt – etwa kurz vor dem Einschlafen oder beim konzentrierten Lesen. In Gruppenformaten verliert niemand die Kontrolle oder wird gegen den eigenen Willen beeinflusst.',
              },
              {
                q: 'Wie schnell sind Ergebnisse sichtbar?',
                a: 'Viele Teilnehmende berichten bereits nach der ersten Session von mehr Ruhe, Klarheit und Fokus. Nachhaltige Verhaltensänderung entwickelt sich typischerweise über 6–12 Wochen kontinuierlicher Anwendung.',
              },
              {
                q: 'Funktioniert Hypnose bei allen Menschen?',
                a: 'Die grosse Mehrheit der Menschen ist hypnosefähig. Entscheidend ist die Bereitschaft zur Mitarbeit. In Gruppenformaten erreichen wir regelmässig 70–90% der Teilnehmenden in unterschiedlicher Tiefe.',
              },
              {
                q: 'Können Workshops online durchgeführt werden?',
                a: 'Ja, alle Formate sind auch als Online-Workshops verfügbar – mit vergleichbarer Wirkung. Gerade für Teams an verschiedenen Standorten oder im Homeoffice ist das eine flexible und kosteneffiziente Option.',
              },
              {
                q: 'Wie unterstützt hypnovital® die interne Kommunikation?',
                a: 'Wir stellen auf Wunsch anpassbare Materialien bereit: Ankündigungstexte, Flyer, Präsentationsfolien, Einladungstexte und Intranet-Beiträge – damit Ihre Mitarbeitenden informiert und motiviert in die Programme starten.',
              },
              {
                q: 'Wie gehe ich am besten vor, wenn ich mich für ein Angebot interessiere?',
                a: 'Der einfachste Weg ist: Nimm über das untenstehende Kontaktformular mit uns Kontakt auf. Wir melden uns anschliessend bei dir und besprechen gemeinsam dein Anliegen, deine Ziele und den möglichen Einsatzbereich. Auf dieser Basis entwickeln wir einen passenden Vorschlag – zum Beispiel für einen Workshop, ein Programm oder eine Keynote. Unverbindlich und individuell auf deine Organisation abgestimmt.',
              },
              {
                q: 'Müssen Mitarbeitende Erfahrung mit Hypnose haben?',
                a: 'Nein. Die Programme von hypnovital® sind auch für Menschen geeignet, die noch nie mit Hypnose gearbeitet haben. Die Sessions sind verständlich aufgebaut und auf Entspannung, mentale Klarheit und persönliche Entwicklung ausgerichtet. Viele Teilnehmende erleben Hypnose als einen angenehmen Zustand tiefer Konzentration und innerer Ruhe.',
              },
              {
                q: 'Ist Hypnose im Business-Kontext nicht etwas ungewöhnlich?',
                a: 'Diese Frage hören wir tatsächlich häufig. In der Öffentlichkeit wird Hypnose teilweise mit Showhypnose verbunden – etwa mit Bühnenshows, bei denen Menschen ungewöhnliche Dinge tun. Das hat jedoch nichts mit der Arbeit von hypnovital® zu tun. Wir arbeiten im Kontext von Coaching, mentaler Entwicklung und Stressreduktion – professionell, respektvoll und mit einem klaren Fokus auf Vertrauen und Wirkung. Der Ansatz ist seriös, strukturiert und auf den Einsatz in Unternehmen und Organisationen ausgelegt.',
              },
              {
                q: 'Für welche Unternehmen eignet sich hypnovital® besonders?',
                a: 'hypnovital® eignet sich besonders für Organisationen, die gezielt in Gesundheit, Leistungsfähigkeit und mentale Stärke investieren möchten – zum Beispiel Unternehmen mit hoher Stressbelastung, Organisationen mit Fokus auf Gesundheitsmanagement (BGM), Sales- und Performance-Teams sowie Leadership- und Entwicklungsprogramme. Die Formate können sowohl vor Ort als auch online durchgeführt werden.',
              },
              {
                q: 'Kann ich E-Learning, Workshops und Audio-Programme frei kombinieren?',
                a: 'Ja, alle Bausteine sind einzeln buchbar und frei kombinierbar. Sie können zum Beispiel mit einem E-Learning-Kurs starten, anschliessend einen Workshop vor Ort oder online durchführen und das Gelernte mit einem passenden Hypnose-Audio-Programm vertiefen. Wir beraten Sie gerne, welche Kombination für Ihr Unternehmen am besten passt.',
              },
              {
                q: 'Welche Kombinationen empfehlen Sie für maximale Wirkung?',
                a: 'Die stärkste Wirkung erzielen Sie mit der Kombination aus allen drei Bausteinen: Das E-Learning vermittelt das Grundlagenwissen, der Workshop vertieft die Inhalte durch praktische Übungen und persönliche Begleitung, und das Hypnose-Audio-Programm verankert die Veränderung nachhaltig im Unterbewusstsein. Aber auch einzelne Bausteine wirken – Sie entscheiden, was zu Ihrem Budget und Ihren Zielen passt.',
              },
              {
                q: 'Gibt es Spezialkonditionen für Unternehmen?',
                a: 'Ja, für Unternehmen bieten wir Volumenpreise ab 10 Teilnehmenden, inklusive Teilnehmer-Tracking und HR-Reporting. Je nach Umfang und Kombination der Bausteine erstellen wir ein individuelles Angebot. Nehmen Sie einfach Kontakt mit uns auf – wir beraten Sie unverbindlich.',
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

      {/* 13. Final CTA */}
      <SectionWrapper bg="gray" id="anfrage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
              Programm für Ihr Unternehmen entwickeln
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Jedes Unternehmen ist anders. Wir entwickeln gemeinsam das passende Format – von einem einzelnen Workshop bis zum umfassenden Transformationsprogramm.
            </p>
          </div>
          <InquiryForm title="Firmenangebot anfragen" context="Firmenangebot" showFunction requirePhone />
        </div>
      </SectionWrapper>
    </>
  )
}

function ChevronIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
