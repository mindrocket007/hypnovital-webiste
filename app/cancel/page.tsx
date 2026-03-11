import type { Metadata } from 'next'
import Link from 'next/link'
import { XCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zahlung abgebrochen',
  description: 'Die Zahlung wurde nicht abgeschlossen.',
}

export default function CancelPage() {
  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center py-20">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm">

          {/* Icon */}
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle size={40} className="text-gray-400" />
          </div>

          {/* Headline */}
          <h1 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
            Zahlung nicht abgeschlossen
          </h1>

          {/* Subline */}
          <p className="text-gray-500 leading-relaxed mb-8">
            Du hast den Checkout abgebrochen. Kein Problem – du kannst jederzeit zurückkehren
            und deinen Kauf abschliessen.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Link
              href="/shop"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              <ArrowLeft size={16} /> Zurück zum Shop
            </Link>
            <Link
              href="/kontakt"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Fragen? Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
