interface CourseCoverProps {
  title: string
  subtitle: string
  lessonCount: number
  className?: string
}

/** Wiederverwendbares E-Learning-Cover im hypnovital Brand. */
export default function CourseCover({ title, subtitle, lessonCount, className = '' }: CourseCoverProps) {
  const coverId = `academy-cover-${title.replace(/\s/g, '-').toLowerCase()}`

  return (
    <svg
      viewBox="0 0 480 270"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label={`hypnovital® Academy – ${title}`}
    >
      <defs>
        <linearGradient id={`${coverId}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0e1e08" />
          <stop offset="100%" stopColor="#1a3a0e" />
        </linearGradient>
        <pattern id={`${coverId}-dot`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="0.7" fill="rgba(127,191,47,0.06)" />
        </pattern>
      </defs>

      {/* Background */}
      <rect width="480" height="270" rx="16" fill={`url(#${coverId}-bg)`} />
      <rect width="480" height="270" rx="16" fill={`url(#${coverId}-dot)`} />

      {/* Top accent line */}
      <rect x="0" y="0" width="480" height="3" rx="1.5" fill="#7FBF2F" opacity="0.8" />

      {/* Visual: Abstract learning path */}
      <g transform="translate(300, 60)">
        {/* Connected nodes – learning journey */}
        <circle cx="0" cy="0" r="12" fill="#7FBF2F" opacity="0.15" />
        <circle cx="0" cy="0" r="6" fill="#7FBF2F" opacity="0.4" />

        <line x1="12" y1="6" x2="45" y2="30" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
        <circle cx="50" cy="35" r="10" fill="#7FBF2F" opacity="0.12" />
        <circle cx="50" cy="35" r="5" fill="#7FBF2F" opacity="0.35" />

        <line x1="55" y1="42" x2="80" y2="70" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
        <circle cx="85" cy="75" r="14" fill="#7FBF2F" opacity="0.1" />
        <circle cx="85" cy="75" r="7" fill="#7FBF2F" opacity="0.3" />

        <line x1="92" y1="82" x2="120" y2="105" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
        <circle cx="125" cy="110" r="11" fill="#7FBF2F" opacity="0.12" />
        <circle cx="125" cy="110" r="5.5" fill="#7FBF2F" opacity="0.35" />

        <line x1="130" y1="118" x2="145" y2="140" stroke="#7FBF2F" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" />
        <circle cx="150" cy="145" r="16" fill="#7FBF2F" opacity="0.08" />
        <circle cx="150" cy="145" r="8" fill="#7FBF2F" opacity="0.5" />
        <circle cx="150" cy="145" r="3" fill="white" opacity="0.4" />

        {/* Decorative rings */}
        <circle cx="85" cy="75" r="30" fill="none" stroke="#7FBF2F" strokeWidth="0.5" opacity="0.08" />
        <circle cx="150" cy="145" r="28" fill="none" stroke="#7FBF2F" strokeWidth="0.5" opacity="0.1" />
      </g>

      {/* Badge */}
      <rect x="24" y="24" width="78" height="22" rx="11" fill="rgba(127,191,47,0.15)" />
      <text x="63" y="39" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#7FBF2F" textAnchor="middle" letterSpacing="1.5">
        ACADEMY
      </text>

      {/* Title */}
      <text x="24" y="90" fontFamily="'Arial Black', Arial, sans-serif" fontSize="26" fontWeight="900" fill="white" letterSpacing="-0.3">
        {title.length > 28 ? title.substring(0, 28) + '...' : title}
      </text>

      {/* Subtitle */}
      <text x="24" y="115" fontFamily="Arial, sans-serif" fontSize="12" fill="rgba(255,255,255,0.5)">
        {subtitle.length > 50 ? subtitle.substring(0, 50) + '...' : subtitle}
      </text>

      {/* Bottom info bar */}
      <rect x="0" y="230" width="480" height="40" rx="0" fill="rgba(0,0,0,0.2)" />

      {/* Lesson count icon + text */}
      <g transform="translate(24, 245)">
        <rect x="0" y="-6" width="12" height="12" rx="2" fill="none" stroke="rgba(127,191,47,0.6)" strokeWidth="1" />
        <line x1="3" y1="-2" x2="9" y2="-2" stroke="rgba(127,191,47,0.4)" strokeWidth="0.8" />
        <line x1="3" y1="1" x2="7" y2="1" stroke="rgba(127,191,47,0.4)" strokeWidth="0.8" />
        <line x1="3" y1="4" x2="9" y2="4" stroke="rgba(127,191,47,0.4)" strokeWidth="0.8" />
        <text x="18" y="4" fontFamily="Arial, sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">
          {lessonCount} Lektionen
        </text>
      </g>

      {/* hypnovital branding */}
      <text x="456" y="249" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.2)" textAnchor="end">
        hypnovital
      </text>
      <text x="460" y="247" fontFamily="Arial, sans-serif" fontSize="6.5" fill="rgba(255,255,255,0.12)">
        ®
      </text>
    </svg>
  )
}
