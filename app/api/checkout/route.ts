import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getProductBySlug } from '@/lib/data'

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json()

    if (!slug) {
      return NextResponse.json({ error: 'slug fehlt' }, { status: 400 })
    }

    const product = getProductBySlug(slug)

    if (!product) {
      return NextResponse.json({ error: 'Produkt nicht gefunden' }, { status: 404 })
    }

    if (!product.stripePriceId) {
      return NextResponse.json(
        { error: 'Stripe Price ID ist nicht konfiguriert für dieses Produkt.' },
        { status: 500 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: product.stripePriceId,
          quantity: 1,
        },
      ],
      // Kunden-E-Mail wird automatisch von Stripe erfasst
      customer_email: undefined,
      // Produktinfos für den Webhook (Metadaten)
      metadata: {
        productSlug: product.slug,
        productTitle: product.title,
        downloadFileKey: product.downloadFileKey,
      },
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      // Stripe erfasst die E-Mail im Checkout automatisch
      billing_address_collection: 'auto',
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout Session Fehler:', err)
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 })
  }
}
