import { AppSeparator } from '@/shared/ui'
import { CarInfoItem, CarInfoItemsWrapper, TCarDetailsResponse } from '@/entities/car'

type TCarDetailsDealerInfoProps = {
  car: TCarDetailsResponse
}

const CarDetailsDealerInfo = ({ car }: TCarDetailsDealerInfoProps) => {
  const dealerInfo = [
    { value: car.dealerInfoWebsite, icon: <AppIconGlobe /> },
    { value: car.dealerInfoStreet, icon: <AppIconMapPoint /> },
    { value: car.dealerInfoCity, icon: <AppIconMapPoint /> },
    { value: car.dealerInfoPhone, icon: <AppIconPhone /> },
  ].filter(({ value }) => Boolean(value))

  if (!dealerInfo.length) {
    return null
  }

  return (
    <div>
      <AppSeparator className="mt-24 mb-32 md:my-24" />

      <h3 className="text-black font-medium text-base md:text-lg mb-16 md:mb-24">Dealer Information</h3>

      <CarInfoItemsWrapper>
        {dealerInfo.map(({ icon, value }) => (
          <CarInfoItem
            icon={icon}
            value={value ?? ''}
            key={value}
            showTooltip
            isCopyable
          />
        ))}
      </CarInfoItemsWrapper>
    </div>
  )
}

export { CarDetailsDealerInfo }
