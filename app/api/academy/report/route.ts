import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { getCourseBySlug } from '@/lib/academy-data'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Supabase ist nicht konfiguriert' },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(req.url)
    const hrToken = searchParams.get('hrToken')

    if (!hrToken) {
      return NextResponse.json(
        { error: 'hrToken fehlt' },
        { status: 400 }
      )
    }

    // Firma anhand HR-Token laden
    const { data: company, error: cError } = await supabaseAdmin
      .from('academy_companies')
      .select('*')
      .eq('hr_report_token', hrToken)
      .single()

    if (cError || !company) {
      return NextResponse.json(
        { error: 'Ungültiger Report-Token' },
        { status: 404 }
      )
    }

    const course = getCourseBySlug(company.course_slug)
    const courseName = course?.title || company.course_slug
    const totalLessons = course?.lessons.length || 0

    // Alle Teilnehmenden dieser Firma laden
    const { data: participants } = await supabaseAdmin
      .from('academy_participants')
      .select('*')
      .eq('company_id', company.id)

    const participantList = participants || []
    const participantIds = participantList.map((p) => p.id)

    // Fortschritte laden
    let progressList: Array<{
      participant_id: string
      course_slug: string
      lesson_slug: string
      started_at: string | null
      completed_at: string | null
      quiz_score: number | null
      quiz_total: number | null
    }> = []

    if (participantIds.length > 0) {
      const { data: progress } = await supabaseAdmin
        .from('academy_progress')
        .select('*')
        .in('participant_id', participantIds)
        .eq('course_slug', company.course_slug)

      progressList = progress || []
    }

    // Aggregierte Statistiken
    const totalParticipants = participantList.length
    const startedParticipants = participantList.filter((p) => p.first_access_at).length

    // Teilnehmende, die alle Lektionen abgeschlossen haben
    const completedByParticipant = new Map<string, number>()
    for (const p of progressList) {
      if (p.completed_at) {
        completedByParticipant.set(
          p.participant_id,
          (completedByParticipant.get(p.participant_id) || 0) + 1
        )
      }
    }
    const completedParticipants = totalLessons > 0
      ? Array.from(completedByParticipant.values()).filter((c) => c >= totalLessons).length
      : 0

    // Durchschnittliche Quiz-Punktzahl
    const quizEntries = progressList.filter((p) => p.quiz_score !== null && p.quiz_total !== null)
    const avgQuizScore =
      quizEntries.length > 0
        ? Math.round(
            (quizEntries.reduce((sum, p) => sum + (p.quiz_score || 0), 0) /
              quizEntries.reduce((sum, p) => sum + (p.quiz_total || 1), 0)) *
              100
          )
        : null

    // Response zusammenbauen
    const report: Record<string, unknown> = {
      companyName: company.name,
      courseName,
      totalLessons,
      totalParticipants,
      startedParticipants,
      completedParticipants,
      avgQuizScore,
    }

    // Individuelle Daten nur wenn erlaubt
    if (company.hr_report_with_names) {
      report.participants = participantList.map((p) => {
        const pProgress = progressList.filter((pr) => pr.participant_id === p.id)
        const completedLessons = pProgress.filter((pr) => pr.completed_at).length
        const pQuizEntries = pProgress.filter((pr) => pr.quiz_score !== null && pr.quiz_total !== null)
        const pAvgScore =
          pQuizEntries.length > 0
            ? Math.round(
                (pQuizEntries.reduce((sum, pr) => sum + (pr.quiz_score || 0), 0) /
                  pQuizEntries.reduce((sum, pr) => sum + (pr.quiz_total || 1), 0)) *
                  100
              )
            : null

        return {
          firstName: p.first_name,
          lastName: p.last_name,
          email: p.email,
          invitedAt: p.invited_at,
          firstAccessAt: p.first_access_at,
          completedLessons,
          totalLessons,
          avgQuizScore: pAvgScore,
        }
      })
    }

    return NextResponse.json(report)
  } catch (err) {
    console.error('Unerwarteter Fehler:', err)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
