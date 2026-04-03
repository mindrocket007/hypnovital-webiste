'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Loader2, AlertCircle, Users, BookOpen, Trophy, BarChart3 } from 'lucide-react'

interface ParticipantData {
  firstName: string
  lastName: string
  email: string
  invitedAt: string
  firstAccessAt: string | null
  completedLessons: number
  totalLessons: number
  avgQuizScore: number | null
}

interface ReportData {
  companyName: string
  courseName: string
  totalLessons: number
  totalParticipants: number
  startedParticipants: number
  completedParticipants: number
  avgQuizScore: number | null
  participants?: ParticipantData[]
}

function ProgressBar({ value, max, color = 'bg-primary' }: { value: number; max: number; color?: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return '–'
  return new Date(dateStr).toLocaleDateString('de-CH', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export default function ReportPage() {
  const params = useParams()
  const token = params.token as string

  const [report, setReport] = useState<ReportData | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadReport() {
      try {
        const res = await fetch(`/api/academy/report?hrToken=${token}`)
        const data = await res.json()

        if (!res.ok || data.error) {
          setError('Ungültiger Report-Link.')
          setLoading(false)
          return
        }

        setReport(data)
      } catch {
        setError('Ein Fehler ist aufgetreten.')
      } finally {
        setLoading(false)
      }
    }

    loadReport()
  }, [token])

  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={40} className="text-primary animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Report wird geladen...</p>
        </div>
      </section>
    )
  }

  if (error || !report) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={32} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-headline font-black text-gray-900 mb-3">
            Report nicht verfügbar
          </h1>
          <p className="text-gray-500">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-16 md:py-20 print:bg-white print:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm font-semibold mb-2">HR Report</p>
          <h1 className="text-3xl md:text-4xl font-headline font-black text-white print:text-gray-900 leading-tight mb-2">
            {report.companyName}
          </h1>
          <p className="text-white/60 print:text-gray-500 text-lg">
            Kurs: {report.courseName}
          </p>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-[#eaeaea] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Users size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-500">Registriert</span>
              </div>
              <p className="text-3xl font-headline font-black text-gray-900">
                {report.totalParticipants}
              </p>
            </div>

            <div className="bg-white border border-[#eaeaea] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center">
                  <BookOpen size={20} className="text-yellow-600" />
                </div>
                <span className="text-sm text-gray-500">Gestartet</span>
              </div>
              <p className="text-3xl font-headline font-black text-gray-900">
                {report.startedParticipants}
              </p>
              <ProgressBar value={report.startedParticipants} max={report.totalParticipants} color="bg-yellow-500" />
            </div>

            <div className="bg-white border border-[#eaeaea] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <Trophy size={20} className="text-green-600" />
                </div>
                <span className="text-sm text-gray-500">Abgeschlossen</span>
              </div>
              <p className="text-3xl font-headline font-black text-gray-900">
                {report.completedParticipants}
              </p>
              <ProgressBar value={report.completedParticipants} max={report.totalParticipants} color="bg-green-500" />
            </div>

            <div className="bg-white border border-[#eaeaea] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <BarChart3 size={20} className="text-purple-600" />
                </div>
                <span className="text-sm text-gray-500">Quiz-Durchschnitt</span>
              </div>
              <p className="text-3xl font-headline font-black text-gray-900">
                {report.avgQuizScore !== null ? `${report.avgQuizScore} %` : '–'}
              </p>
            </div>
          </div>

          {/* Teilnehmenden-Tabelle */}
          {report.participants && report.participants.length > 0 && (
            <div className="bg-white border border-[#eaeaea] rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#eaeaea]">
                <h2 className="text-lg font-headline font-bold text-gray-900">
                  Teilnehmende im Detail
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#f9f9f9] text-left text-sm text-gray-500">
                      <th className="px-6 py-3 font-medium">Name</th>
                      <th className="px-6 py-3 font-medium">E-Mail</th>
                      <th className="px-6 py-3 font-medium">Eingeladen</th>
                      <th className="px-6 py-3 font-medium">Erster Zugriff</th>
                      <th className="px-6 py-3 font-medium">Fortschritt</th>
                      <th className="px-6 py-3 font-medium">Quiz</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eaeaea]">
                    {report.participants.map((p, i) => (
                      <tr key={i} className="hover:bg-[#f9f9f9] transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {p.firstName} {p.lastName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{p.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {formatDate(p.invitedAt)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {formatDate(p.firstAccessAt)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-24">
                              <ProgressBar value={p.completedLessons} max={p.totalLessons} />
                            </div>
                            <span className="text-sm text-gray-500 whitespace-nowrap">
                              {p.completedLessons}/{p.totalLessons}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {p.avgQuizScore !== null ? `${p.avgQuizScore} %` : '–'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Print-Footer */}
          <div className="mt-8 text-center text-sm text-gray-400 hidden print:block">
            hypnovital&#174; Academy Report &ndash; Erstellt am{' '}
            {new Date().toLocaleDateString('de-CH')}
          </div>
        </div>
      </section>
    </>
  )
}
