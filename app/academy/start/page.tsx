'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Loader2, AlertCircle } from 'lucide-react'

function LoadingFallback() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <Loader2 size={40} className="text-primary animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Zugang wird überprüft...</p>
      </div>
    </section>
  )
}

export default function AcademyStartPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AcademyStartContent />
    </Suspense>
  )
}

function AcademyStartContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      setError('Kein Zugangs-Token angegeben.')
      setLoading(false)
      return
    }

    async function validateAndRedirect() {
      try {
        const res = await fetch(`/api/academy/progress?token=${token}`)
        const data = await res.json()

        if (!res.ok || data.error) {
          if (data.expired) {
            setError('Dein Zugang zu diesem Kurs ist abgelaufen. Falls du den Zugang verlängern möchtest, kontaktiere uns gerne.')
          } else {
            setError('Ungültiger Zugangslink. Bitte überprüfe den Link aus deiner Einladungs-E-Mail.')
          }
          setLoading(false)
          return
        }

        // Token im localStorage speichern
        localStorage.setItem('academy_token', token!)
        localStorage.setItem('academy_course', data.company?.courseSlug || '')

        // Zur Kursseite weiterleiten
        const courseSlug = data.company?.courseSlug
        if (courseSlug) {
          router.push(`/academy/kurs/${courseSlug}`)
        } else {
          setError('Kurs konnte nicht ermittelt werden.')
          setLoading(false)
        }
      } catch {
        setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.')
        setLoading(false)
      }
    }

    validateAndRedirect()
  }, [token, router])

  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={40} className="text-primary animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Zugang wird überprüft...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={32} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-headline font-black text-gray-900 mb-3">
            Zugang nicht möglich
          </h1>
          <p className="text-gray-500 leading-relaxed">{error}</p>
          <p className="text-sm text-gray-400 mt-6">
            Bei Fragen wende dich an{' '}
            <a href="mailto:info@hypnovital.net" className="text-primary hover:underline">
              info@hypnovital.net
            </a>
          </p>
        </div>
      </section>
    )
  }

  return null
}
