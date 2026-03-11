'use client'

import { useMemo } from 'react'
import type { Product } from '@/lib/data'
import ProductCard from './ProductCard'

function matchesShopCategory(p: Product, category: string): boolean {
  if (category === 'alle') return p.isActive
  if (category === 'audio-programme') return p.isActive && p.category !== 'Gutschein'
  if (category === 'gutschein') return p.category === 'Gutschein'
  return false
}

interface Props {
  products: Product[]
  query: string
  activeCategory: string
}

export default function ShopProductGrid({ products, query, activeCategory }: Props) {
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    // No search: only show products matching the active category
    if (!q) {
      return products.filter((p) => matchesShopCategory(p, activeCategory))
    }

    // With search: include all products (even inactive gutschein) filtered by category + query
    const pool = products.filter((p) => matchesShopCategory(p, activeCategory))

    return pool.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    )
  }, [products, query, activeCategory])

  // For non-audio/gutschein categories with no search, the dedicated section is already
  // visible on the page → hide this grid to avoid duplication
  if (
    !query.trim() &&
    activeCategory !== 'alle' &&
    activeCategory !== 'audio-programme'
  ) {
    return null
  }

  if (filtered.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">
          Keine passenden Produkte gefunden. Versuche einen anderen Suchbegriff oder wähle eine andere Kategorie.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((p) => (
        <ProductCard
          key={p.id}
          slug={p.slug}
          title={p.title}
          shortDescription={p.shortDescription}
          priceFormatted={p.priceFormatted}
          category={p.category}
        />
      ))}
    </div>
  )
}
