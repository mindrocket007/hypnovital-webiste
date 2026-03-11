'use client'

import { useState } from 'react'

interface Props {
  coachEmail: string
  coachName: string
}

export default function CoachContactForm({ coachEmail, coachName }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const firstName = coachName.split(' ')[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          coachEmail,
          coachName,
          subject: `Erstgespräch – hypnovital`,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a8c2a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-headline font-bold text-xl text-white mb-2">Nachricht gesendet!</h3>
        <p className="text-white/60 text-sm">
          {firstName} meldet sich in Kürze bei dir.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] rounded-2xl p-6">
      <h3 className="font-headline font-bold text-xl text-white mb-1">
        Bereit für ein Erstgespräch?
      </h3>
      <p className="text-white/60 text-sm mb-5">
        Schreib {firstName} direkt – unverbindlich und kostenlos.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Dein Name *"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Deine E-Mail *"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-primary"
          />
        </div>
        <input
          type="tel"
          placeholder="Telefon (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-primary"
        />
        <textarea
          placeholder="Deine Nachricht *"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg text-sm bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-primary resize-none"
        />

        {status === 'error' && (
          <p className="text-red-300 text-xs">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
        </button>

        <p className="text-xs text-white/40 leading-relaxed">
          Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäss unserer{' '}
          <a href="/datenschutz" className="underline hover:text-white/70">Datenschutzerklärung</a> einverstanden.
        </p>
      </form>
    </div>
  )
}
