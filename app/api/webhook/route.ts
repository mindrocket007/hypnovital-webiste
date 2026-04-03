import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { sendCustomerEmail, sendAdminEmail, sendElearningAccessEmail } from '@/lib/resend'
import { createSignedDownloadUrl } from '@/lib/supabase'
import { supabaseAdmin } from '@/lib/supabase'
import { getCourseBySlug } from '@/lib/academy-data'
import Stripe from 'stripe'
import crypto from 'crypto'

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

    // E-Learning Privatkauf
    const productSlug = session.metadata?.productSlug || ''
    if (productSlug.startsWith('elearning-')) {
      const slugMap: Record<string, string> = {
        'elearning-stressmanagement': 'stressmanagement-grundlagen',
        'elearning-rauchfrei': 'rauchfrei-werden',
        'elearning-abnehmen': 'gesund-abnehmen',
      }
      const courseSlug = slugMap[productSlug]
      if (!courseSlug) {
        console.error('Unbekannter E-Learning-Slug:', productSlug)
        return NextResponse.json({ received: true })
      }

      const course = getCourseBySlug(courseSlug)
      const courseTitle = course?.title || courseSlug

      const customerName = session.customer_details?.name || 'Teilnehmer'
      const nameParts = customerName.split(' ')
      const firstName = nameParts[0] || 'Teilnehmer'
      const lastName = nameParts.slice(1).join(' ') || ''
      const accessToken = crypto.randomUUID()

      try {
        if (!supabaseAdmin) {
          console.error('Supabase Admin-Client nicht konfiguriert')
          return NextResponse.json({ error: 'Supabase fehlt' }, { status: 500 })
        }

        // 1. academy_companies-Eintrag für Privatkauf
        const { data: company, error: companyError } = await supabaseAdmin
          .from('academy_companies')
          .insert({
            name: 'Privatkauf',
            contact_email: customerEmail,
            course_slug: courseSlug,
          })
          .select('id')
          .single()

        if (companyError || !company) {
          console.error('Fehler beim Erstellen des Company-Eintrags:', companyError)
          return NextResponse.json({ received: true })
        }

        // 2. academy_participants-Eintrag
        const { error: participantError } = await supabaseAdmin
          .from('academy_participants')
          .insert({
            company_id: company.id,
            first_name: firstName,
            last_name: lastName,
            email: customerEmail,
            access_token: accessToken,
          })

        if (participantError) {
          console.error('Fehler beim Erstellen des Teilnehmer-Eintrags:', participantError)
        }

        // 3. Zugangs-E-Mail senden
        await sendElearningAccessEmail({
          to: customerEmail,
          firstName,
          courseTitle,
          accessToken,
        })

        // 4. Admin-Benachrichtigung
        await sendAdminEmail({
          productTitle: `E-Learning Privatkauf: ${courseTitle}`,
          customerEmail,
          sessionId: session.id,
        })
      } catch (err) {
        console.error('Fehler bei E-Learning-Privatkauf-Verarbeitung:', err)
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
