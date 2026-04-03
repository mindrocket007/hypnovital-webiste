import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

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
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Token fehlt' }, { status: 400 })
    }

    // Teilnehmende anhand Token laden
    const { data: participant, error: pError } = await supabaseAdmin
      .from('academy_participants')
      .select('*, academy_companies(*)')
      .eq('access_token', token)
      .single()

    if (pError || !participant) {
      return NextResponse.json({ error: 'Ungültiger Token' }, { status: 404 })
    }

    // Zugang abgelaufen? 12 Monate ab Einladung
    const invitedAt = new Date(participant.invited_at)
    const expiresAt = new Date(invitedAt.getTime() + 365 * 24 * 60 * 60 * 1000)
    if (new Date() > expiresAt) {
      return NextResponse.json({ error: 'Dein Zugang ist abgelaufen. Bei Fragen wende dich an info@hypnovital.net', expired: true }, { status: 403 })
    }

    // Fortschritt laden
    const { data: progress } = await supabaseAdmin
      .from('academy_progress')
      .select('*')
      .eq('participant_id', participant.id)

    return NextResponse.json({
      participant: {
        id: participant.id,
        firstName: participant.first_name,
        lastName: participant.last_name,
        email: participant.email,
      },
      company: {
        name: participant.academy_companies?.name,
        courseSlug: participant.academy_companies?.course_slug,
      },
      progress: progress || [],
    })
  } catch (err) {
    console.error('Unerwarteter Fehler:', err)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Supabase ist nicht konfiguriert' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { token, courseSlug, lessonSlug, action, quizScore, quizTotal } = body as {
      token: string
      courseSlug: string
      lessonSlug: string
      action: 'start' | 'complete'
      quizScore?: number
      quizTotal?: number
    }

    if (!token || !courseSlug || !lessonSlug || !action) {
      return NextResponse.json(
        { error: 'token, courseSlug, lessonSlug und action sind erforderlich' },
        { status: 400 }
      )
    }

    // Teilnehmende anhand Token laden
    const { data: participant, error: pError } = await supabaseAdmin
      .from('academy_participants')
      .select('id, first_access_at')
      .eq('access_token', token)
      .single()

    if (pError || !participant) {
      return NextResponse.json({ error: 'Ungültiger Token' }, { status: 404 })
    }

    // first_access_at setzen falls noch nicht gesetzt
    if (!participant.first_access_at) {
      await supabaseAdmin
        .from('academy_participants')
        .update({ first_access_at: new Date().toISOString() })
        .eq('id', participant.id)
    }

    if (action === 'start') {
      // Lektion als gestartet markieren (nur wenn noch nicht vorhanden)
      const { error: upsertError } = await supabaseAdmin
        .from('academy_progress')
        .upsert(
          {
            participant_id: participant.id,
            course_slug: courseSlug,
            lesson_slug: lessonSlug,
            started_at: new Date().toISOString(),
          },
          { onConflict: 'participant_id,course_slug,lesson_slug', ignoreDuplicates: true }
        )

      if (upsertError) {
        console.error('Fehler beim Starten der Lektion:', upsertError)
        return NextResponse.json({ error: upsertError.message }, { status: 500 })
      }
    }

    if (action === 'complete') {
      // Lektion als abgeschlossen markieren
      const updateData: Record<string, unknown> = {
        completed_at: new Date().toISOString(),
      }
      if (quizScore !== undefined) updateData.quiz_score = quizScore
      if (quizTotal !== undefined) updateData.quiz_total = quizTotal

      // Erst upsert für den Fall, dass noch kein Eintrag existiert
      await supabaseAdmin
        .from('academy_progress')
        .upsert(
          {
            participant_id: participant.id,
            course_slug: courseSlug,
            lesson_slug: lessonSlug,
            started_at: new Date().toISOString(),
            ...updateData,
          },
          { onConflict: 'participant_id,course_slug,lesson_slug' }
        )
    }

    // Aktuellen Fortschritt zurückgeben
    const { data: progress } = await supabaseAdmin
      .from('academy_progress')
      .select('*')
      .eq('participant_id', participant.id)

    return NextResponse.json({
      success: true,
      progress: progress || [],
    })
  } catch (err) {
    console.error('Unerwarteter Fehler:', err)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
