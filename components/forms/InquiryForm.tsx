'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface InquiryFormProps {
  title?: string
  context?: string
  showFunction?: boolean        // Zeigt Funktion/Position-Feld
  showLocation?: boolean        // Zeigt Wohnort + Land
  showFranchiseRegion?: boolean // Zeigt gewünschte Franchise-Region
  showDeliveryMethod?: boolean  // Zeigt Durchführungsart (Vor Ort / Online)
  requirePhone?: boolean        // Telefon als Pflichtfeld
  interestOptions?: string[]    // Zeigt "Ich interessiere mich für" Dropdown
}

export default function InquiryForm({
  title = 'Anfrage senden',
  context,
  showFunction = false,
  showLocation = false,
  showFranchiseRegion = false,
  showDeliveryMethod = false,
  requirePhone = false,
  interestOptions,
}: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    funktion: '',
    city: '',
    country: '',
    franchiseRegion: '',
    deliveryMethod: '',
    standort: '',
    message: '',
    website: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: context || title }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({
          name: '',
          company: '',
          email: '',
          phone: '',
          interest: '',
          funktion: '',
          city: '',
          country: '',
          franchiseRegion: '',
          deliveryMethod: '',
          standort: '',
          message: '',
          website: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">Anfrage erhalten</h3>
        <p className="text-gray-500">Wir melden uns innerhalb von 1–2 Werktagen bei dir.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
      <h3 className="font-headline font-bold text-xl text-gray-900 mb-6">{title}</h3>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Honeypot – unsichtbar für echte User */}
        <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
          <label htmlFor="inquiry-website">Website</label>
          <input
            type="text"
            id="inquiry-website"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            value={form.website}
            onChange={handleChange}
          />
        </div>

        {/* Name + Unternehmen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Unternehmen</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Interesse */}
        {interestOptions && interestOptions.length > 0 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ich interessiere mich für</label>
            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            >
              <option value="">Bitte wählen…</option>
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        )}

        {/* Funktion / Position */}
        {showFunction && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Funktion / Position</label>
            <input
              type="text"
              name="funktion"
              value={form.funktion}
              onChange={handleChange}
              placeholder="z. B. HR Manager, Geschäftsführer, BGM Verantwortliche"
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        {/* E-Mail + Telefon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">E-Mail *</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telefon {requirePhone ? '*' : ''}
            </label>
            <input
              type="tel"
              name="phone"
              required={requirePhone}
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Wohnort + Land (nur Franchise) */}
        {showLocation && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Wohnort</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="z. B. Zürich"
                className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Land</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Bitte wählen…</option>
                <option value="Schweiz">Schweiz</option>
                <option value="Deutschland">Deutschland</option>
                <option value="Österreich">Österreich</option>
                <option value="Anderes">Anderes</option>
              </select>
            </div>
          </div>
        )}

        {/* Franchise-Region (nur Franchise) */}
        {showFranchiseRegion && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Gewünschte Franchise-Region</label>
            <input
              type="text"
              name="franchiseRegion"
              value={form.franchiseRegion}
              onChange={handleChange}
              placeholder="z. B. Bern, Ostschweiz, Bayern…"
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}

        {/* Durchführungsart (Executive Coaching / Firmen) */}
        {showDeliveryMethod && (
          <>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gewünschte Durchführungsart</label>
              <select
                name="deliveryMethod"
                value={form.deliveryMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Bitte wählen…</option>
                <option value="Online">Online</option>
                <option value="Vor Ort">Vor Ort</option>
                <option value="Beides gewünscht">Beides gewünscht</option>
              </select>
            </div>
            {(form.deliveryMethod === 'Vor Ort' || form.deliveryMethod === 'Beides gewünscht') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Standort / Ort</label>
                <input
                  type="text"
                  name="standort"
                  value={form.standort}
                  onChange={handleChange}
                  placeholder="z. B. Zürich, Bern, München…"
                  className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}
          </>
        )}

        {/* Nachricht */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nachricht *</label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder=""
            className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm">Fehler beim Senden. Bitte versuche es erneut.</p>
        )}

        <Button type="submit" size="lg" loading={status === 'loading'} className="w-full">
          Anfrage absenden
        </Button>

        <p className="text-xs text-gray-400 leading-relaxed">
          Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäss unserer{' '}
          <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a> einverstanden.
        </p>
      </form>
    </div>
  )
}
