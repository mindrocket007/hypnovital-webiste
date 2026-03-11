interface AudioCoverProps {
  productId: string
  title: string
  category: string
  className?: string
}

type TitleConfig = {
  lines: string[]
  fontSize: number
  startY: number
}

const titleConfigs: Record<string, TitleConfig> = {
  'abnehmen':               { lines: ['Abnehmen'],                     fontSize: 52, startY: 185 },
  'rauchfrei':              { lines: ['Rauchfrei'],                    fontSize: 52, startY: 185 },
  'tief-entspannen':        { lines: ['Tief', 'entspannen'],           fontSize: 42, startY: 162 },
  'selbstvertrauen':        { lines: ['Selbstvertrauen', 'stärken'],   fontSize: 36, startY: 168 },
  'lampenfieber':           { lines: ['Lampenfieber', 'lösen'],        fontSize: 42, startY: 162 },
  'orgasmus-hinauszogern':  { lines: ['Orgasmus', 'hinauszögern'],     fontSize: 38, startY: 168 },
  'tief-schlafen':          { lines: ['Tief', 'schlafen'],             fontSize: 42, startY: 162 },
  'gedanken-beruhigen':     { lines: ['Gedanken', 'beruhigen'],        fontSize: 40, startY: 162 },
  'selbstliebe-entwickeln': { lines: ['Selbstliebe', 'entwickeln'],    fontSize: 38, startY: 165 },
  'konzentration-steigern': { lines: ['Konzentration', 'steigern'],    fontSize: 34, startY: 168 },
  'pruefungsangst':         { lines: ['Prüfungsangst', 'lösen'],       fontSize: 38, startY: 165 },
  'persoenliches-audio':    { lines: ['Mein persönliches', 'Hypnose-Audio'], fontSize: 32, startY: 155 },
}

