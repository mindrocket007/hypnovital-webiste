'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

type FormStatus = 'idle' | 'loading' | 'qualified' | 'not-qualified' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  country: string
  region: string
  // Können
  ausbildung: string
  erfahrungJahre: string
  firmenkunden: string
  // Wollen
  selbstaendig: string
  stundenProWoche: string
  motivation: string
  // Finanzen
  investitionsbereit: string
  budget: string
  // Freitext
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  region: '',
  ausbildung: '',
  erfahrungJahre: '',
  firmenkunden: '',
  selbstaendig: '',
  stundenProWoche: '',
  motivation: '',
  investitionsbereit: '',
  budget: '',
  message: '',
}

function isQualified(form: FormData): boolean {
  if (form.investitionsbereit === 'Nein') return false
  if (form.budget === 'Unter CHF 5\'000') return false
  if (form.stundenProWoche === 'Unter 5 Stunden') return false
  return true
}

export default function PartnerQualifyForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState<FormData>(initialForm)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const qualified = isQualified(form)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          subject: `Partner-Bewerbung${qualified ? ' ✅ QUALIFIZIERT' : ' ❌ Nicht qualifiziert'}`,
        }),
      })

      if (res.ok) {
        setStatus(qualified ? 'qualified' : 'not-qualified')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'qualified') {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline font-bold text-2xl text-gray-900 mb-3">
          Dein Profil passt!
        </h3>
        <p className="text-gray-500 mb-6 leading-relaxed">
          Wir freuen uns auf dich. Buche jetzt ein persönliches Gespräch mit Franz Ruchti,
          um die nächsten Schritte zu besprechen.
        </p>
        <a
          href="https://calendly.com/mindrocket_official/hypnovital-partner-gesprach"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark transition-colors"
        >
          Gespräch buchen (Freitag)
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
        <p className="text-sm text-gray-400 mt-4">
          Du erhältst eine Bestätigung per E-Mail.
        </p>
      </div>
    )
  }

  if (status === 'not-qualified') {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="font-headline font-bold text-2xl text-gray-900 mb-3">
          Danke für dein Interesse!
        </h3>
        <p className="text-gray-500 mb-4 leading-relaxed">
          Aktuell passt es auf Basis deiner Angaben noch nicht ganz für eine Partnerschaft.
          Das kann sich aber ändern – wir halten dich gerne auf dem Laufenden.
        </p>
        <p className="text-gray-500 leading-relaxed">
          Bei Fragen erreichst du uns unter{' '}
          <a href="mailto:info@hypnovital.net" className="text-primary font-semibold hover:underline">
            info@hypnovital.net
          </a>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
      <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">Bewerbung als hypnovital Partner</h3>
      <p className="text-sm text-gray-500 mb-6">Beantworte die Fragen ehrlich – so finden wir heraus, ob es für beide Seiten passt.</p>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* ─── Persönliche Angaben ─── */}
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Persönliche Angaben</p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-Mail *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefon *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Wohnort</label>
                <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="z.B. Zürich"
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Land</label>
                <select name="country" value={form.country} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Schweiz">Schweiz</option>
                  <option value="Deutschland">Deutschland</option>
                  <option value="Österreich">Österreich</option>
                  <option value="Anderes">Anderes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Gewünschte Region</label>
                <input type="text" name="region" value={form.region} onChange={handleChange} placeholder="z.B. Bern, Ostschweiz, Bayern..."
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Fachliche Qualifikation ─── */}
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Fachliche Qualifikation</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Welche Ausbildungen / Zertifizierungen hast du? *</label>
              <input type="text" name="ausbildung" required value={form.ausbildung} onChange={handleChange}
                placeholder="z.B. Hypnosetherapeut, NLP Practitioner, Coaching-Ausbildung..."
                className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Erfahrung im Bereich Coaching / Hypnose *</label>
                <select name="erfahrungJahre" required value={form.erfahrungJahre} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Keine Erfahrung">Keine Erfahrung (Quereinsteiger)</option>
                  <option value="Unter 2 Jahre">Unter 2 Jahre</option>
                  <option value="2-5 Jahre">2–5 Jahre</option>
                  <option value="5-10 Jahre">5–10 Jahre</option>
                  <option value="Über 10 Jahre">Über 10 Jahre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Erfahrung mit Firmenkunden?</label>
                <select name="firmenkunden" value={form.firmenkunden} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Ja, regelmässig">Ja, regelmässig</option>
                  <option value="Ja, gelegentlich">Ja, gelegentlich</option>
                  <option value="Nein, aber Interesse">Nein, aber Interesse</option>
                  <option value="Nein">Nein</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Motivation & Verfügbarkeit ─── */}
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Motivation & Verfügbarkeit</p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Bist du aktuell selbständig? *</label>
                <select name="selbstaendig" required value={form.selbstaendig} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Ja, Vollzeit">Ja, vollzeit selbständig</option>
                  <option value="Ja, Teilzeit">Ja, teilzeit / nebenberuflich</option>
                  <option value="Nein, angestellt">Nein, angestellt</option>
                  <option value="In Planung">Selbständigkeit in Planung</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Verfügbare Zeit pro Woche *</label>
                <select name="stundenProWoche" required value={form.stundenProWoche} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Unter 5 Stunden">Unter 5 Stunden</option>
                  <option value="5-10 Stunden">5–10 Stunden</option>
                  <option value="10-20 Stunden">10–20 Stunden</option>
                  <option value="20-30 Stunden">20–30 Stunden</option>
                  <option value="Vollzeit">Vollzeit (30+ Stunden)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Was reizt dich daran, von Anfang an dabei zu sein?</label>
              <textarea name="motivation" rows={3} value={form.motivation} onChange={handleChange}
                placeholder="Was ist deine Motivation? Was möchtest du erreichen?"
                className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
          </div>
        </div>

        {/* ─── Investitionsbereitschaft ─── */}
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Investitionsbereitschaft</p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:items-end">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Bereit in eine Geschäftslizenz zu investieren? *</label>
                <select name="investitionsbereit" required value={form.investitionsbereit} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Ja">Ja</option>
                  <option value="Kommt auf die Konditionen an">Kommt auf die Konditionen an</option>
                  <option value="Nein">Nein</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Verfügbares Budget *</label>
                <select name="budget" required value={form.budget} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                  <option value="">Bitte wählen...</option>
                  <option value="Unter €/CHF 5'000">Unter €/CHF 5'000</option>
                  <option value="€/CHF 5'000 - 10'000">€/CHF 5'000 – 10'000</option>
                  <option value="€/CHF 10'000 - 20'000">€/CHF 10'000 – 20'000</option>
                  <option value="Über €/CHF 20'000">Über €/CHF 20'000</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Nachricht ─── */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Möchtest du uns noch etwas mitteilen?</label>
          <textarea name="message" rows={3} value={form.message} onChange={handleChange}
            placeholder="Fragen, Anmerkungen, Besonderes..."
            className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm">Fehler beim Senden. Bitte versuche es erneut.</p>
        )}

        <Button type="submit" size="lg" loading={status === 'loading'} className="w-full">
          Bewerbung absenden
        </Button>

        <p className="text-xs text-gray-400 leading-relaxed">
          Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäss unserer{' '}
          <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a> einverstanden.
        </p>
      </form>
    </div>
  )
}
