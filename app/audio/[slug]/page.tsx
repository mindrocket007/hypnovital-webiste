'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SectionWrapper from '@/components/ui/SectionWrapper'
import AudioCover from '@/components/shop/AudioCover'
import { audioDetails } from '@/lib/audio-details'
import { products } from '@/lib/data'
import {
  AlertTriangle, Target, BookOpen, FlaskConical,
  Building2, CheckCircle2, ArrowRight, Headphones,
  Play, Pause, Loader2,
} from 'lucide-react'
import { useRef } from 'react'

const PREVIEW_MAP: Record<string, string> = {
  abnehmen: '/audio/hoerprobe-abnehmen.mp3',
  rauchfrei: '/audio/hoerprobe-rauchfrei.mp3',
  lampenfieber: '/audio/hoerprobe-lampenfieber.mp3',
  selbstvertrauen: '/audio/hoerprobe-selbstvertrauen.mp3',
  resilienz: '/audio/hoerprobe-resilienz.mp3',
  verkaufsmindset: '/audio/hoerprobe-verkaufsmindset.mp3',
  fuehrungsstaerke: '/audio/hoerprobe-fuehrungsstaerke.mp3',
  'tief-schlafen': '/audio/hoerprobe-tief-schlafen.mp3',
  pruefungsangst: '/audio/hoerprobe-pruefungsangst.mp3',
  prokrastination: '/audio/hoerprobe-prokrastination.mp3',
  sport: '/audio/hoerprobe-sport.mp3',
  fitamsteuer: '/audio/hoerprobe-fitamsteuer.mp3',
  pflegekraft: '/audio/hoerprobe-pflegekraft.mp3',
  arztstark: '/audio/hoerprobe-arztstark.mp3',
  lehrfit: '/audio/hoerprobe-lehrfit.mp3',
  ceomind: '/audio/hoerprobe-ceomind.mp3',
  flugangst: '/audio/hoerprobe-flugangst.mp3',
}

export default function AudioDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const detail = audioDetails[slug]
  const product = products.find((p) => p.slug === slug)

  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [buyLoading, setBuyLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  if (!detail || !product) return notFound()

  const previewUrl = PREVIEW_MAP[slug]

  function togglePlay() {
    if (!previewUrl) return
    if (!audioRef.current) {
      audioRef.current = new Audio(previewUrl)
      audioRef.current.addEventListener('ended', () => setPlaying(false))
    }
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  async function handleBuy() {
    setBuyLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        setError(data.error || 'Checkout konnte nicht gestartet werden.')
        return
      }
      window.open(data.url, '_blank')
    } catch {
      setError('Verbindungsfehler. Bitte versuche es erneut.')
    } finally {
      setBuyLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {detail.audienceLabel && (
                <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4">
                  {detail.audienceLabel}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-headline font-black mb-4">
                {detail.title}
              </h1>
              <p className="text-lg text-gray-300 mb-2 font-medium">
                {detail.subtitle}
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                {detail.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={handleBuy}
                  disabled={buyLoading}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors text-base disabled:opacity-50"
                >
                  {buyLoading ? 'Bitte warten…' : `Jetzt kaufen – ${product.priceFormatted}`}
                </button>
                {previewUrl && (
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-6 py-4 border border-white/20 text-white rounded-xl hover:border-white/40 transition-colors text-sm font-medium"
                  >
                    {playing ? <Pause size={16} /> : <Play size={16} />}
                    {playing ? 'Pause' : 'Hörprobe anhören'}
                  </button>
                )}
              </div>
              {error && (
                <p className="mt-4 text-sm text-red-400">{error}</p>
              )}
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl">
                <AudioCover
                  productId={slug}
                  title={product.title}
                  category={product.category}
                />
                <div className="absolute inset-0 shadow-[inset_0_-4px_16px_rgba(0,0,0,0.18)] pointer-events-none rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Das Problem */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={20} className="text-red-500" />
            <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">
              Das Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            {detail.problem.headline}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-3xl">
            {detail.problem.description}
          </p>

          {/* Statistiken */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {detail.problem.stats.map((stat) => (
              <div key={stat.label} className="bg-[#f5f5f5] rounded-2xl p-5 text-center">
                <p className="text-3xl font-black font-headline text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Folgen */}
          <h3 className="text-lg font-headline font-bold text-gray-900 mb-4">
            Was passiert, wenn sich nichts ändert
          </h3>
          <ul className="space-y-3">
            {detail.problem.consequences.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                <span className="text-sm text-gray-600">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Die Lösung */}
      <SectionWrapper bg="gray">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Target size={20} className="text-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Die Lösung
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            {detail.solution.headline}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-3xl">
            {detail.solution.description}
          </p>

          {/* Themen */}
          <h3 className="text-lg font-headline font-bold text-gray-900 mb-4">
            Diese Themen werden behandelt
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {detail.solution.topics.map((t) => (
              <div key={t} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{t}</span>
              </div>
            ))}
          </div>

          {/* Ziele */}
          <h3 className="text-lg font-headline font-bold text-gray-900 mb-4">
            Dein Ziel nach regelmässigem Hören
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {detail.solution.goals.map((g) => (
              <div key={g} className="flex items-start gap-3">
                <ArrowRight size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Studien */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical size={20} className="text-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Wissenschaftliche Grundlage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-8">
            Was die Forschung sagt
          </h2>
          <div className="space-y-4">
            {detail.studies.map((s) => (
              <div key={s.title} className="bg-[#f5f5f5] rounded-2xl p-6">
                <h3 className="font-headline font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-xs text-primary font-semibold mb-3">{s.source}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Kauf-CTA */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-black text-gray-900 mb-4">
            Bereit für die Veränderung?
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Einmal kaufen, unbegrenzt nutzen. Die Wirkung verstärkt sich mit jeder Wiederholung.
          </p>
          <div className="inline-flex flex-col items-center gap-4">
            <div className="relative aspect-square w-48 rounded-2xl overflow-hidden shadow-md">
              <AudioCover
                productId={slug}
                title={product.title}
                category={product.category}
              />
            </div>
            <p className="text-4xl font-black font-headline text-primary">{product.priceFormatted}</p>
            <p className="text-sm text-gray-400">Einmalig · Sofort per E-Mail · Unbegrenzt nutzbar</p>
            <button
              onClick={handleBuy}
              disabled={buyLoading}
              className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors text-base disabled:opacity-50"
            >
              {buyLoading ? 'Bitte warten…' : `Jetzt kaufen – ${product.priceFormatted}`}
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Firmen-Box */}
      {detail.firmenBox && (
        <SectionWrapper bg="white">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#f8fdf4] to-white p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={20} className="text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                  Für Unternehmen
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
                {detail.firmenBox.headline}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">
                {detail.firmenBox.description}
              </p>
              <ul className="space-y-3 mb-8">
                {detail.firmenBox.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt?betreff=Audioprogramme"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors text-base"
              >
                Unverbindlich anfragen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Zurück zum Shop */}
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link
            href="/shop"
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            ← Zurück zum Shop
          </Link>
        </div>
      </div>
    </>
  )
}
