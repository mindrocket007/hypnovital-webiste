import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import CoachCard from '@/components/coach/CoachCard'
import { coaches, allCountries, allRegions, allSpecializations } from '@/lib/data'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Coach suchen',
  description: 'Zertifizierte hypnovital® Coaches in der Schweiz, Deutschland und Österreich.',
}

export default function CoachPage({
  searchParams,
}: {
  searchParams: { country?: string; region?: string; specialization?: string }
}) {
  const { country, region, specialization } = searchParams

  const filtered = coaches.filter((c) => {
    if (!c.isActive) return false
    if (country && c.country !== country) return false
    if (region && c.region !== region) return false
    if (specialization && !c.specializations.includes(specialization)) return false
    return true
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Netzwerk</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight tracking-tight">
              Coach suchen
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Finde einen zertifizierten hypnovital® Coach in deiner Nähe oder online – für nachhaltige Veränderung, die wirklich in der Tiefe wirkt.
            </p>
          </div>
        </div>
      </section>

      {/* Vertrauenstext */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Alle hypnovital® Coaches durchlaufen eine fundierte Ausbildung und werden regelmässig weitergebildet. Du arbeitest mit jemandem zusammen, der nicht nur Methoden kennt, sondern sie selbst lebt. Ob Stressmanagement, Schlaf, Selbstvertrauen oder persönliche Transformation – dein Coach begleitet dich mit Klarheit, Empathie und einer erprobten Methode, die tief im Unterbewusstsein ansetzt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Zertifizierte Ausbildung', text: 'Alle Coaches sind nach hypnovital® Standard ausgebildet und zertifiziert.' },
              { label: 'Online oder vor Ort', text: 'Flexibel buchbar – unabhängig von Ort und Zeit.' },
              { label: 'Erstgespräch kostenlos', text: 'Lerne deinen Coach kennen – unverbindlich und ohne Verpflichtung.' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-900 text-sm font-semibold mb-1">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        {/* Filter */}
        <div className="bg-[#f5f5f5] rounded-2xl p-6 mb-10">
          <h3 className="font-headline font-bold text-gray-900 mb-4">Filter</h3>
          <form method="get" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Land
              </label>
              <select
                name="country"
                defaultValue={country || ''}
                className="w-full px-4 py-2.5 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Alle Länder</option>
                {allCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Region
              </label>
              <select
                name="region"
                defaultValue={region || ''}
                className="w-full px-4 py-2.5 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Alle Regionen</option>
                {allRegions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Spezialisierung
              </label>
              <select
                name="specialization"
                defaultValue={specialization || ''}
                className="w-full px-4 py-2.5 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Alle Themen</option>
                {allSpecializations.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-3 flex gap-3">
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Filtern
              </button>
              {(country || region || specialization) && (
                <a
                  href="/coach"
                  className="px-6 py-2.5 border border-[#eaeaea] text-gray-600 text-sm font-semibold rounded-lg hover:bg-[#f5f5f5] transition-colors"
                >
                  Zurücksetzen
                </a>
              )}
            </div>
          </form>
        </div>

        {/* Ergebnisse */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-medium mb-2">Keine Coaches gefunden</p>
            <p className="text-sm">Probiere einen anderen Filter oder{' '}
              <a href="/coach" className="text-primary hover:underline">setze die Filter zurück</a>.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-400 mb-6">
              {filtered.length} Coach{filtered.length !== 1 ? 's' : ''} gefunden
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c) => (
                <CoachCard
                  key={c.id}
                  slug={c.slug}
                  name={c.name}
                  city={c.city}
                  country={c.country}
                  shortBio={c.shortBio}
                  specializations={c.specializations}
                  email={c.email}
                  phone={c.phone}
                  imageUrl={c.imageUrl}
                />
              ))}
            </div>
          </>
        )}
      </SectionWrapper>

      {/* Öffentliche Workshops & Veranstaltungen */}
      <SectionWrapper bg="gray">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Veranstaltungen</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight tracking-tight">
              Öffentliche Workshops & Veranstaltungen
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Lerne die hypnovital® Methode persönlich kennen – bei einem unserer öffentlichen Workshops, Webinare oder Online-Programme. Ideal zum Einstieg oder zur Vertiefung.
            </p>
            <Link
              href="/veranstaltungen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              <Calendar size={18} />
              Zu den Veranstaltungen
            </Link>
          </div>
          <div className="md:w-72 flex-shrink-0 grid grid-cols-1 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">Tagesworkshops</p>
              <p className="text-sm text-gray-500">Intensiv-Erfahrung mit der hypnovital® Methode – live vor Ort.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">Online-Programme</p>
              <p className="text-sm text-gray-500">Wöchentliche Live-Sessions und Audioprogramme – von überall.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="font-semibold text-gray-900 mb-1">Webinare</p>
              <p className="text-sm text-gray-500">Kostenlose Einblicke und Kennenlern-Formate für Neueinsteiger.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
