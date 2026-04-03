import type { Metadata } from 'next'
import { Suspense } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ContactForm from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Nimm Kontakt mit hypnovital auf – wir freuen uns auf deine Nachricht.',
}

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Kontakt</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight tracking-tight">
              Schreib uns
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Hast du eine Frage, ein Anliegen oder möchtest du mehr erfahren? Wir antworten
              innerhalb von 1–2 Werktagen.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Kontaktdaten */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-headline font-bold text-gray-900 mb-6">Kontaktdaten</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">E-Mail</p>
                  <a href="mailto:info@hypnovital.net" className="text-gray-700 hover:text-primary transition-colors">
                    info@hypnovital.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:+41788815379" className="text-gray-700 hover:text-primary transition-colors">
                    +41 78 881 53 79
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Standort</p>
                  <p className="text-gray-700">Alpnach, Schweiz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/hypnovital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    linkedin.com/company/hypnovital
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-[#f5f5f5] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Erreichbarkeit</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Montag – Freitag<br />
                09:00 – 17:00 Uhr
              </p>
              <p className="text-sm text-gray-400 mt-3">
                Wir antworten in der Regel innerhalb von 24–48 Stunden.
              </p>
            </div>
          </div>

          {/* Formular */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-headline font-bold text-gray-900 mb-6">Nachricht senden</h2>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
