interface VoucherCoverProps {
  productId: string
  title: string
  category: string
  formatBadge?: string
  className?: string
}

type TitleConfig = {
  lines: string[]
  fontSize: number
  startY: number
}

const titleConfigs: Record<string, TitleConfig> = {
  'gutschein':                    { lines: ['Hypnose-', 'Session'],       fontSize: 44, startY: 168 },
  'transformation-gutschein':     { lines: ['3-Monate', 'Transformation'], fontSize: 36, startY: 168 },
  'gutschein-impuls-session':     { lines: ['Impuls-', 'Session'],        fontSize: 44, startY: 168 },
  'gutschein-halbtagesworkshop':  { lines: ['Halbtages-', 'workshop'],    fontSize: 40, startY: 168 },
  'gutschein-tagesworkshop':      { lines: ['Tages-', 'workshop'],        fontSize: 44, startY: 168 },
}

function Visual({ productId }: { productId: string }) {
  switch (productId) {

    case 'gutschein':
      // Gift ribbon – horizontal + vertical bar with bow loops
      return (
        <g transform="translate(20, 270)">
          <rect x="60" y="-40" width="220" height="130" rx="6"
            fill="none" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.25"/>
          <line x1="170" y1="-40" x2="170" y2="90" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.6"/>
          <line x1="60"  y1="25"  x2="280" y2="25" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.6"/>
          <path d="M170,-40 C145,-65 118,-58 125,-40 C132,-22 160,-36 170,-40 Z"
            fill="none" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.85" strokeLinecap="round"/>
          <path d="M170,-40 C195,-65 222,-58 215,-40 C208,-22 180,-36 170,-40 Z"
            fill="none" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.85" strokeLinecap="round"/>
          <circle cx="170" cy="-40" r="4" fill="#7FBF2F" opacity="0.9"/>
        </g>
      )

    case 'transformation-gutschein':
      // Expanding spiral – 12-week transformation journey
      return (
        <g transform="translate(190, 305)">
          <path d="M0,0 C0,-22 22,-22 22,0 C22,32 -32,32 -32,-8 C-32,-52 52,-52 52,0 C52,62 -62,62 -62,-16 C-62,-90 90,-90 90,0"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
          <path d="M0,0 C0,-12 12,-12 12,0 C12,18 -18,18 -18,-4 C-18,-28 28,-28 28,0"
            fill="none" stroke="rgba(127,191,47,0.35)" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="0" cy="0" r="4.5" fill="#7FBF2F" opacity="0.9"/>
          <circle cx="90" cy="0" r="4.5" fill="#7FBF2F" opacity="0.5"/>
        </g>
      )

    case 'gutschein-impuls-session':
      // Lightning bolt – impulse / energy / spark
      return (
        <g transform="translate(145, 240)">
          <path d="M60,0 L28,60 L52,60 L20,120 L80,45 L55,45 Z"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" opacity="0.9"/>
          <path d="M60,0 L28,60 L52,60 L20,120 L80,45 L55,45 Z"
            fill="#7FBF2F" opacity="0.08"/>
          <circle cx="40" cy="60" r="38" fill="none" stroke="#7FBF2F" strokeWidth="1" opacity="0.18"/>
          <circle cx="40" cy="60" r="60" fill="none" stroke="#7FBF2F" strokeWidth="0.5" opacity="0.08"/>
        </g>
      )

    case 'gutschein-halbtagesworkshop':
      // Half-sun rising above horizon – half day
      return (
        <g transform="translate(180, 330)">
          <line x1="-160" y1="0" x2="160" y2="0" stroke="rgba(127,191,47,0.2)" strokeWidth="1"/>
          <path d="M-70,0 A70,70 0 0,1 70,0" fill="none" stroke="#7FBF2F" strokeWidth="2" opacity="0.9"/>
          <path d="M-50,0 A50,50 0 0,1 50,0" fill="none" stroke="#7FBF2F" strokeWidth="1" opacity="0.4"/>
          <path d="M-30,0 A30,30 0 0,1 30,0" fill="none" stroke="#7FBF2F" strokeWidth="1" opacity="0.2"/>
          {[[-90,0],[-64,-45],[-45,-64],[0,-90],[45,-64],[64,-45],[90,0]].map(([x,y], i) => (
            <line key={i} x1={x! * 0.78} y1={y! * 0.78} x2={x} y2={y}
              stroke="#7FBF2F" strokeWidth="1.5" strokeLinecap="round"
              opacity={i === 3 ? 0.9 : 0.45}/>
          ))}
        </g>
      )

    case 'gutschein-tagesworkshop':
      // Full sun with rays – full day
      return (
        <g transform="translate(295, 308)">
          <circle cx="0" cy="0" r="28" fill="none" stroke="#7FBF2F" strokeWidth="2" opacity="0.9"/>
          <circle cx="0" cy="0" r="10" fill="#7FBF2F" opacity="0.25"/>
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 45 * Math.PI) / 180
            const x1 = Math.cos(angle) * 34
            const y1 = Math.sin(angle) * 34
            const x2 = Math.cos(angle) * 50
            const y2 = Math.sin(angle) * 50
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#7FBF2F" strokeWidth="1.8" strokeLinecap="round"
                opacity={i % 2 === 0 ? 0.85 : 0.45}/>
            )
          })}
          <circle cx="0" cy="0" r="70" fill="none" stroke="#7FBF2F" strokeWidth="0.5" opacity="0.1"/>
        </g>
      )

    default:
      return null
  }
}

