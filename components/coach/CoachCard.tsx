import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

interface CoachCardProps {
  slug: string
  name: string
  city: string
  country: string
  shortBio: string
  specializations: string[]
  email?: string
  phone?: string
  imageUrl?: string
}

export default function CoachCard({
  slug,
  name,
  city,
  country,
  shortBio,
  specializations,
  email,
  phone,
  imageUrl,
}: CoachCardProps) {
  return (
    <div className="bg-white rounded-[16px] border border-brand-border p-8 flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden mb-5 flex-shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-brand-dark mb-1 tracking-tight">{name}</h3>

      <p className="flex items-center gap-1.5 text-sm text-brand-gray mb-4">
        <MapPin size={13} />
        {city}, {country}
      </p>

      <p className="text-sm text-brand-gray leading-relaxed mb-4 flex-1">{shortBio}</p>

      {/* Spezialisierungen */}
      {specializations?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {specializations.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-xs bg-brand-bg text-brand-gray px-3 py-1 rounded-full border border-brand-border"
            >
              {s}
            </span>
          ))}
          {specializations.length > 3 && (
            <span className="text-xs text-brand-gray px-2 py-1">+{specializations.length - 3}</span>
          )}
        </div>
      )}

      {/* Kontakt */}
      <div className="flex flex-col gap-1.5 text-sm text-brand-gray mb-5">
        {email && (
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={13} />
            {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={13} />
            {phone}
          </a>
        )}
      </div>

      <div className="flex gap-3 pt-5 border-t border-brand-border">
        <Link
          href={`/coach/${slug}`}
          className="flex-1 text-center text-sm font-semibold text-primary border-2 border-primary px-4 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
        >
          Profil ansehen
        </Link>
        <a
          href={`mailto:${email}`}
          className="flex-1 text-center text-sm font-semibold border-2 border-primary text-primary px-4 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
        >
          Kontakt
        </a>
      </div>
    </div>
  )
}
