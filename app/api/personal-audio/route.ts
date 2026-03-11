import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { randomUUID } from 'crypto'

const PRICE_ID = process.env.STRIPE_PRICE_PERSONAL_AUDIO || 'price_1T99N4Bg1XYE0gv0nQLjJUGJ'

const tr = (s: string | undefined, n: number) => (s ?? '').slice(0, n)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    if (!data.anliegen || !data.name?.trim() || !data.bestaetigung) {
      return NextResponse.json({ error: 'Bitte fülle alle Pflichtfelder aus.' }, { status: 400 })
    }

    const requestId = randomUUID()
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'

    // Send admin notification email (non-blocking)
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const from = process.env.RESEND_FROM_EMAIL || 'noreply@hypnovital.net'
      const admin = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@hypnovital.net'

      await resend.emails.send({
        from,
        to: admin,
        subject: `[NEU] Persönliches Audio – Anfrage ${requestId.slice(0, 8).toUpperCase()}`,
        html: `
          <h2 style="color:#1a1a1a">Neue Anfrage – Persönliches Hypnose-Audio</h2>
          <p><strong>Request ID:</strong> ${requestId}</p>
          <p><strong>Status:</strong> Zahlung ausstehend</p>
          <hr>
          <h3>Anliegen & Ziel</h3>
          <p><strong>Anliegen:</strong> ${data.anliegen}</p>
          <p><strong>Ziel:</strong> ${data.ziel}</p>
          <hr>
          <h3>Persönliches</h3>
          <p><strong>Name / Ansprache:</strong> ${data.name}</p>
          <p><strong>Sprache:</strong> ${data.sprache}</p>
          <p><strong>Stimme:</strong> ${data.stimme}</p>
          <hr>
          <h3>Situation</h3>
          <p><strong>Aktuelle Belastung:</strong> ${data.belastung}</p>
          <p><strong>Gewünschtes Gefühl:</strong> ${data.zielgefuehl}</p>
          <p><strong>Atmosphäre:</strong> ${data.atmosphaere}</p>
          <hr>
          <h3>Erfahrung & Nutzung</h3>
          <p><strong>Hypnose-Erfahrung:</strong> ${data.erfahrung}</p>
          <p><strong>Hauptnutzung:</strong> ${data.nutzung}</p>
          <hr>
          <h3>Sicherheitsangaben</h3>
          <p>${(data.sicherheit ?? []).join(', ') || '–'}</p>
        `,
      })
    } catch (emailErr) {
      // Email failure is non-critical – log and continue
      console.warn('Admin-Benachrichtigung konnte nicht gesendet werden:', emailErr)
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: PRICE_ID, quantity: 1 }],
      metadata: {
        request_id: requestId,
        product_type: 'personal_hypnosis_audio',
        product_name: 'Mein persönliches Hypnose-Audio',
        customer_name: tr(data.name, 100),
        anliegen: tr(data.anliegen, 100),
        ziel: tr(data.ziel, 200),
        sprache: tr(data.sprache, 50),
        stimme: tr(data.stimme, 50),
        nutzung: tr(data.nutzung, 100),
        erfahrung: tr(data.erfahrung, 50),
      },
      billing_address_collection: 'auto',
      success_url: `${baseUrl}/success?t=audio&rid=${requestId}`,
      cancel_url: `${baseUrl}/shop`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Personal Audio Checkout Fehler:', err)
    return NextResponse.json({ error: 'Interner Fehler. Bitte versuche es erneut.' }, { status: 500 })
  }
}
