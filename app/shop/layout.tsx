import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Impulse für mentale Stärke, Gesundheit und persönliche Entwicklung.',
}

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
