import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name, email, phone, street, zip, city,
      eventTitle, eventDate, eventEndTime, eventVenue,
      eventDeliveryMethod, eventCity, eventCountry, eventType, eventPrice,
    } = body

    if (!name || !email || !phone || !street || !zip || !city) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@hypnovital.net'
    const from = process.env.RESEND_FROM_EMAIL || 'noreply@hypnovital.net'

    function formatDate(dateStr: string) {
      return new Date(dateStr).toLocaleDateString('de-CH', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      })
    }

    const locationLine = eventDeliveryMethod === 'Vor Ort'
      ? `${eventCountry}, ${eventCity} – ${eventVenue}`
      : eventVenue

    // Admin-Benachrichtigung
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px;">
        <h2 style="color: #111; margin-bottom: 8px;">Neue Veranstaltungsanmeldung</h2>
        <p style="color: #7FBF2F; font-weight: bold; margin-bottom: 24px;">${eventTitle}</p>

        <div style="background: #f5f5f5; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0 0 6px; color: #555; font-size: 13px;"><strong>Veranstaltung:</strong> ${eventTitle}</p>
          <p style="margin: 0 0 6px; color: #555; font-size: 13px;"><strong>Datum:</strong> ${formatDate(eventDate)}, bis ${eventEndTime} Uhr</p>
          <p style="margin: 0 0 6px; color: #555; font-size: 13px;"><strong>Durchführung:</strong> ${eventDeliveryMethod}</p>
          <p style="margin: 0 0 6px; color: #555; font-size: 13px;"><strong>Ort:</strong> ${locationLine}</p>
          <p style="margin: 0; color: #555; font-size: 13px;"><strong>Format / Preis:</strong> ${eventType} · ${eventPrice}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Teilnehmer</td></tr>
          <tr><td style="padding: 0 0 12px; color: #111; font-size: 15px;">${name}</td></tr>
          <tr><td style="padding: 6px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">E-Mail</td></tr>
          <tr><td style="padding: 0 0 12px; color: #111; font-size: 15px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefon</td></tr>
          <tr><td style="padding: 0 0 12px; color: #111; font-size: 15px;">${phone}</td></tr>
          <tr><td style="padding: 6px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Adresse</td></tr>
          <tr><td style="padding: 0 0 12px; color: #111; font-size: 15px;">${street}<br>${zip} ${city}</td></tr>
        </table>

        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">hypnovital® Veranstaltungsanmeldung</p>
      </div>
    `

    // Bestätigungs-E-Mail an Teilnehmer
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 40px 20px;">
        <p style="font-size: 13px; font-weight: bold; color: #7FBF2F; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">hypnovital®</p>
        <h2 style="color: #111; margin-bottom: 16px;">Deine Anmeldung ist eingegangen</h2>
        <p style="color: #555; margin-bottom: 24px;">Hallo ${name},<br><br>
        vielen Dank für deine Anmeldung! Wir haben deine Registrierung erhalten und melden uns in Kürze mit der Zahlungsbestätigung und allen weiteren Details.</p>

        <div style="background: #f5f5f5; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <p style="margin: 0 0 8px; font-weight: bold; color: #111;">${eventTitle}</p>
          <p style="margin: 0 0 4px; color: #555; font-size: 14px;">📅 ${formatDate(eventDate)}, bis ${eventEndTime} Uhr</p>
          <p style="margin: 0 0 4px; color: #555; font-size: 14px;">📍 ${locationLine}</p>
          <p style="margin: 0; color: #555; font-size: 14px;">💶 ${eventPrice}</p>
        </div>

        <p style="color: #555; font-size: 14px;">Bei Fragen erreichst du uns unter <a href="mailto:info@hypnovital.net" style="color: #7FBF2F;">info@hypnovital.net</a></p>

        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 32px 0;" />
        <p style="color: #999; font-size: 12px;">hypnovital® · Veränderung beginnt im Unterbewusstsein.</p>
      </div>
    `

    await Promise.all([
      resend.emails.send({
        from,
        to: adminEmail,
        reply_to: email,
        subject: `Neue Anmeldung: ${eventTitle} – ${name}`,
        html: adminHtml,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: `Deine Anmeldung: ${eventTitle} – hypnovital®`,
        html: confirmationHtml,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Event-Anmeldung Fehler:', err)
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}
