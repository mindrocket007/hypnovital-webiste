'use client'

import { Search } from 'lucide-react'
import { flushSync } from 'react-dom'

const CATEGORIES = [
  { id: 'alle',             label: 'Alle',             anchor: 'shop-top' },
  { id: 'audio-programme',  label: 'Audio-Programme',  anchor: 'audio-programme' },
  { id: 'gutschein',        label: 'Gutschein',        anchor: 'gutschein' },
  { id: 'e-learning',       label: 'E-Learning',       anchor: 'e-learning' },
  { id: 'supplements',      label: 'Supplements',      anchor: 'supplements' },
  { id: 'equipment',        label: 'Equipment',        anchor: 'equipment' },
]

interface Props {
  query: string
  onQueryChange: (q: string) => void
  activeCategory: string
  onCategoryChange: (id: string) => void
}

export default function ShopCategoryNav({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
}: Props) {
  const scrollTo = (anchor: string) => {
    const el = document.getElementById(anchor)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCategoryClick = (catId: string, anchor: string) => {
    // flushSync forces React to re-render (grid collapses/expands) BEFORE scrolling,
    // so the scroll target is calculated against the final layout.
    flushSync(() => onCategoryChange(catId))
    scrollTo(anchor)
  }

  return (
    <div className="bg-white border-b border-[#eaeaea] sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-60">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Produkt suchen…"
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#eaeaea] text-sm text-gray-700 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id, cat.anchor)}
                className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-[#f5f5f5] text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
