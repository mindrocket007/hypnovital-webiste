'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Monitor, Tag, CheckCircle2 } from 'lucide-react'

interface EventRegistrationFormProps {
  eventTitle: string
  eventDate: string
  eventStartTime: string
  eventEndTime: string
  eventVenue: string
  eventDeliveryMethod: string
  eventCity: string
  eventCountry: string
  eventType: string
  eventPrice: string
}

export default function EventRegistrationForm({
  eventTitle,
  eventDate,
  eventStartTime,
  eventEndTime,
  eventVenue,
  eventDeliveryMethod,
  eventCity,
  eventCountry,
  eventType,
  eventPrice,
}: EventRegistrationFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    zip: '',
    city: '',
    agb: false,
    website: '',
  })

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('de-CH', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/event-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          eventTitle,
          eventDate,
          eventStartTime,
          eventEndTime,
          eventVenue,
          eventDeliveryMethod,
          eventCity,
          eventCountry,
          eventType,
          eventPrice,
        }),
      })
      if (res.ok) {
        setStatus('success')
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
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-headline font-bold text-xl text-gray-900 mb-3">Anmeldung erhalten!</h3>
        <p className="text-gray-500 leading-relaxed">
          Vielen Dank für deine Anmeldung. Du erhältst von uns eine Bestätigung per E-Mail mit den Zahlungsinformationen.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
      <h3 className="font-headline font-bold text-xl text-gray-900 mb-5">Jetzt anmelden</h3>

      {/* Event-Zusammenfassung */}
      <div className="bg-[#f5f5f5] rounded-xl p-4 mb-6 space-y-2">
        <p className="font-semibold text-gray-900">{eventTitle}</p>
        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-primary" />
            {formatDate(eventDate)}
            {(eventStartTime || eventEndTime) && (
              <>, {eventStartTime}{eventStartTime && eventEndTime ? ` – ${eventEndTime}` : eventEndTime ? `bis ${eventEndTime}` : ''} Uhr</>
            )}
          </span>
          {eventDeliveryMethod === 'Vor Ort' ? (
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-primary" />
              {eventCountry}, {eventCity}
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <Monitor size={13} className="text-primary" />
              {eventVenue}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Tag size={13} className="text-primary" />
            {eventType} · {eventPrice}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            value={form.website}
            onChange={handleChange}
          />
        </div>
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Vor- und Nachname *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* E-Mail + Telefon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-Mail *</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefon *</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>

        {/* Strasse */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Strasse und Hausnummer *</label>
          <input
            type="text"
            name="street"
            required
            value={form.street}
            onChange={handleChange}
            placeholder="z. B. Musterstrasse 12"
            className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* PLZ + Ort */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">PLZ *</label>
            <input
              type="text"
              name="zip"
              required
              value={form.zip}
              onChange={handleChange}
              placeholder="z. B. 8001"
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ort *</label>
            <input
              type="text"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              placeholder="z. B. Zürich"
              className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>

        {/* AGB */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            name="agb"
            id="agb"
            required
            checked={form.agb}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-primary flex-shrink-0"
          />
          <label htmlFor="agb" className="text-sm text-gray-600 leading-relaxed">
            Ich habe die{' '}
            <Link href="/agb" className="text-primary hover:underline" target="_blank">
              Allgemeinen Geschäftsbedingungen
            </Link>{' '}
            gelesen und akzeptiere diese. *
          </label>
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-sm">Fehler beim Senden. Bitte versuche es erneut.</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Wird gesendet…' : 'Verbindlich anmelden'}
        </button>

        <p className="text-xs text-gray-400 text-center leading-relaxed">
          Mit der Anmeldung akzeptierst du unsere{' '}
          <a href="/agb" className="underline hover:text-gray-600" target="_blank">AGB</a>.
          Deine Daten werden gemäss unserer{' '}
          <a href="/datenschutz" className="underline hover:text-gray-600" target="_blank">Datenschutzerklärung</a>{' '}
          verarbeitet. Du erhältst eine Bestätigung per E-Mail.
        </p>
      </form>
    </div>
  )
}
