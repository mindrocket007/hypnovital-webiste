import Link from 'next/link'

const footerLinks = {
  Privatpersonen: [
    { href: '/shop', label: 'Shop' },
    { href: '/programme', label: 'Programme' },
    { href: '/veranstaltungen', label: 'Veranstaltungen' },
  ],
  Unternehmen: [
    { href: '/unternehmen/firmenangebote', label: 'Firmenangebote' },
    { href: '/unternehmen/keynotes', label: 'Keynotes' },
    { href: '/unternehmen/executive-coaching', label: 'Executive Coaching' },
    { href: '/kontakt', label: 'Anfrage stellen' },
  ],
  Coaches: [
    { href: '/coach', label: 'Coach suchen' },
    { href: '/franchise', label: 'Coach werden' },
  ],
  hypnovital: [
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/agb', label: 'AGB' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Logo + Claim */}
        <div className="mb-12">
          <Link href="/" className="inline-block mb-3">
            <span className="text-2xl font-black font-headline">
              <span className="text-white">hypno</span>
              <span className="text-primary">vital</span>
              <sup className="text-[10px] text-white/30 font-normal ml-0.5">®</sup>
            </span>
          </Link>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed">
            Veränderung beginnt im Unterbewusstsein.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} hypnovital. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/20 text-xs">
            Mentale Stärke für Privatpersonen, Unternehmen und Coaches.
          </p>
        </div>
      </div>
    </footer>
  )
}
