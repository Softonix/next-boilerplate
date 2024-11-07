import { TCarDetailsResponse } from '@/entities/car'
import { AppSeparator } from '@/shared/ui'

type TCarDetailsMoreFromSellerProps = {
  moreFromSeller: TCarDetailsResponse['moreFromSeller']
}

const CarDetailsMoreFromSeller = ({ moreFromSeller }: TCarDetailsMoreFromSellerProps) => {
  if (!moreFromSeller) {
    return null
  }

  const moreFromSellerInfo = moreFromSeller.replace(/<br\s*\/?>/gi, '\n')

  return (
    <div>
      <AppSeparator className="mt-24 mb-32 md:my-24" />

      <h3 className="text-black font-medium text-base md:text-lg mb-16 md:mb-24">More from the seller</h3>

      <div className="border border-regular-light px-16 py-10 rounded-2xl bg-white text-sm max-h-[10lh] leading-normal overflow-y-auto whitespace-pre-wrap">
        {moreFromSellerInfo}
      </div>
    </div>
  )
}

export { CarDetailsMoreFromSeller }
