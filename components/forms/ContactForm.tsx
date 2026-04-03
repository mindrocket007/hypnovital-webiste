'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const searchParams = useSearchParams()

  useEffect(() => {
    const subject = searchParams.get('betreff')
    if (subject) {
      setForm((prev) => ({ ...prev, subject }))
    }
  }, [searchParams])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">Nachricht gesendet</h3>
        <p className="text-gray-500">Vielen Dank – wir melden uns so bald wie möglich bei dir.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Dein Name"
            className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">E-Mail *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="deine@email.ch"
            className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Betreff</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
        >
          <option value="">Bitte wählen…</option>
          <option value="Audioprogramme">Audioprogramme</option>
          <option value="Einzelcoaching">Einzelcoaching</option>
          <option value="Firmenworkshop">Firmenworkshop</option>
          <option value="Keynote Anfrage">Keynote Anfrage</option>
          <option value="Coach werden / Franchise">Coach werden / Franchise</option>
          <option value="Medienanfrage">Medienanfrage</option>
          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Nachricht *</label>
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Deine Nachricht…"
          className="w-full px-4 py-3 rounded-xl border border-[#eaeaea] text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
      )}

      <Button type="submit" size="lg" loading={status === 'loading'} className="w-full sm:w-auto">
        Nachricht senden
      </Button>

      <p className="text-xs text-gray-400 leading-relaxed">
        Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäss unserer{' '}
        <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a> einverstanden.
      </p>
    </form>
  )
}
