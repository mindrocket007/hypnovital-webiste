import Image from 'next/image'

interface LaptopMockupProps {
  src: string
  alt: string
  className?: string
}

export default function LaptopMockup({ src, alt, className = '' }: LaptopMockupProps) {
  return (
    <div className={`inline-block w-full ${className}`}>
      {/* Screen */}
      <div className="bg-[#0a0a0a] rounded-t-2xl px-3 pt-3 pb-0 border-2 border-[#2a2a2a] border-b-0 shadow-[0_-2px_20px_rgba(0,0,0,0.1)]">
        {/* Notch */}
        <div className="w-20 h-2 bg-[#1a1a1a] rounded-b-lg mx-auto mb-2 relative">
          <div className="absolute left-1/2 top-0.5 -translate-x-1/2 w-1 h-1 bg-[#333] rounded-full" />
        </div>
        {/* Viewport */}
        <div className="rounded-t overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-auto block"
            quality={90}
          />
        </div>
      </div>
      {/* Base */}
      <div className="h-4 bg-gradient-to-b from-[#d6d6d6] via-[#c8c8c8] to-[#bbb] rounded-b-sm border border-[#aaa] border-t-[#ccc] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-1 w-24 h-1.5 bg-gradient-to-b from-[#aaa] to-[#999] rounded-full" />
      </div>
      {/* Shadow */}
      <div className="h-2 bg-gradient-to-b from-[#b5b5b5] to-[#e8e8e8] rounded-b-[50%] mx-14 shadow-[0_4px_15px_rgba(0,0,0,0.08)]" />
    </div>
  )
}
