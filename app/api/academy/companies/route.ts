import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Supabase ist nicht konfiguriert' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { name, contactName, contactEmail, courseSlug, maxParticipants, hrReportWithNames } = body

    if (!name || !courseSlug) {
      return NextResponse.json(
        { error: 'Name und Kurs-Slug sind erforderlich' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from('academy_companies')
      .insert({
        name,
        contact_name: contactName || null,
        contact_email: contactEmail || null,
        course_slug: courseSlug,
        max_participants: maxParticipants || 100,
        hr_report_with_names: hrReportWithNames !== false,
      })
      .select()
      .single()

    if (error) {
      console.error('Fehler beim Erstellen der Firma:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      company: data,
      hrReportToken: data.hr_report_token,
    })
  } catch (err) {
    console.error('Unerwarteter Fehler:', err)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
