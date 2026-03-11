# hypnovital – Setup-Anleitung

## Voraussetzungen

- Node.js 18+ installiert
- npm oder pnpm
- Stripe-Konto (kostenlos)
- Resend-Konto (kostenlos für bis zu 100 Mails/Tag)
- Sanity-Konto (kostenlos)
- Optional: Supabase-Konto für MP3-Storage

---

## 1. Projekt starten

```bash
cd C:/users/franz/hypnovital/hypnovital-homepage
npm install
cp .env.local.example .env.local
```

Dann `.env.local` öffnen und alle Werte ausfüllen.

```bash
npm run dev
```

→ Website läuft auf http://localhost:3000

---

## 2. Environment Variablen

| Variable | Beschreibung |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe Secret Key (sk_test_...) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Publishable Key (pk_test_...) |
| `STRIPE_WEBHOOK_SECRET` | Webhook Secret (whsec_...) |
| `STRIPE_PRICE_ABNEHMEN` | Stripe Price ID für "Abnehmen" |
| `STRIPE_PRICE_RAUCHFREI` | Stripe Price ID für "Rauchfrei" |
| `STRIPE_PRICE_ENTSPANNEN` | Stripe Price ID für "Tief entspannen" |
| `STRIPE_PRICE_SELBSTVERTRAUEN` | Stripe Price ID für "Selbstvertrauen" |
| `STRIPE_PRICE_LAMPENFIEBER` | Stripe Price ID für "Lampenfieber" |
| `STRIPE_PRICE_ORGASMUS` | Stripe Price ID für das letzte Produkt |
| `RESEND_API_KEY` | Resend API Key (re_...) |
| `RESEND_FROM_EMAIL` | Absender-Adresse (muss in Resend verifiziert sein) |
| `ADMIN_NOTIFICATION_EMAIL` | Admin-E-Mail für Verkaufsbenachrichtigungen |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity Projekt-ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity Dataset (meist "production") |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API Version (z. B. 2024-01-01) |
| `SANITY_API_TOKEN` | Sanity API Token |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anon Key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Service Role Key |
| `NEXT_PUBLIC_SITE_URL` | Vollständige URL (http://localhost:3000 lokal) |
| `DOWNLOAD_BASE_URL` | Basis-URL für Downloads (Fallback ohne Supabase) |

---

## 3. Stripe Testmodus

1. Gehe zu https://dashboard.stripe.com
2. Stelle sicher, dass du im **Testmodus** bist (Schalter oben links)
3. Hole deinen `sk_test_...` und `pk_test_...` Key aus Developers > API Keys
4. Erstelle Produkte: Products > Add Product
   - Preis in CHF eingeben
   - Die `price_...` ID kopieren und in `.env.local` eintragen
5. Testkarte für Checkout: `4242 4242 4242 4242`, Ablauf: beliebig in Zukunft, CVC: beliebig

---

## 4. Stripe Webhook lokal testen

Installiere die Stripe CLI:
```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows: https://stripe.com/docs/stripe-cli
```

Einloggen:
```bash
stripe login
```

Webhook weiterleiten:
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Die CLI gibt dir einen `whsec_...` Key aus → diesen in `.env.local` als `STRIPE_WEBHOOK_SECRET` eintragen.

Test-Event senden:
```bash
stripe trigger checkout.session.completed
```

---

## 5. Resend verbinden

1. Konto erstellen: https://resend.com
2. Domain verifizieren (oder für Tests: Resend-eigene Testdomain nutzen)
3. API Key erstellen → in `.env.local` eintragen
4. `RESEND_FROM_EMAIL` muss zur verifizierten Domain gehören

---

## 6. Sanity verbinden

Sanity Studio separat aufsetzen:

```bash
npm create sanity@latest -- --project-id=DEINE_PROJECT_ID --dataset=production
```

Oder bestehendes Projekt nutzen:
1. https://sanity.io/manage → Projekt anlegen
2. Project ID + Dataset in `.env.local` eintragen
3. API Token erstellen (Viewer oder Editor) → eintragen

Die Schemas liegen in `sanity/schemaTypes/` und müssen ins Sanity Studio eingebunden werden.

**Sanity Studio starten:**
```bash
# Im Sanity-Projektordner (separat):
npm run dev
```

Studio läuft dann auf http://localhost:3333

---

## 7. Supabase Storage für MP3-Dateien

1. Projekt erstellen: https://supabase.com
2. Storage > New Bucket: `audio` (privat, nicht öffentlich)
3. MP3-Dateien hochladen, z. B. `audio/abnehmen.mp3`
4. Keys aus Settings > API in `.env.local` eintragen

Die App generiert automatisch signierte Links (24h gültig) für den E-Mail-Versand.

---

## 8. Vercel Deployment

```bash
npm install -g vercel
vercel
```

Alle `.env.local` Variablen in Vercel Dashboard > Settings > Environment Variables eintragen.

---

## 9. Projektstruktur

```
app/                    → Next.js Seiten (App Router)
  api/checkout/         → Stripe Checkout Session erstellen
  api/webhook/          → Stripe Webhook verarbeiten
  api/contact/          → Kontaktformular
  shop/                 → Shop-Seite
  unternehmen/          → B2B-Seite
  franchise/            → Coach werden
  coach/                → Coach-Verzeichnis
  coach/[slug]/         → Coach-Profilseite
  ueber-uns/            → Über uns
  kontakt/              → Kontaktseite
  success/              → Nach erfolgreichem Kauf
  cancel/               → Nach abgebrochenem Kauf

components/
  layout/               → Navigation, Footer
  ui/                   → Button, SectionWrapper, CTABlock
  shop/                 → ProductCard
  coach/                → CoachCard
  forms/                → ContactForm, InquiryForm

lib/
  data.ts               → Produktdaten + Coach-Daten (Fallback)
  stripe.ts             → Stripe Client
  resend.ts             → E-Mail-Versand
  supabase.ts           → Storage + signierte Links
  queries.ts            → Sanity Queries mit Fallback

emails/
  CustomerEmail.tsx     → Kunden-E-Mail Template
  AdminEmail.tsx        → Admin-E-Mail Template

sanity/
  client.ts             → Sanity Client
  schemaTypes/          → CMS Schemas
```
