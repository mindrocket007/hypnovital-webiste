'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type ShopSearchContextType = {
  query: string
  setQuery: (q: string) => void
  activeCategory: string
  setActiveCategory: (c: string) => void
}

const ShopSearchContext = createContext<ShopSearchContextType>({
  query: '',
  setQuery: () => {},
  activeCategory: 'alle',
  setActiveCategory: () => {},
})

export function ShopSearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('alle')

  return (
    <ShopSearchContext.Provider value={{ query, setQuery, activeCategory, setActiveCategory }}>
      {children}
    </ShopSearchContext.Provider>
  )
}

export const useShopSearch = () => useContext(ShopSearchContext)
