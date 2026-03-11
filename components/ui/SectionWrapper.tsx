import clsx from 'clsx'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  bg?: 'white' | 'gray' | 'dark' | 'primary'
  id?: string
}

export default function SectionWrapper({ children, className, bg = 'white', id }: SectionWrapperProps) {
  const backgrounds: Record<string, string> = {
    white: 'bg-white',
    gray: 'bg-[#f5f5f5]',
    dark: 'bg-[#111111] text-white',
    primary: 'bg-primary text-white',
  }

  return (
    <section id={id} className={clsx('py-16 md:py-24', backgrounds[bg], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
