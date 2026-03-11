import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kauf erfolgreich',
  description: 'Vielen Dank für deinen Kauf.',
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { t?: string; rid?: string }
}) {
  const isAudio = searchParams.t === 'audio'

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center py-20">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm">

          {/* Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-primary" />
          </div>

          {isAudio ? (
            <>
              <h1 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
                Danke – dein persönliches Hypnose-Audio ist bei uns eingegangen.
              </h1>
              <p className="text-gray-500 leading-relaxed mb-6">
                Wir haben deine Angaben und deine Zahlung erhalten. Dein persönliches Audio wird
                nun individuell erstellt und dir anschliessend per E-Mail zugestellt.
              </p>
              <div className="bg-[#f5f5f5] rounded-xl p-4 mb-8 flex items-start gap-3 text-left">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Du erhältst eine Bestätigung per E-Mail. Bei Fragen erreichst du uns jederzeit
                  unter{' '}
                  <span className="font-medium text-gray-800">info@hypnovital.net</span>.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Zurück zum Shop <ArrowRight size={16} />
                </Link>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Zurück zur Startseite
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl md:text-3xl font-headline font-black text-gray-900 mb-3">
                Danke für deinen Kauf!
              </h1>
              <p className="text-gray-500 leading-relaxed mb-6">
                Dein Audio-Programm ist unterwegs zu dir. Wir haben dir eine E-Mail mit deinem
                persönlichen Downloadlink gesendet.
              </p>
              <div className="bg-[#f5f5f5] rounded-xl p-4 mb-8 flex items-start gap-3 text-left">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Bitte prüfe auch deinen Spam-Ordner, falls du die E-Mail nicht sofort siehst.
                  Der Downloadlink ist 24 Stunden gültig.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Weitere Programme entdecken <ArrowRight size={16} />
                </Link>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Zurück zur Startseite
                </Link>
              </div>
            </>
          )}
        </div>

        <p className="text-center mt-6 text-xs text-gray-400">
          hypnovital® – Mentale Veränderung beginnt im Unterbewusstsein
        </p>
      </div>
    </section>
  )
}
