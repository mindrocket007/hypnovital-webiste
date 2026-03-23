'use client'

import { useState, useRef } from 'react'
import { ChevronRight, ChevronLeft, Loader2, Check, Shield } from 'lucide-react'
import AudioCover from '@/components/shop/AudioCover'

type FormData = {
  anliegen: string
  ziel: string
  name: string
  sicherheit: string[]
  bestaetigung: boolean
}

const TOTAL_STEPS = 3

const ANLIEGEN_OPTIONS = [
  'Besser schlafen',
  'Stress abbauen',
  'Ängste & innere Unruhe reduzieren',
  'Selbstvertrauen stärken',
  'Fokus & Motivation steigern',
  'Gewohnheiten verändern',
  'Abnehmen',
  'Rauchfrei werden',
  'Erfolg im Beruf steigern',
  'Mehr Erfolg bei Frauen / Dating',
  'Anderes',
]

const SICHERHEIT_OPTIONS = [
  'diagnostizierte psychische Erkrankung',
  'Epilepsie oder Anfallsleiden',
  'Schwangerschaft',
  'Einnahme starker Psychopharmaka',
  'nichts davon',
]

const STEP_LABELS = ['Anliegen', 'Persönliches', 'Sicherheit']

const initialData: FormData = {
  anliegen: '',
  ziel: '',
  name: '',
  sicherheit: [],
  bestaetigung: false,
}

function RadioOption({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 ${
        selected
          ? 'bg-primary/10 border-primary text-gray-900'
          : 'bg-white border-gray-200 text-gray-600 hover:border-primary/40'
      }`}
    >
      <span
        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
          selected ? 'border-primary bg-primary' : 'border-gray-300'
        }`}
      >
        {selected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
      </span>
      {label}
    </button>
  )
}

function CheckOption({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 ${
        selected
          ? 'bg-primary/10 border-primary text-gray-900'
          : 'bg-white border-gray-200 text-gray-600 hover:border-primary/40'
      }`}
    >
      <span
        className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center ${
          selected ? 'border-primary bg-primary' : 'border-gray-300'
        }`}
      >
        {selected && <Check size={10} className="text-white" />}
      </span>
      {label}
    </button>
  )
}

