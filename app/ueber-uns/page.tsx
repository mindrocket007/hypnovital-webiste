import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Link from 'next/link'
import {
  Heart, Globe, Users, Lightbulb, BookOpen, Shield,
  CheckCircle2, ArrowRight, TrendingUp, Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Die Idee hinter hypnovital® – Methode, Vision, Werte und das Team.',
}

// Kennzahlen – einfach anpassbar
const stats = [
  { value: '500+', label: 'Menschen begleitet' },
  { value: '12+', label: 'Coaches im Netzwerk' },
  { value: '8+', label: 'Programme entwickelt' },
  { value: '3', label: 'Regionen im Aufbau' },
]

// Leadership-Team
const team = [
  {
    initial: 'F',
    name: 'Franz Ruchti',
    role: 'CEO · hypnovital® Master Trainer & Coach',
    description: 'Gründer von hypnovital® und Entwickler der hypnovital® Methode. Er begleitet seit vielen Jahren Menschen und Organisationen in Stressmanagement, Gewohnheitsveränderung, mentaler Stärke und persönlicher Transformation. Seine Vision: hypnovital® als führende Plattform für mentale Entwicklung im deutschsprachigen Raum aufzubauen.',
    tasks: ['Entwicklung der hypnovital® Methode', 'Begleitung von Privatpersonen & Unternehmen', 'Strategische Führung des Unternehmens', 'Wissensvermittlung & Academy-Aufbau'],
    imageUrl: '/images/franz-ruchti.webp',
  },
  {
    initial: 'B',
    name: 'Barbara Husmann',
    role: 'Chief Quality Officer · hypnovital® Trainerin & Coach',
    description: 'Barbara Husmann bringt umfangreiche Erfahrung in der Ausbildung und Zertifizierung von Coaches mit. Sie sichert die methodische Qualität aller hypnovital® Angebote und begleitet die Weiterentwicklung der hypnovital® Academy. Ihr Anspruch: höchste Qualität als Standard – für Coaches und Klienten gleichermassen.',
    tasks: ['Ausbildung & Zertifizierung der Coaches', 'Qualitätsstandards & Methodik', 'Weiterentwicklung des House of Change', 'Betreuung der hypnovital® Academy'],
    imageUrl: '/images/barbara-husmann.webp',
  },
  {
    active: false,
    initial: 'T',
    name: 'Thomas Berger',
    role: 'Chief of Franchising · hypnovital® Trainer & Coach',
    description: 'Thomas Berger bringt langjährige Erfahrung im Aufbau von Netzwerken und in der Begleitung von Coaching-Businesses mit. Als zertifizierter hypnovital® Trainer begleitet er neue Coaches vom ersten Gespräch bis zum erfolgreichen Start in ihrer Region. Sein Antrieb: ein starkes, qualitätsorientiertes Coach-Netzwerk im gesamten DACH-Raum aufzubauen.',
    tasks: ['Entwicklung neuer Regionen', 'Auswahl & Begleitung neuer Coaches', 'Netzwerkentwicklung & Community', 'Aufbau erfolgreicher Coaching-Businesses'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face',
  },
  {
    active: false,
    initial: 'J',
    name: 'Julia Steiner',
    role: 'Chief of Marketing · hypnovital® Trainerin & Coach',
    description: 'Julia Steiner verbindet strategisches Marketing mit einem tiefen Verständnis für Coaching und mentale Entwicklung. Sie verantwortet die Markenführung von hypnovital® und unterstützt Coaches dabei, sichtbar zu werden und ihr Business erfolgreich zu positionieren. Ihr Fokus: authentische Kommunikation mit echter Wirkung im Markt.',
    tasks: ['Markenstrategie & Positionierung', 'Marketingkampagnen & Content', 'Kommunikation nach innen & aussen', 'Marketing-Support für Coaches'],
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop&crop=face',
  },
  {
    active: false,
    initial: 'M',
    name: 'Michael Hartmann',
    role: 'Chief Technology Officer · hypnovital® Trainer & Coach',
    description: 'Michael Hartmann ist Technologe und Digitalstratege mit Leidenschaft für sinnvolle Anwendungen. Er verantwortet die digitale Infrastruktur von hypnovital® und entwickelt die Plattform laufend weiter – von Audio-Programmen bis zu den technischen Systemen für Coaches. Sein Ziel: Technologie, die wirklich dem Menschen dient.',
    tasks: ['Entwicklung der digitalen Plattform', 'Audio-Programme & digitale Angebote', 'Technische Systeme für Coaches', 'Digitale Skalierung'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop&crop=face',
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Über uns</span>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-white mt-3 mb-5 leading-tight">
              Die Idee hinter hypnovital®
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              hypnovital® entstand aus der Überzeugung, dass echte Veränderung nicht an der Oberfläche beginnt – sondern im Unterbewusstsein. Heute verbindet hypnovital® Coaching, Hypnose, mentale Trainingsmethoden und Wissensvermittlung zu einem wachsenden System für Menschen, Unternehmen und Coaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/coach"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Coach finden <ArrowRight size={16} />
              </Link>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Coach werden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Die Idee */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Die Idee</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Warum Wissen allein oft nicht reicht
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Viele Menschen wissen genau, was sie verändern möchten – und schaffen es trotzdem nicht. Nicht weil ihnen Wissen fehlt. Sondern weil Gewohnheiten, Emotionen und Entscheidungen oft tief im Unterbewusstsein entstehen.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Genau hier setzt hypnovital® an. Wir begleiten Menschen nicht nur dabei, Veränderung zu verstehen – sondern sie nachhaltig zu verankern. Im Denken, im Fühlen und im Verhalten.
            </p>
            <p className="text-gray-500 leading-relaxed">
              hypnovital® verbindet evidenzbasiertes Coaching, Hypnosetechniken, mentale Trainingsmethoden und gezielte Wissensvermittlung – zu einem System, das in der Tiefe wirkt.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: <Lightbulb size={20} className="text-primary" />, title: 'Nicht nur Wissen vermitteln', text: 'Informationen allein verändern selten Verhalten. hypnovital® verbindet Wissen mit mentalem Training.' },
              { icon: <TrendingUp size={20} className="text-primary" />, title: 'Tiefe statt Oberfläche', text: 'Nachhaltige Veränderung entsteht dort, wo Gewohnheiten und Überzeugungen wirklich gespeichert sind.' },
              { icon: <CheckCircle2 size={20} className="text-primary" />, title: 'Integration in den Alltag', text: 'Was im Coaching erarbeitet wird, soll im echten Leben wirken – dauerhaft und ohne ständigen Aufwand.' },
              { icon: <Shield size={20} className="text-primary" />, title: 'Seriös und professionell', text: 'Kein esoterischer Ansatz. Kein Showhypnose-Look. Klare Methode, klare Wirkung, klare Haltung.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-[#f5f5f5] rounded-xl p-4">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Vision */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Vision</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
            Unsere Vision
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-5">
            Wir leben in einer Zeit, in der mentale Gesundheit wichtiger ist denn je. Stress, Überforderung und ständige Veränderung prägen den Alltag von Privatpersonen und Unternehmen gleichermassen.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Unsere Vision: möglichst vielen Menschen Zugang zu wirksamer mentaler Unterstützung zu geben – durch Coaching, Programme, Wissensvermittlung, Workshops und ein wachsendes Netzwerk zertifizierter Coaches im gesamten DACH-Raum.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {['Coaching', 'Programme', 'Wissensvermittlung', 'Netzwerk'].map((item) => (
            <div key={item} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <p className="font-semibold text-gray-900 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4+5. Methode & Wissenschaft */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Methode</span>
            <h2 className="text-3xl font-headline font-black text-gray-900 mt-3 mb-5">
              Unsere Methode
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              hypnovital® verbindet mehrere Ebenen zu einem kohärenten System. Es geht nicht darum, einen einzigen Ansatz zu verfolgen – sondern das Beste aus verschiedenen Feldern zu einem wirkungsvollen Ganzen zu verbinden.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Coaching', text: 'Zielfokussierte Begleitung für persönliche und professionelle Entwicklung.' },
                { label: 'Hypnose', text: 'Direkter Zugang zum Unterbewusstsein – für tiefgreifende, nachhaltige Veränderung.' },
                { label: 'Mentales Training', text: 'Techniken zur Stärkung von Fokus, Resilienz und inneren Ressourcen.' },
                { label: 'Wissensvermittlung', text: 'Verständnis für mentale Prozesse – als Grundlage für bewusste Veränderung.' },
                { label: 'Alltags-Integration', text: 'Was im Coaching erarbeitet wird, soll im echten Leben wirken.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">{item.label} – </span>
                    <span className="text-sm text-gray-500">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Grundlage</span>
            <h2 className="text-3xl font-headline font-black text-gray-900 mt-3 mb-5">
              Wissenschaftliche Grundlage
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              hypnovital® basiert auf anerkannten Erkenntnissen aus Hypnoseforschung, Psychologie, Neuropsychologie, mentalem Training und Verhaltensänderung.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              Hypnose wird heute weltweit in Medizin, Psychologie und Coaching eingesetzt – als wirksames Werkzeug zur Beeinflussung von Wahrnehmung, Verhalten und emotionalen Mustern.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {['Hypnoseforschung', 'Psychologie', 'Neuropsychologie', 'Verhaltensänderung'].map((item) => (
                <div key={item} className="bg-[#f5f5f5] rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 text-center">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic leading-relaxed">
              Die American Psychological Association (APA) sowie die British Psychological Society (BPS) erkennen Hypnose als wirksames psychologisches Werkzeug an.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. House of Change */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Modell</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            House of Change
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Das Herzstück der hypnovital® Methode. Fünf strukturierte Schritte zur nachhaltigen mentalen Veränderung – aufeinander aufbauend, tief wirkend.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Header-Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#0e1e08] text-primary font-black font-headline text-sm uppercase tracking-widest px-6 py-3 rounded-2xl">
              House of Change – 5 Schritte zur nachhaltigen Veränderung
            </div>
          </div>
          {/* Steps als horizontale Kette auf Desktop, vertikal auf Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { nr: '01', label: 'House of Change', text: 'Das Fundament. Verstehe, wie mentale Veränderung wirklich funktioniert.', color: 'bg-[#0e1e08]' },
              { nr: '02', label: 'Verantwortung', text: 'Übernimm Verantwortung für deine Gedanken, Gefühle und Handlungen.', color: 'bg-[#142e0b]' },
              { nr: '03', label: 'Loslassen', text: 'Löse alte Muster und Blockaden durch tiefes Loslassen und Vergeben.', color: 'bg-[#1a3e0e]' },
              { nr: '04', label: 'Ressourcen', text: 'Aktiviere deine inneren Ressourcen und stärke deine Resilienz.', color: 'bg-[#204e11]' },
              { nr: '05', label: 'Verankern', text: 'Verankere die Veränderung tief im Unterbewusstsein – dauerhaft.', color: 'bg-primary' },
            ].map((step, i) => (
              <div key={step.nr} className="relative flex flex-col">
                <div className={`${step.color} rounded-2xl p-5 flex-1 flex flex-col`}>
                  <span className={`text-3xl font-black font-headline mb-3 ${i === 4 ? 'text-white' : 'text-primary'}`}>{step.nr}</span>
                  <p className={`font-headline font-bold text-base mb-2 ${i === 4 ? 'text-white' : 'text-white'}`}>{step.label}</p>
                  <p className="text-white/60 text-xs leading-relaxed flex-1">{step.text}</p>
                </div>
                {/* Pfeil zwischen Schritten */}
                {i < 4 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white rounded-full items-center justify-center shadow-sm border border-[#eaeaea]">
                    <span className="text-primary text-xs font-bold">›</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Für wen */}
      <SectionWrapper bg="white">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Zielgruppen</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Für wen wir arbeiten
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users size={24} className="text-primary" />,
              title: 'Privatpersonen',
              text: 'Coaching, Programme und Workshops für persönliche Veränderung, Stressreduktion, Gewohnheiten und mentale Stärke.',
              link: '/programme',
              linkLabel: 'Programme ansehen',
            },
            {
              icon: <BookOpen size={24} className="text-primary" />,
              title: 'Unternehmen',
              text: 'Programme für mentale Gesundheit, Leadership, Stressprävention, Performance und Wissensvermittlung in Teams.',
              link: '/unternehmen/firmenangebote',
              linkLabel: 'Firmenangebote',
            },
            {
              icon: <Award size={24} className="text-primary" />,
              title: 'Coaches',
              text: 'Ausbildung, Zertifizierung und ein wachsendes Netzwerk für Coaches im gesamten DACH-Raum.',
              link: '/franchise',
              linkLabel: 'Coach werden',
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#f5f5f5] rounded-2xl p-7 flex flex-col">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-headline font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{item.text}</p>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                {item.linkLabel} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. Werte */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Haltung</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Unsere Werte
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: <Heart size={22} className="text-primary" />, title: 'Menschlichkeit', text: 'Wir begegnen jedem Menschen mit Würde, Empathie und echtem Interesse.' },
            { icon: <Shield size={22} className="text-primary" />, title: 'Wirksamkeit', text: 'Wir arbeiten mit Methoden, die in der Tiefe wirken – nicht nur an der Oberfläche.' },
            { icon: <BookOpen size={22} className="text-primary" />, title: 'Wissensvermittlung', text: 'Verstehen ist der erste Schritt zur Veränderung. Wir erklären, was wir tun und warum.' },
            { icon: <Globe size={22} className="text-primary" />, title: 'Zugänglichkeit', text: 'Mentale Gesundheit soll für alle zugänglich sein – online, vor Ort und im ganzen DACH-Raum.' },
            { icon: <Users size={22} className="text-primary" />, title: 'Gemeinschaft', text: 'Ein Netzwerk von Coaches, das gemeinsam wirkt, lernt und wächst.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-headline font-bold text-gray-900 mb-1.5 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. Zahlen / Trust */}
      <SectionWrapper bg="white">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Vertrauen</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3">
            hypnovital® in Zahlen
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-[#f5f5f5] rounded-2xl p-6">
              <p className="text-4xl font-black font-headline text-primary mb-2">{s.value}</p>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 10. Team */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Die Köpfe hinter hypnovital®
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            hypnovital® ist eine Organisation mit klaren Rollen, gemeinsamen Werten und dem Ziel, mentale Entwicklung im DACH-Raum zugänglich zu machen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.filter((m) => m.active !== false).map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
              {/* Foto-Bereich */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                {member.imageUrl ? (
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl font-black font-headline text-primary">{member.initial}</span>
                    </div>
                    <span className="text-xs text-gray-300">Foto folgt</span>
                  </div>
                )}
              </div>
              {/* Text-Bereich */}
              <div className="p-6 flex flex-col flex-1">
                <p className="font-headline font-bold text-gray-900 text-xl leading-tight mb-0.5">{member.name}</p>
                <p className="text-primary text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{member.description}</p>
                <div className="border-t border-[#eaeaea] pt-4 grid grid-cols-2 gap-1.5">
                  {member.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span className="text-xs text-gray-500 leading-snug">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 11. Netzwerk */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Netzwerk</span>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-5">
              Ein wachsendes Netzwerk
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              hypnovital® ist mehr als eine Marke. Es ist ein wachsendes Netzwerk von Coaches, die gemeinsam wirken und wachsen – nach gemeinsamen Qualitätsstandards und mit der Unterstützung der hypnovital® Academy.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              So entsteht ein System, das Menschen überall Zugang zu professioneller mentaler Unterstützung ermöglicht – in der Schweiz, in Deutschland, in Österreich.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/coach"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Coach finden <ArrowRight size={16} />
              </Link>
              <Link
                href="/franchise"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#eaeaea] text-gray-700 font-semibold rounded-xl hover:bg-[#f5f5f5] transition-colors"
              >
                Coach werden
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'hypnovital® Academy', text: 'Ausbildung, Zertifizierung und laufende Weiterbildung für alle Coaches.' },
              { title: 'Gemeinsame Standards', text: 'Alle Coaches arbeiten nach einheitlichen Qualitätskriterien und Methoden.' },
              { title: 'DACH-Netzwerk', text: 'Coaches in der Schweiz, Deutschland und Österreich – lokal verfügbar, digital überall.' },
              { title: 'Gemeinsames Wachstum', text: 'Wir sind nur erfolgreich, wenn unsere Coaches es auch sind.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f5] rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 12. CTA */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Mitmachen</span>
          <h2 className="text-3xl md:text-5xl font-headline font-black text-white mt-3 mb-5 leading-tight">
            Teil der hypnovital® Bewegung
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Ob als Teilnehmer, Unternehmen oder zukünftiger Coach – hypnovital® wächst und entwickelt sich zu einer Plattform für mentale Entwicklung im gesamten DACH-Raum.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/coach"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Coach finden <ArrowRight size={18} />
            </Link>
            <Link
              href="/franchise"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Coach werden
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
