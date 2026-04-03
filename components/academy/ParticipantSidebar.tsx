'use client'

import { useEffect, useState } from 'react'

/** Blendet Kinder nur ein wenn KEIN Token vorhanden ist (= öffentliche Ansicht) */
export function PublicOnly({ children }: { children: React.ReactNode }) {
  const [isParticipant, setIsParticipant] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('academy_token')
    setIsParticipant(!!token)
    setReady(true)
  }, [])

  if (!ready) return null
  if (isParticipant) return null
  return <>{children}</>
}

/** Blendet Kinder nur ein wenn Token vorhanden ist (= Teilnehmer-Ansicht) */
export function ParticipantOnly({ children }: { children: React.ReactNode }) {
  const [isParticipant, setIsParticipant] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('academy_token')
    setIsParticipant(!!token)
    setReady(true)
  }, [])

  if (!ready) return null
  if (!isParticipant) return null
  return <>{children}</>
}
