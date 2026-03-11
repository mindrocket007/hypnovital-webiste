import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { sendCustomerEmail, sendAdminEmail } from '@/lib/resend'
import { createSignedDownloadUrl } from '@/lib/supabase'
import Stripe from 'stripe'

// Wichtig: Raw body für Stripe-Signaturprüfung
export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Keine Stripe-Signatur' }, { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET fehlt')
    return NextResponse.json({ error: 'Webhook-Secret fehlt' }, { status: 500 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Stripe Webhook Signatur ungültig:', err)
    return NextResponse.json({ error: 'Ungültige Signatur' }, { status: 400 })
  }

  // Nur checkout.session.completed verarbeiten
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const customerEmail = session.customer_details?.email || session.customer_email
    const productType = session.metadata?.product_type

    if (!customerEmail) {
      console.warn('Keine Kunden-E-Mail in der Session:', session.id)
      return NextResponse.json({ received: true })
    }

    // Persönliches Hypnose-Audio: manuelle Fulfillment-Benachrichtigung
    if (productType === 'personal_hypnosis_audio') {
      try {
        await sendAdminEmail({
          productTitle: `✅ BEZAHLT – Persönliches Hypnose-Audio (Request: ${session.metadata?.request_id?.slice(0, 8).toUpperCase()})`,
          customerEmail,
          sessionId: session.id,
        })
      } catch (err) {
        console.error('Fehler beim Senden der Admin-E-Mail (Personal Audio):', err)
      }
      return NextResponse.json({ received: true })
    }

    // Standard Audio-Programme
    const productTitle = session.metadata?.productTitle || 'dein Audio-Programm'
    const downloadFileKey = session.metadata?.downloadFileKey

    // Download-Link generieren
    let downloadUrl = '#'
    if (downloadFileKey) {
      downloadUrl = (await createSignedDownloadUrl(downloadFileKey)) || '#'
    }

    // Kunden-E-Mail senden
    try {
      await sendCustomerEmail({ to: customerEmail, productTitle, downloadUrl })
    } catch (err) {
      console.error('Fehler beim Senden der Kunden-E-Mail:', err)
    }

    // Admin-E-Mail senden
    try {
      await sendAdminEmail({
        productTitle,
        customerEmail,
        sessionId: session.id,
      })
    } catch (err) {
      console.error('Fehler beim Senden der Admin-E-Mail:', err)
    }
  }

  return NextResponse.json({ received: true })
}
