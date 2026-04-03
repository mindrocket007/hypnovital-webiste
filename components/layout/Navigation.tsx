'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

const privatLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/persoenliches-audio', label: 'Persönliches Audio' },
  { href: '/programme', label: 'Programme' },
  { href: '/veranstaltungen', label: 'Veranstaltungen' },
]

const methodeLink = { href: '/methode', label: 'Die Methode' }

const unternehmenLinks = [
  { href: '/unternehmen/firmenangebote', label: 'Firmenangebote' },
  { href: '/academy', label: 'Academy' },
  { href: '/unternehmen/keynotes', label: 'Keynotes & Impulsvorträge' },
  { href: '/unternehmen/executive-coaching', label: 'Executive Coaching' },
]

const mainLinks = [
  { href: '/', label: 'Startseite' },
  { label: 'Privatpersonen', dropdown: privatLinks },
  { label: 'Unternehmen', dropdown: unternehmenLinks },
  { href: '/methode', label: 'Die Methode' },
  { href: '/coach', label: 'Coach suchen' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/blog', label: 'Blog' },
  { href: '/ueber-uns', label: 'Über uns' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileDropdown(null)
  }, [pathname])

  // Schliesse Mobile Menu wenn Fenster vergrössert wird
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled || mobileOpen ? 'bg-white shadow-sm border-b border-[#eaeaea]' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-black font-headline tracking-tight">
              <span className="text-gray-900">hypno</span>
              <span className="text-primary">vital</span>
              <sup className="text-[10px] text-gray-400 font-normal ml-0.5">®</sup>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary transition-colors py-2">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-[#eaeaea] py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-[#f5f5f5] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={clsx(
                    'text-sm font-medium transition-colors',
                    pathname === link.href ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/kontakt"
              className="ml-2 px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#eaeaea]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 pt-2">
            {mainLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full py-3 text-base font-medium text-gray-700 border-b border-[#f5f5f5]"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={clsx('transition-transform', mobileDropdown === link.label && 'rotate-180')}
                    />
                  </button>
                  {mobileDropdown === link.label && (
                    <div className="pl-4 bg-[#f5f5f5] rounded-lg my-1">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-3 px-2 text-sm text-gray-600 hover:text-primary border-b border-[#eaeaea] last:border-0"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={clsx(
                    'block py-3 text-base font-medium border-b border-[#f5f5f5]',
                    pathname === link.href ? 'text-primary' : 'text-gray-700'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/kontakt"
              className="block py-3 text-base font-medium text-gray-700 border-b border-[#f5f5f5]"
            >
              Kontakt
            </Link>
            <div className="pt-4">
              <Link
                href="/shop"
                className="block w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Programme entdecken
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
