'use client'

import { useState, useRef } from 'react'
import { Download, Loader2, ShieldCheck, Play, Pause, Volume2 } from 'lucide-react'
import Link from 'next/link'
import AudioCover from '@/components/shop/AudioCover'
import { audioDetails } from '@/lib/audio-details'

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
  'iron-mind': '/audio/hoerprobe-iron-mind.mp3',
}

interface ProductCardProps {
  slug: string
  title: string
  shortDescription: string
  priceFormatted: string
  category?: string
}

export default function ProductCard({
  slug,
  title,
  shortDescription,
  priceFormatted,
  category,
}: ProductCardProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Audio player state
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const previewSrc = PREVIEW_MAP[slug]

  async function togglePlay() {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (err) {
        console.error('Audio play failed:', err)
        setIsPlaying(false)
      }
    }
  }

  function handleTimeUpdate() {
    const audio = audioRef.current
    if (!audio) return
    setCurrentTime(audio.currentTime)
    setProgress((audio.currentTime / audio.duration) * 100)
  }

  function handleLoadedMetadata() {
    const audio = audioRef.current
    if (!audio) return
    setDuration(audio.duration)
  }

  function handleEnded() {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current
    if (!audio) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = x / rect.width
    audio.currentTime = pct * audio.duration
  }

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  async function handleBuy() {
    setLoading(true)
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
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-[#eaeaea] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

      {/* Cover Mockup */}
      <div className="relative aspect-square w-full overflow-hidden">
        <AudioCover productId={slug} title={title} category={category ?? ''} />
        <div className="absolute inset-0 shadow-[inset_0_-4px_16px_rgba(0,0,0,0.18)] pointer-events-none rounded-t-2xl" />
      </div>

      {/* Hidden audio element */}
      {previewSrc && (
        <audio
          ref={audioRef}
          src={previewSrc}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
        />
      )}

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-1.5 tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{shortDescription}</p>

        {/* Audio Preview Player */}
        {previewSrc && (
          <div className="mb-4 bg-[#f8faf5] rounded-xl p-3 border border-[#eaeaea]">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-gray-700">Hörprobe</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white hover:bg-[#6aaa22] transition-colors flex-shrink-0"
                aria-label={isPlaying ? 'Pause' : 'Abspielen'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                )}
              </button>
              <div className="flex-1">
                <div
                  className="h-1.5 bg-primary/15 rounded-full cursor-pointer relative"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-400">{formatTime(currentTime)}</span>
                  <span className="text-[10px] text-gray-400">{duration > 0 ? formatTime(duration) : '--:--'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
          <div>
            <span className="text-xl font-black text-gray-900 font-headline">{priceFormatted}</span>
            <span className="text-xs text-gray-400 ml-1">inkl. MwSt.</span>
          </div>
          <button
            onClick={handleBuy}
            disabled={loading}
            className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#6aaa22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Bitte warten…
              </>
            ) : (
              <>
                <Download size={14} />
                Kaufen
              </>
            )}
          </button>
        </div>

        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

        <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#f0f0f0]">
          <ShieldCheck size={13} className="text-primary flex-shrink-0" />
          <span className="text-xs text-gray-400">14-Tage Geld-zurück-Garantie</span>
        </div>

        {audioDetails[slug] && (
          <Link
            href={`/audio/${slug}`}
            className="block text-center text-sm text-primary font-semibold hover:text-primary-dark transition-colors mt-3 pt-3 border-t border-[#f0f0f0]"
          >
            Mehr über Inhalte & Wirkung →
          </Link>
        )}
      </div>

    </div>
  )
}
