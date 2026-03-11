'use client'

import { useState } from 'react'
import { Download, Loader2, ShieldCheck } from 'lucide-react'
import AudioCover from '@/components/shop/AudioCover'

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

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-1.5 tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{shortDescription}</p>

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
      </div>

    </div>
  )
}
