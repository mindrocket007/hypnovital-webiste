import { LinkButton } from '@/components/ui/Button'

interface CTAAction {
  label: string
  href: string
  variant?: 'primary' | 'outline' | 'ghost'
}

interface CTABlockProps {
  headline: string
  subline?: string
  actions: CTAAction[]
  centered?: boolean
}

export default function CTABlock({ headline, subline, actions, centered = true }: CTABlockProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl md:text-4xl font-headline font-black text-white mb-4">{headline}</h2>
      {subline && (
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{subline}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        {actions.map((a) => (
          <LinkButton
            key={a.href}
            href={a.href}
            variant={a.variant || 'outline'}
            size="lg"
            className={
              a.variant === 'primary'
                ? 'bg-white text-primary hover:bg-white/90 border-white'
                : 'border-white text-white hover:bg-white hover:text-primary'
            }
          >
            {a.label}
          </LinkButton>
        ))}
      </div>
    </div>
  )
}
