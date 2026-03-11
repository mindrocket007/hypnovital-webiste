'use client'

import { useState } from 'react'
import { Gift, Loader2 } from 'lucide-react'

export default function VoucherBuyButton({ slug = 'gutschein' }: { slug?: string }) {
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
    <div>
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
            <Gift size={14} />
            Gutschein kaufen
          </>
        )}
      </button>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  )
}