export default function VoucherCover({ productId, title, category, formatBadge, className = '' }: VoucherCoverProps) {
  const cfg = titleConfigs[productId] ?? { lines: [title], fontSize: 42, startY: 168 }
  const lineH = cfg.fontSize * 1.16
  const gradId = `hv-vc-${productId}`
  const dotId  = `hv-vd-${productId}`

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      role="img"
      aria-label={`hypnovital® – ${title}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#0e1e08"/>
          <stop offset="100%" stopColor="#142e0b"/>
        </linearGradient>
        <pattern id={dotId} x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="11" cy="11" r="0.9" fill="rgba(127,191,47,0.07)"/>
        </pattern>
      </defs>

      {/* Background */}
      <rect width="400" height="400" fill={`url(#${gradId})`}/>
      <rect width="400" height="400" fill={`url(#${dotId})`}/>

      {/* Left accent bar */}
      <rect x="0" y="0" width="3" height="400" fill="#7FBF2F"/>

      {/* Top rule */}
      <line x1="20" y1="68" x2="220" y2="68" stroke="rgba(127,191,47,0.18)" strokeWidth="0.5"/>

      {/* Format Badge – top right */}
      {formatBadge && (
        <>
          <rect x="222" y="42" width="162" height="18" rx="4" fill="rgba(255,255,255,0.07)"/>
          <rect x="222" y="42" width="162" height="18" rx="4" fill="none" stroke="rgba(127,191,47,0.22)" strokeWidth="0.5"/>
          <text
            x="303" y="54"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="8" fontWeight="700"
            fill="rgba(127,191,47,0.75)"
            letterSpacing="1.8"
            textAnchor="middle"
          >
            {formatBadge}
          </text>
        </>
      )}

      {/* Category */}
      <text
        x="20" y="56"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="10" fontWeight="700"
        fill="#7FBF2F"
        letterSpacing="2.2"
      >
        {category.toUpperCase()}
      </text>

      {/* Title lines */}
      {cfg.lines.map((line, i) => (
        <text
          key={i}
          x="20"
          y={cfg.startY + i * lineH}
          fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
          fontSize={cfg.fontSize}
          fontWeight="900"
          fill="white"
          letterSpacing="-0.5"
        >
          {line}
        </text>
      ))}

      {/* Visual element */}
      <Visual productId={productId} />

      {/* Bottom rule */}
      <line x1="20" y1="363" x2="380" y2="363" stroke="rgba(127,191,47,0.14)" strokeWidth="0.5"/>

      {/* hypnovital® */}
      <text
        x="20" y="383"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="12" fontWeight="700"
        fill="rgba(255,255,255,0.32)"
        letterSpacing="0.5"
      >
        hypnovital
      </text>
      <text
        x="92" y="381"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="7.5"
        fill="rgba(255,255,255,0.18)"
      >
        ®
      </text>

      {/* Type label – right */}
      <text
        x="380" y="383"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9" fontWeight="600"
        fill="rgba(127,191,47,0.38)"
        textAnchor="end"
        letterSpacing="1.5"
      >
        GUTSCHEIN
      </text>
    </svg>
  )
}
