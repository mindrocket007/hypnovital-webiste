import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { getResend } from '@/lib/resend'
import { getCourseBySlug } from '@/lib/academy-data'

export const dynamic = 'force-dynamic'

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@hypnovital.net'

function buildInvitationEmail({
  firstName,
  companyName,
  courseName,
  accessUrl,
}: {
  firstName: string
  companyName: string
  courseName: string
  accessUrl: string
}) {
  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0e1e08,#2a4f18);padding:32px 40px;text-align:center;">
            <span style="color:#7FBF2F;font-size:24px;font-weight:800;letter-spacing:-0.5px;">hypnovital</span>
            <span style="color:#7FBF2F;font-size:12px;vertical-align:super;">&#174;</span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="color:#1a1a1a;font-size:16px;line-height:1.6;margin:0 0 16px;">
              Hallo ${firstName},
            </p>
            <p style="color:#4a4a4a;font-size:15px;line-height:1.6;margin:0 0 16px;">
              Dein Unternehmen <strong>${companyName}</strong> hat den Kurs <strong>«${courseName}»</strong> für dich gebucht.
            </p>
            <p style="color:#4a4a4a;font-size:15px;line-height:1.6;margin:0 0 24px;">
              Klicke auf den Button, um direkt zu starten:
            </p>
            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
              <tr>
                <td style="background:#7FBF2F;border-radius:12px;padding:14px 32px;">
                  <a href="${accessUrl}" style="color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;display:inline-block;">
                    Kurs starten
                  </a>
                </td>
              </tr>
            </table>
            <p style="color:#888888;font-size:13px;line-height:1.5;margin:0 0 8px;">
              Dieser Link ist persönlich und nur für dich bestimmt.
            </p>
            <p style="color:#888888;font-size:13px;line-height:1.5;margin:0;">
              Bei Fragen wende dich an <a href="mailto:info@hypnovital.net" style="color:#7FBF2F;">info@hypnovital.net</a>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:20px 40px;text-align:center;border-top:1px solid #eaeaea;">
            <p style="color:#aaaaaa;font-size:12px;margin:0;">
              hypnovital&#174; &ndash; Wissenschaftlich fundierte Hypnose-Programme
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
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
    const { companyId, participants } = body as {
      companyId: string
      participants: { firstName: string; lastName: string; email: string }[]
    }

    if (!companyId || !participants?.length) {
      return NextResponse.json(
        { error: 'companyId und participants sind erforderlich' },
        { status: 400 }
      )
    }

    // Firma laden
    const { data: company, error: companyError } = await supabaseAdmin
      .from('academy_companies')
      .select('*')
      .eq('id', companyId)
      .single()

    if (companyError || !company) {
      return NextResponse.json(
        { error: 'Firma nicht gefunden' },
        { status: 404 }
      )
    }

    const course = getCourseBySlug(company.course_slug)
    const courseName = course?.title || company.course_slug

    // Teilnehmende erstellen
    const rows = participants.map((p) => ({
      company_id: companyId,
      first_name: p.firstName,
      last_name: p.lastName,
      email: p.email.toLowerCase().trim(),
    }))

    const { data: inserted, error: insertError } = await supabaseAdmin
      .from('academy_participants')
      .upsert(rows, { onConflict: 'company_id,email' })
      .select()

    if (insertError) {
      console.error('Fehler beim Erstellen der Teilnehmenden:', insertError)
      return NextResponse.json({ error: insertError.message }, { status: 500 })
    }

    // E-Mails senden
    const resend = getResend()
    let invited = 0
    const errors: string[] = []

    for (const participant of inserted || []) {
      const accessUrl = `https://www.hypnovital.net/academy/start?token=${participant.access_token}`

      try {
        await resend.emails.send({
          from: FROM,
          to: participant.email,
          subject: `Dein Zugang zum Kurs «${courseName}»`,
          html: buildInvitationEmail({
            firstName: participant.first_name,
            companyName: company.name,
            courseName,
            accessUrl,
          }),
        })
        invited++
      } catch (emailErr) {
        console.error(`E-Mail-Fehler für ${participant.email}:`, emailErr)
        errors.push(participant.email)
      }
    }

    return NextResponse.json({
      success: true,
      invited,
      total: inserted?.length || 0,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (err) {
    console.error('Unerwarteter Fehler:', err)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
