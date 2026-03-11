import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message, company, phone, interest, funktion, city, country, franchiseRegion, deliveryMethod, standort, coachEmail, coachName } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@hypnovital.net'
    const from = process.env.RESEND_FROM_EMAIL || 'noreply@hypnovital.net'

    // Bei Coach-Anfragen: E-Mail geht an Coach, BCC unsichtbar an Admin
    const toEmail = coachEmail || adminEmail
    const bccEmail = coachEmail ? adminEmail : undefined

    // Inhalt der E-Mail
    const coachPrefix = coachName
      ? `<p style="background:#f0faf0;border-left:4px solid #4a8c2a;padding:10px 14px;margin-bottom:24px;font-size:13px;color:#2a5c10;border-radius:4px;">Anfrage für Coach: <strong>${coachName}</strong></p>`
      : ''
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
        <h2 style="color: #111; margin-bottom: 24px;">Neue Kontaktanfrage – hypnovital</h2>
        ${coachPrefix}
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td></tr>
          <tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${name}</td></tr>
          ${company ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Unternehmen</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${company}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</td></tr>
          <tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${phone}</td></tr>` : ''}
          ${interest ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Interesse</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${interest}</td></tr>` : ''}
          ${funktion ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Funktion / Position</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${funktion}</td></tr>` : ''}
          ${city ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Wohnort</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${city}</td></tr>` : ''}
          ${country ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Land</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${country}</td></tr>` : ''}
          ${franchiseRegion ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Franchise-Region</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${franchiseRegion}</td></tr>` : ''}
          ${deliveryMethod ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Durchführungsart</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${deliveryMethod}</td></tr>` : ''}
          ${standort ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Standort</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${standort}</td></tr>` : ''}
          ${subject ? `<tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Betreff</td></tr><tr><td style="padding: 0 0 16px; color: #111; font-size: 16px;">${subject}</td></tr>` : ''}
          <tr><td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nachricht</td></tr>
          <tr><td style="padding: 0 0 16px; color: #111; font-size: 16px; white-space: pre-wrap;">${message}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">hypnovital Kontaktformular</p>
      </div>
    `

    await resend.emails.send({
      from,
      to: toEmail,
      ...(bccEmail ? { bcc: bccEmail } : {}),
      reply_to: email,
      subject: coachName
        ? `Neue Anfrage über hypnovital® – ${name}`
        : `Neue Anfrage: ${subject || name} – hypnovital`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Kontaktformular Fehler:', err)
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}
