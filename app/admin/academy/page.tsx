'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Upload,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  Users,
  Link as LinkIcon,
  Plus,
  FileSpreadsheet,
} from 'lucide-react'
import { courses } from '@/lib/academy-data'

interface Participant {
  firstName: string
  lastName: string
  email: string
}

interface Company {
  id: string
  name: string
  contact_name: string | null
  contact_email: string | null
  course_slug: string
  max_participants: number
  hr_report_with_names: boolean
  hr_report_token: string
  created_at: string
}

function parseCSV(text: string): Participant[] {
  const lines = text.trim().split(/\r?\n/)
  if (lines.length < 2) return []

  // Header erkennen
  const headerLine = lines[0]
  const separator = headerLine.includes(';') ? ';' : ','
  const headers = headerLine.split(separator).map((h) => h.trim().replace(/^["']|["']$/g, '').toLowerCase())

  const firstNameIdx = headers.findIndex((h) =>
    ['vorname', 'firstname', 'first_name', 'first name'].includes(h)
  )
  const lastNameIdx = headers.findIndex((h) =>
    ['nachname', 'lastname', 'last_name', 'last name', 'name'].includes(h)
  )
  const emailIdx = headers.findIndex((h) =>
    ['e-mail', 'email', 'mail', 'e_mail'].includes(h)
  )

  if (firstNameIdx === -1 || lastNameIdx === -1 || emailIdx === -1) {
    return []
  }

  const results: Participant[] = []
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    // Einfaches Parsing mit Unterstützung für Anführungszeichen
    const fields: string[] = []
    let current = ''
    let inQuotes = false
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes
      } else if ((char === separator) && !inQuotes) {
        fields.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    fields.push(current.trim())

    const firstName = fields[firstNameIdx]?.replace(/^["']|["']$/g, '')
    const lastName = fields[lastNameIdx]?.replace(/^["']|["']$/g, '')
    const email = fields[emailIdx]?.replace(/^["']|["']$/g, '')

    if (firstName && lastName && email && email.includes('@')) {
      results.push({ firstName, lastName, email })
    }
  }

  return results
}

export default function AdminAcademyPage() {
  // Firmen erstellen
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [courseSlug, setCourseSlug] = useState(courses[0]?.slug || '')
  const [maxParticipants, setMaxParticipants] = useState(100)
  const [hrReportWithNames, setHrReportWithNames] = useState(true)
  const [companyLoading, setCompanyLoading] = useState(false)
  const [companySuccess, setCompanySuccess] = useState('')
  const [companyError, setCompanyError] = useState('')

  // Einladungen
  const [selectedCompanyId, setSelectedCompanyId] = useState('')
  const [participants, setParticipants] = useState<Participant[]>([])
  const [inviteLoading, setInviteLoading] = useState(false)
  const [inviteSuccess, setInviteSuccess] = useState('')
  const [inviteError, setInviteError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Firmenliste
  const [companies, setCompanies] = useState<Company[]>([])
  const [companiesLoading, setCompaniesLoading] = useState(false)

  const loadCompanies = useCallback(async () => {
    setCompaniesLoading(true)
    try {
      // Einfacher Workaround: Firmen direkt via Supabase API laden
      const res = await fetch('/api/academy/report?hrToken=__list__')
      // Wir laden Firmen besser über einen separaten Ansatz
    } catch {
      // Firmen laden fehlgeschlagen
    } finally {
      setCompaniesLoading(false)
    }
  }, [])

  // Firma erstellen
  async function handleCreateCompany(e: React.FormEvent) {
    e.preventDefault()
    setCompanyLoading(true)
    setCompanySuccess('')
    setCompanyError('')

    try {
      const res = await fetch('/api/academy/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: companyName,
          contactName,
          contactEmail,
          courseSlug,
          maxParticipants,
          hrReportWithNames,
        }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        setCompanyError(data.error || 'Fehler beim Erstellen')
        return
      }

      setCompanySuccess(
        `Firma "${companyName}" erstellt. HR-Report-Link: /academy/report/${data.hrReportToken}`
      )
      setCompanies((prev) => [...prev, data.company])
      setCompanyName('')
      setContactName('')
      setContactEmail('')
    } catch {
      setCompanyError('Ein Fehler ist aufgetreten')
    } finally {
      setCompanyLoading(false)
    }
  }

  // CSV/Datei verarbeiten
  function handleFile(file: File) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result as string
      const parsed = parseCSV(text)
      if (parsed.length === 0) {
        setInviteError(
          'Keine gültigen Einträge gefunden. Die CSV muss Spalten "Vorname", "Nachname" und "E-Mail" enthalten.'
        )
        return
      }
      setParticipants(parsed)
      setInviteError('')
    }
    reader.readAsText(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  // Einladungen senden
  async function handleSendInvites() {
    if (!selectedCompanyId || participants.length === 0) return

    setInviteLoading(true)
    setInviteSuccess('')
    setInviteError('')

    try {
      const res = await fetch('/api/academy/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyId: selectedCompanyId,
          participants,
        }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        setInviteError(data.error || 'Fehler beim Senden')
        return
      }

      setInviteSuccess(
        `${data.invited} von ${data.total} Einladungen erfolgreich gesendet.${
          data.errors?.length ? ` Fehlgeschlagen: ${data.errors.join(', ')}` : ''
        }`
      )
      setParticipants([])
    } catch {
      setInviteError('Ein Fehler ist aufgetreten')
    } finally {
      setInviteLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e1e08] to-[#2a4f18] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-sm font-semibold mb-2">Admin</p>
          <h1 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">
            Academy Verwaltung
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* === Firma erstellen === */}
          <div className="bg-white rounded-2xl border border-[#eaeaea] p-6 md:p-8">
            <h2 className="text-xl font-headline font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building2 size={20} className="text-primary" />
              Neue Firma erstellen
            </h2>

            <form onSubmit={handleCreateCompany} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firmenname *
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Muster AG"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kurs *
                  </label>
                  <select
                    value={courseSlug}
                    onChange={(e) => setCourseSlug(e.target.value)}
                    className="w-full px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                  >
                    {courses
                      .filter((c) => c.category === 'firmen')
                      .map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.title}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kontaktperson
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Max Muster"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kontakt-E-Mail
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="max@muster.ch"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Max. Teilnehmende
                  </label>
                  <input
                    type="number"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(Number(e.target.value))}
                    min={1}
                    className="w-full px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <input
                    type="checkbox"
                    id="hrNames"
                    checked={hrReportWithNames}
                    onChange={(e) => setHrReportWithNames(e.target.checked)}
                    className="w-4 h-4 text-primary rounded focus:ring-primary"
                  />
                  <label htmlFor="hrNames" className="text-sm text-gray-700">
                    Namen im HR-Report anzeigen
                  </label>
                </div>
              </div>

              {companyError && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                  <AlertCircle size={16} />
                  {companyError}
                </div>
              )}
              {companySuccess && (
                <div className="flex items-start gap-2 text-green-700 text-sm bg-green-50 px-4 py-3 rounded-xl">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                  <span className="break-all">{companySuccess}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={companyLoading || !companyName}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {companyLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Plus size={16} />
                )}
                Firma erstellen
              </button>
            </form>
          </div>

          {/* === Einladungen senden === */}
          <div className="bg-white rounded-2xl border border-[#eaeaea] p-6 md:p-8">
            <h2 className="text-xl font-headline font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Send size={20} className="text-primary" />
              Einladungen senden
            </h2>

            <div className="space-y-4">
              {/* Firma auswählen */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Firma auswählen *
                </label>
                {companies.length > 0 ? (
                  <select
                    value={selectedCompanyId}
                    onChange={(e) => setSelectedCompanyId(e.target.value)}
                    className="w-full px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                  >
                    <option value="">Firma wählen...</option>
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.course_slug})
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="text-sm text-gray-400">
                    Erstelle zuerst eine Firma oder gib die Firmen-ID direkt ein:
                    <input
                      type="text"
                      value={selectedCompanyId}
                      onChange={(e) => setSelectedCompanyId(e.target.value)}
                      className="w-full mt-2 px-4 py-2.5 border border-[#eaeaea] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-gray-900"
                      placeholder="Firmen-ID einfügen"
                    />
                  </div>
                )}
              </div>

              {/* CSV Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teilnehmende (CSV)
                </label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOver(true)
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
                    dragOver
                      ? 'border-primary bg-primary/5'
                      : 'border-[#eaeaea] hover:border-primary/40'
                  }`}
                >
                  <FileSpreadsheet size={32} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-1">
                    CSV-Datei hier ablegen oder klicken zum Auswählen
                  </p>
                  <p className="text-xs text-gray-400">
                    Spalten: Vorname, Nachname, E-Mail (Komma oder Semikolon getrennt)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.txt"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Vorschau */}
              {participants.length > 0 && (
                <div className="border border-[#eaeaea] rounded-2xl overflow-hidden">
                  <div className="px-4 py-3 bg-[#f9f9f9] border-b border-[#eaeaea] flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {participants.length} Teilnehmende erkannt
                    </span>
                    <button
                      onClick={() => setParticipants([])}
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      Zurücksetzen
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-gray-500">
                          <th className="px-4 py-2 font-medium">Vorname</th>
                          <th className="px-4 py-2 font-medium">Nachname</th>
                          <th className="px-4 py-2 font-medium">E-Mail</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#eaeaea]">
                        {participants.map((p, i) => (
                          <tr key={i}>
                            <td className="px-4 py-2 text-gray-900">{p.firstName}</td>
                            <td className="px-4 py-2 text-gray-900">{p.lastName}</td>
                            <td className="px-4 py-2 text-gray-500">{p.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {inviteError && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                  <AlertCircle size={16} />
                  {inviteError}
                </div>
              )}
              {inviteSuccess && (
                <div className="flex items-center gap-2 text-green-700 text-sm bg-green-50 px-4 py-3 rounded-xl">
                  <CheckCircle2 size={16} />
                  {inviteSuccess}
                </div>
              )}

              <button
                onClick={handleSendInvites}
                disabled={inviteLoading || !selectedCompanyId || participants.length === 0}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {inviteLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                Einladungen senden
              </button>
            </div>
          </div>

          {/* === Firmenliste === */}
          {companies.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#eaeaea] p-6 md:p-8">
              <h2 className="text-xl font-headline font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building2 size={20} className="text-primary" />
                Registrierte Firmen
              </h2>
              <div className="space-y-4">
                {companies.map((c) => (
                  <div
                    key={c.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#f9f9f9] rounded-xl"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-sm text-gray-500">
                        {c.course_slug} &middot; Max. {c.max_participants} Teilnehmende
                      </p>
                    </div>
                    <a
                      href={`/academy/report/${c.hr_report_token}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <LinkIcon size={14} />
                      HR-Report
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
