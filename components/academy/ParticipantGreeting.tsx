'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Heart, Mail, ArrowRight } from 'lucide-react'

interface ParticipantData {
  firstName: string
  lastName: string
  companyName: string
  isParticipant: boolean
}

export default function ParticipantGreeting({ courseTitle, courseSlug }: { courseTitle: string; courseSlug: string }) {
  const [data, setData] = useState<ParticipantData | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('academy_token')
    if (!token) return

    fetch(`/api/academy/progress?token=${token}`)
      .then(res => res.json())
      .then(result => {
        if (result.participant) {
          setData({
            firstName: result.participant.firstName,
            lastName: result.participant.lastName,
            companyName: result.company?.name || '',
            isParticipant: true,
          })
        }
      })
      .catch(() => {})
  }, [])

  if (!data?.isParticipant) return null

  const isPrivate = data.companyName === 'Privatkauf'

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Heart size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
            Hallo {data.firstName}, schön dass du hier bist!
          </h3>
          {isPrivate ? (
            <>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Schön, dass du dich für diesen Kurs entschieden hast! Vor dir liegen spannende Lektionen
                mit Videos, praktischen Tipps und interaktiven Quizzes.
                Nimm dir die Zeit, die du brauchst – du kannst jederzeit pausieren und später weitermachen.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Auf Wunsch stehen wir dir auch für eine persönliche Hypnose-Session zur Verfügung – online oder vor Ort.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bei Fragen erreichst du uns jederzeit:
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Dein Unternehmen hat diesen Kurs für dich gebucht – damit du neue Impulse für deinen Alltag mitnehmen kannst.
                Vor dir liegen spannende Lektionen mit Videos, praktischen Tipps und interaktiven Quizzes.
                Nimm dir die Zeit, die du brauchst – du kannst jederzeit pausieren und später weitermachen.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Auf Wunsch stehen wir dir auch für eine persönliche Hypnose-Session zur Verfügung – online oder vor Ort.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bei Fragen wende dich an die verantwortliche Person in deinem Unternehmen oder direkt an uns:
              </p>
            </>
          )}
          <a
            href="mailto:info@hypnovital.net"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-2 hover:gap-2.5 transition-all"
          >
            <Mail size={14} />
            info@hypnovital.net
          </a>
        </div>
      </div>
    </div>
  )
}

/** Zeigt an ob der Besucher ein Teilnehmer ist (für Sidebar-Ausblendung) */
export function useIsParticipant() {
  const [isParticipant, setIsParticipant] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('academy_token')
    if (token) setIsParticipant(true)
  }, [])

  return isParticipant
}
