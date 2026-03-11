import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hypnovital.net'),
  title: {
    default: 'hypnovital – Mentale Veränderung beginnt im Unterbewusstsein',
    template: '%s | hypnovital',
  },
  description:
    'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit – für Privatpersonen, Unternehmen und Coaches.',
  keywords: ['Hypnose', 'Coaching', 'mentale Stärke', 'Entspannung', 'Hypnovital', 'Selbsthypnose'],
  openGraph: {
    title: 'hypnovital – Mentale Veränderung beginnt im Unterbewusstsein',
    description:
      'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit.',
    siteName: 'hypnovital',
    locale: 'de_CH',
    type: 'website',
    url: 'https://hypnovital.net',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hypnovital – Mentale Veränderung beginnt im Unterbewusstsein',
    description:
      'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit.',
  },
  alternates: {
    canonical: 'https://hypnovital.net',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'hypnovital',
  url: 'https://hypnovital.net',
  logo: 'https://hypnovital.net/images/logo.png',
  description:
    'Hypnoseprogramme, Coaching und Workshops für mentale Stärke, Gesundheit und Leistungsfähigkeit – für Privatpersonen, Unternehmen und Coaches.',
  email: 'info@hypnovital.net',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Franz Ruchti',
    url: 'https://hypnovital.net/coach/franz-ruchti',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CH',
  },
  sameAs: ['https://hypnovital.net'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@hypnovital.net',
    contactType: 'customer service',
    availableLanguage: ['German'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
