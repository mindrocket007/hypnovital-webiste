'use client'

import VoucherCover from '@/components/shop/VoucherCover'
import VoucherBuyButton from '@/components/shop/VoucherBuyButton'

interface VoucherCardProps {
  slug: string
  title: string
  shortDescription: string
  priceFormatted: string
  category?: string
  formatBadge?: string
}

export default function VoucherCard({
  slug,
  title,
  shortDescription,
  priceFormatted,
  category = 'Gutschein',
  formatBadge,
}: VoucherCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#eaeaea] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

      {/* Cover */}
      <div className="relative aspect-square w-full overflow-hidden">
        <VoucherCover productId={slug} title={title} category={category} formatBadge={formatBadge} />
        <div className="absolute inset-0 shadow-[inset_0_-4px_16px_rgba(0,0,0,0.18)] pointer-events-none rounded-t-2xl" />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-1.5 tracking-tight">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{shortDescription}</p>

        <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
          <span className="text-xl font-black text-gray-900 font-headline">{priceFormatted}</span>
          <VoucherBuyButton slug={slug} />
        </div>
      </div>

    </div>
  )
}