function Visual({ productId }: { productId: string }) {
  switch (productId) {

    case 'abnehmen':
      // Circular progress arcs – body measurement / health monitor
      return (
        <g transform="translate(295, 308)">
          <circle cx="0" cy="0" r="68" fill="none" stroke="rgba(127,191,47,0.10)" strokeWidth="2"/>
          <circle cx="0" cy="0" r="68" fill="none" stroke="#7FBF2F" strokeWidth="2"
            strokeDasharray="321 106" strokeLinecap="round" transform="rotate(-130)" opacity="0.9"/>
          <circle cx="0" cy="0" r="48" fill="none" stroke="rgba(127,191,47,0.07)" strokeWidth="1.5"/>
          <circle cx="0" cy="0" r="48" fill="none" stroke="#7FBF2F" strokeWidth="1.5"
            strokeDasharray="226 75" strokeLinecap="round" transform="rotate(-110)" opacity="0.55"/>
          <circle cx="0" cy="0" r="28" fill="none" stroke="rgba(127,191,47,0.05)" strokeWidth="1"/>
          <circle cx="0" cy="0" r="28" fill="none" stroke="#7FBF2F" strokeWidth="1"
            strokeDasharray="131 44" strokeLinecap="round" transform="rotate(-90)" opacity="0.3"/>
          <circle cx="0" cy="-68" r="5" fill="#7FBF2F" opacity="0.9" transform="rotate(-130)"/>
        </g>
      )

    case 'rauchfrei':
      // Broken circuit line – breaking the habit
      return (
        <g transform="translate(20, 285)">
          <line x1="0"   y1="0" x2="115" y2="0" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          <line x1="0"   y1="18" x2="105" y2="18" stroke="rgba(127,191,47,0.22)" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="115" cy="0" r="5.5" fill="none" stroke="#7FBF2F" strokeWidth="1.5"/>
          <line x1="127" y1="-16" x2="143" y2="16" stroke="rgba(127,191,47,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="155" cy="0" r="5.5" fill="none" stroke="#7FBF2F" strokeWidth="1.5"/>
          <line x1="165" y1="0" x2="360" y2="0" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          <line x1="175" y1="18" x2="360" y2="18" stroke="rgba(127,191,47,0.22)" strokeWidth="1" strokeLinecap="round"/>
        </g>
      )

    case 'tief-entspannen':
      // Calm EEG brainwaves – low amplitude = relaxed state
      return (
        <g transform="translate(20, 258)">
          <path
            d="M0,0 C28,0 28,-24 56,-24 C84,-24 84,24 112,24 C140,24 140,-24 168,-24 C196,-24 196,24 224,24 C252,24 252,-24 280,-24 C308,-24 308,0 360,0"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          <path
            d="M0,42 C28,42 28,18 56,18 C84,18 84,66 112,66 C140,66 140,18 168,18 C196,18 196,66 224,66 C252,66 252,18 280,18 C308,18 308,42 360,42"
            fill="none" stroke="rgba(127,191,47,0.38)" strokeWidth="1.5" strokeLinecap="round"/>
          <path
            d="M0,84 C28,84 28,60 56,60 C84,60 84,108 112,108 C140,108 140,60 168,60 C196,60 196,108 224,108 C252,108 252,60 280,60 C308,60 308,84 360,84"
            fill="none" stroke="rgba(127,191,47,0.14)" strokeWidth="1" strokeLinecap="round"/>
        </g>
      )

    case 'selbstvertrauen':
      // Ascending bars – growing confidence / signal strength
      return (
        <g transform="translate(28, 365)">
          <rect x="0"   y="-38"  width="46" height="38"  rx="5" fill="rgba(127,191,47,0.18)"/>
          <rect x="62"  y="-80"  width="46" height="80"  rx="5" fill="rgba(127,191,47,0.35)"/>
          <rect x="124" y="-128" width="46" height="128" rx="5" fill="rgba(127,191,47,0.58)"/>
          <rect x="186" y="-178" width="46" height="178" rx="5" fill="#7FBF2F" opacity="0.85"/>
          <line x1="-8" y1="6" x2="248" y2="6" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        </g>
      )

    case 'lampenfieber':
      // Spotlight rings – stage confidence / focus
      return (
        <g transform="translate(305, 310)">
          <circle cx="0" cy="0" r="22" fill="#7FBF2F" opacity="0.85"/>
          <circle cx="0" cy="0" r="9"  fill="white"   opacity="0.65"/>
          <circle cx="0" cy="0" r="44" fill="none" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.45"/>
          <circle cx="0" cy="0" r="66" fill="none" stroke="#7FBF2F" strokeWidth="1"   opacity="0.25"/>
          <circle cx="0" cy="0" r="88" fill="none" stroke="#7FBF2F" strokeWidth="0.5" opacity="0.12"/>
        </g>
      )

    case 'orgasmus-hinauszogern':
      // Diminishing sine wave – control / deliberate timing
      return (
        <g transform="translate(20, 292)">
          <path
            d="M0,0 C18,-44 36,-44 54,0 C72,44 90,44 108,0 C126,-32 144,-32 162,0 C180,32 198,32 216,0 C231,-22 246,-22 261,0 C273,18 285,18 297,0 C307,-12 318,-12 360,0"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          <path
            d="M0,28 C18,-16 36,-16 54,28 C72,72 90,72 108,28 C126,-4 144,-4 162,28 C180,60 198,60 216,28 C231,8 246,8 261,28 C273,46 285,46 297,28 C307,16 318,16 360,28"
            fill="none" stroke="rgba(127,191,47,0.22)" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      )

    case 'tief-schlafen':
      // Descending staircase curve – sinking into deep sleep stages
      return (
        <g transform="translate(20, 248)">
          <path
            d="M0,0 L60,0 L60,28 L130,28 L130,62 L210,62 L210,102 L300,102 L300,148 L360,148"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M0,18 L52,18 L52,46 L122,46 L122,80 L202,80 L202,120 L292,120 L292,166 L360,166"
            fill="none" stroke="rgba(127,191,47,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Step dots */}
          <circle cx="60"  cy="0"   r="3.5" fill="#7FBF2F" opacity="0.8"/>
          <circle cx="130" cy="28"  r="3.5" fill="#7FBF2F" opacity="0.8"/>
          <circle cx="210" cy="62"  r="3.5" fill="#7FBF2F" opacity="0.8"/>
          <circle cx="300" cy="102" r="3.5" fill="#7FBF2F" opacity="0.8"/>
        </g>
      )

    case 'gedanken-beruhigen':
      // Chaotic short strokes on left smoothing to a single calm line on right
      return (
        <g transform="translate(20, 270)">
          {/* Chaotic zone */}
          <line x1="0"  y1="-28" x2="18"  y2="12"  stroke="rgba(127,191,47,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="22" y1="18"  x2="38"  y2="-22" stroke="rgba(127,191,47,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="42" y1="-14" x2="58"  y2="24"  stroke="rgba(127,191,47,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="62" y1="20"  x2="76"  y2="-18" stroke="rgba(127,191,47,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="10" y1="38"  x2="26"  y2="-8"  stroke="rgba(127,191,47,0.25)" strokeWidth="1" strokeLinecap="round"/>
          <line x1="48" y1="-32" x2="64"  y2="8"   stroke="rgba(127,191,47,0.2)" strokeWidth="1" strokeLinecap="round"/>
          {/* Transition curve */}
          <path
            d="M80,4 C110,4 120,-10 150,0 C180,10 190,4 220,2 C250,0 280,0 360,0"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          {/* Calm endpoint dot */}
          <circle cx="360" cy="0" r="4" fill="#7FBF2F" opacity="0.9"/>
        </g>
      )

    case 'selbstliebe-entwickeln':
      // Expanding concentric rings – outward growth / self-acceptance radiating outward
      return (
        <g transform="translate(295, 305)">
          <circle cx="0" cy="0" r="8"  fill="#7FBF2F" opacity="0.9"/>
          <circle cx="0" cy="0" r="28" fill="none" stroke="#7FBF2F" strokeWidth="1.8" opacity="0.7"/>
          <circle cx="0" cy="0" r="50" fill="none" stroke="#7FBF2F" strokeWidth="1.4" opacity="0.45"/>
          <circle cx="0" cy="0" r="72" fill="none" stroke="#7FBF2F" strokeWidth="1"   opacity="0.25"/>
          <circle cx="0" cy="0" r="94" fill="none" stroke="#7FBF2F" strokeWidth="0.5" opacity="0.12"/>
          {/* Cross lines through center */}
          <line x1="-10" y1="0" x2="10" y2="0" stroke="white" strokeWidth="1.5" opacity="0.5"/>
          <line x1="0" y1="-10" x2="0" y2="10" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        </g>
      )

    case 'konzentration-steigern':
      // Converging parallel lines to focal point – concentration / laser focus
      return (
        <g transform="translate(20, 240)">
          {[
            { y1: -80, y2: 0 },
            { y1: -52, y2: 0 },
            { y1: -26, y2: 0 },
            { y1:   0, y2: 0 },
            { y1:  26, y2: 0 },
            { y1:  52, y2: 0 },
            { y1:  80, y2: 0 },
          ].map((l, i) => (
            <line
              key={i}
              x1="0" y1={l.y1}
              x2="330" y2={l.y2}
              stroke="#7FBF2F"
              strokeWidth={i === 3 ? 2 : 1}
              opacity={i === 3 ? 0.9 : 0.14 + (3 - Math.abs(i - 3)) * 0.08}
              strokeLinecap="round"
            />
          ))}
          {/* Focal point */}
          <circle cx="330" cy="0" r="6"  fill="#7FBF2F" opacity="0.9"/>
          <circle cx="330" cy="0" r="14" fill="none" stroke="#7FBF2F" strokeWidth="1" opacity="0.35"/>
        </g>
      )

    case 'pruefungsangst':
      // Peaked stress wave on left flattening to calm steady line on right
      return (
        <g transform="translate(20, 278)">
          {/* Stress peaks */}
          <path
            d="M0,0 L20,-52 L40,0 L55,-34 L70,0 L82,-18 L94,0"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Transition smoothing */}
          <path
            d="M94,0 C110,0 116,-8 132,0 C148,8 155,4 170,0 C185,-4 190,0 210,0"
            fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          {/* Calm flat line */}
          <line x1="210" y1="0" x2="360" y2="0" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round"/>
          {/* Subtle second line */}
          <path
            d="M0,18 L16,-22 L32,18 L44,-6 L58,18 L70,8 L82,18"
            fill="none" stroke="rgba(127,191,47,0.22)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="94" y1="18" x2="360" y2="18" stroke="rgba(127,191,47,0.15)" strokeWidth="1" strokeLinecap="round"/>
          {/* Calm endpoint */}
          <circle cx="360" cy="0" r="4.5" fill="#7FBF2F" opacity="0.9"/>
        </g>
      )

    case 'persoenliches-audio':
      // Fingerprint arcs – uniquely personal / individual identity
      return (
        <g transform="translate(290, 310)">
          {/* Concentric partial arcs like fingerprint ridges */}
          <path d="M-18,0 A18,18 0 0,1 18,0" fill="none" stroke="#7FBF2F" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
          <path d="M-34,8 A36,36 0 0,1 30,-12" fill="none" stroke="#7FBF2F" strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
          <path d="M-52,14 A54,54 0 0,1 46,-20" fill="none" stroke="#7FBF2F" strokeWidth="1.5" strokeLinecap="round" opacity="0.58"/>
          <path d="M-68,20 A70,70 0 0,1 60,-28" fill="none" stroke="#7FBF2F" strokeWidth="1.2" strokeLinecap="round" opacity="0.40"/>
          <path d="M-82,26 A86,86 0 0,1 74,-34" fill="none" stroke="#7FBF2F" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
          <path d="M-95,32 A100,100 0 0,1 86,-40" fill="none" stroke="#7FBF2F" strokeWidth="0.7" strokeLinecap="round" opacity="0.14"/>
          {/* Core dot */}
          <circle cx="0" cy="0" r="4.5" fill="#7FBF2F" opacity="0.9"/>
          {/* Pulse ring */}
          <circle cx="0" cy="0" r="10" fill="none" stroke="#7FBF2F" strokeWidth="1" opacity="0.3"/>
        </g>
      )

    default:
      return null
  }
}

export default function AudioCover({ productId, title, category, className = '' }: AudioCoverProps) {
  const cfg = titleConfigs[productId] ?? { lines: [title], fontSize: 44, startY: 185 }
  const lineH = cfg.fontSize * 1.16
  const gradId = `hv-bg-${productId}`
  const dotId  = `hv-dot-${productId}`

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

      {/* Unique visual element */}
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
        HYPNOSE-AUDIO
      </text>
    </svg>
  )
}