export default function PersonalAudioSection() {
  const [showForm, setShowForm] = useState(false)
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(initialData)
  const [showSummary, setShowSummary] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleStart = () => {
    setShowForm(true)
    scrollToForm()
  }

  const isStepValid = (s: number): boolean => {
    switch (s) {
      case 1:
        return !!data.anliegen && data.ziel.trim().length >= 5
      case 2:
        return !!data.name.trim()
      case 3:
        return data.sicherheit.length > 0 && data.bestaetigung
      default:
        return false
    }
  }

  const handleNext = () => {
    if (!isStepValid(step)) return
    if (step === TOTAL_STEPS) {
      setShowSummary(true)
      scrollToForm()
    } else {
      setStep((s) => s + 1)
      scrollToForm()
    }
  }

  const handleBack = () => {
    if (showSummary) {
      setShowSummary(false)
    } else if (step > 1) {
      setStep((s) => s - 1)
    }
    scrollToForm()
  }

  const toggleSicherheit = (option: string) => {
    if (option === 'nichts davon') {
      setData((d) => ({ ...d, sicherheit: ['nichts davon'] }))
    } else {
      setData((d) => {
        const without = d.sicherheit.filter((s) => s !== 'nichts davon' && s !== option)
        const has = d.sicherheit.includes(option)
        return { ...d, sicherheit: has ? without : [...without, option] }
      })
    }
  }

  const handleCheckout = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/personal-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.url) {
        window.open(json.url, '_blank')
      } else {
        setError(json.error || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.')
      }
    } catch {
      setError('Verbindungsfehler. Bitte versuche es erneut.')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    if (showSummary) {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-headline font-bold text-gray-900">
            Deine Angaben im Überblick
          </h3>

          <div className="space-y-0 divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {[
              { label: 'Anliegen', value: data.anliegen },
              { label: 'Dein Ziel', value: data.ziel },
              { label: 'Ansprache im Audio', value: data.name },
            ].map(({ label, value }) => (
              <div key={label} className="px-4 py-3 bg-white">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">
                  {label}
                </p>
                <p className="text-sm text-gray-700">{value}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f5f5] rounded-xl p-5 flex justify-between items-center">
            <div>
              <p className="font-headline font-bold text-gray-900">Mein persönliches Hypnose-Audio</p>
              <p className="text-sm text-gray-500 mt-0.5">Individuell erstellt · Lieferung innerhalb von 24 Stunden</p>
            </div>
            <p className="text-2xl font-black font-headline text-primary">89 €</p>
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Bitte warten…
              </>
            ) : (
              'Weiter zur Zahlung – 89 €'
            )}
          </button>

          <p className="text-xs text-center text-gray-400 leading-relaxed">
            Dieses Audio dient der Entspannung und persönlichen Entwicklung und ersetzt keine
            medizinische oder psychologische Behandlung.
          </p>
        </div>
      )
    }

    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-3">
                Was ist dein wichtigstes Anliegen?
              </p>
              <div className="space-y-2">
                {ANLIEGEN_OPTIONS.map((opt) => (
                  <RadioOption
                    key={opt}
                    label={opt}
                    selected={data.anliegen === opt}
                    onClick={() => setData((d) => ({ ...d, anliegen: opt }))}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Was möchtest du konkret erreichen?
              </label>
              <textarea
                value={data.ziel}
                onChange={(e) => setData((d) => ({ ...d, ziel: e.target.value.slice(0, 500) }))}
                placeholder="Beschreibe dein Ziel und was dich aktuell belastet…"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="text-xs text-gray-400 text-right mt-1">{data.ziel.length}/500</p>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Wie dürfen wir dich im Audio ansprechen?
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                placeholder="Vorname"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-3">
                Trifft einer dieser Punkte auf dich zu?
              </p>
              <div className="space-y-2">
                {SICHERHEIT_OPTIONS.map((opt) => (
                  <CheckOption
                    key={opt}
                    label={opt}
                    selected={data.sicherheit.includes(opt)}
                    onClick={() => toggleSicherheit(opt)}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setData((d) => ({ ...d, bestaetigung: !d.bestaetigung }))}
              className={`w-full text-left px-4 py-4 rounded-xl border transition-all flex items-start gap-3 ${
                data.bestaetigung
                  ? 'bg-primary/10 border-primary'
                  : 'bg-white border-gray-200 hover:border-primary/40'
              }`}
            >
              <span
                className={`w-4 h-4 mt-0.5 rounded border-2 flex-shrink-0 flex items-center justify-center ${
                  data.bestaetigung ? 'border-primary bg-primary' : 'border-gray-300'
                }`}
              >
                {data.bestaetigung && <Check size={10} className="text-white" />}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ich bestätige, dass dieses Audio der Entspannung und persönlichen Entwicklung dient
                und keine medizinische oder psychologische Behandlung ersetzt.
              </p>
            </button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Mein persönliches Hypnose-Audio
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mt-3 mb-4">
            Nicht für alle. Nur für dich.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kein fertiges Programm von der Stange – sondern ein Hypnose-Audio, das wir exklusiv für dich erstellen. Auf dein Ziel, deine Situation und deine persönlichen Bedürfnisse abgestimmt. So wirksam wie eine Einzelsitzung – jederzeit verfügbar.
          </p>
        </div>

        {/* Offer card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 shadow-sm bg-white p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-3 mb-6">
                  {[
                    { title: 'Exklusiv für dich erstellt', desc: 'Wir produzieren dein Audio einmalig – nur für dich, nicht für tausend andere.' },
                    { title: 'Auf deine Bedürfnisse abgestimmt', desc: 'Dein Ziel, dein Anliegen, deine persönliche Situation – du bestimmst alles.' },
                    { title: 'Tiefere Wirkung als Standard-Audios', desc: 'Weil dein Unterbewusstsein auf persönlich zugeschnittene Inhalte stärker reagiert.' },
                    { title: 'Unbegrenzt nutzbar', desc: 'Einmal erstellt, gehört das Audio dir – hör es so oft du willst.' },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">{item.title}</span>
                        {' – '}{item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Du beantwortest einen kurzen Fragebogen. Wir erstellen dein Audio innerhalb von 24 Stunden und liefern es direkt per E-Mail.
                </p>
              </div>

              <div className="flex flex-col items-center gap-5">
                <div className="relative aspect-square w-full max-w-xs rounded-2xl overflow-hidden shadow-md">
                  <AudioCover
                    productId="persoenliches-audio"
                    title="Mein persönliches Hypnose-Audio"
                    category="Persönlich"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_-4px_16px_rgba(0,0,0,0.18)] pointer-events-none rounded-2xl" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-1">Mein persönliches Hypnose-Audio</p>
                  <p className="text-4xl font-black font-headline text-primary">89 €</p>
                  <p className="text-sm text-gray-400 mt-1">Einmalig</p>
                </div>
                <button
                  onClick={handleStart}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors text-base w-full text-center"
                >
                  Mein persönliches Audio erstellen
                </button>
                <div className="w-full bg-[#f9f9f9] rounded-xl px-4 py-3 text-xs text-gray-500 leading-relaxed">
                  <p className="font-semibold text-gray-700 mb-1">Einzelanfertigung – kein Widerrufsrecht</p>
                  <p>
                    Da dieses Audio exklusiv und persönlich für dich produziert wird, ist ein
                    Widerruf nach Produktionsbeginn ausgeschlossen. Sollte das Audio technisch
                    fehlerhaft sein oder nicht deinem Fragebogen entsprechen, erstellen wir es
                    kostenlos neu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-step form */}
        {showForm && (
          <div ref={formRef} className="max-w-xl mx-auto mt-12 scroll-mt-24">
            <div className="rounded-2xl border border-gray-200 shadow-sm bg-white p-8">
              {!showSummary ? (
                <>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Schritt {step} von {TOTAL_STEPS}
                      </span>
                      <span className="text-xs text-gray-400">{STEP_LABELS[step - 1]}</span>
                    </div>
                    <div className="flex gap-1.5">
                      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 flex-1 rounded-full transition-colors ${
                            i < step ? 'bg-primary' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Step content */}
                  {renderStep()}

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      className={`flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors ${
                        step === 1 ? 'invisible' : ''
                      }`}
                    >
                      <ChevronLeft size={16} />
                      Zurück
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid(step)}
                      className="flex items-center gap-1.5 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                    >
                      {step === TOTAL_STEPS ? 'Zusammenfassung anzeigen' : 'Weiter'}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {renderStep()}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="mt-5 flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <ChevronLeft size={16} />
                    Angaben bearbeiten
                  </button>
                </>
              )}
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 mt-4 px-1">
              <Shield size={13} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Dieses Audio dient der Entspannung und persönlichen Entwicklung und ersetzt keine
                medizinische oder psychologische Behandlung.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
