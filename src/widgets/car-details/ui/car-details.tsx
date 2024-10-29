'use client'

import { CarDetailsImagesPreview } from './car-details-images-preview'
import { CarDetailsSpecials } from './car-details-specials'
import { CarDetailsVehicleBasics } from './car-details-vehicle-basics'
import { CarDetailsMoreFromSeller } from './car-details-more-from-seller'
import { CarDetailsHistory } from './car-details-history'
import { CarDetailsDealerInfo } from './car-details-dealer-info'
import { CarDetailsDesktopWidgets } from './car-details-desktop-widgets'

import { processCarMileage, processCarTitle, TCarDetailsResponse } from '@/entities/car'

type TCarDetailsProps = {
  carDetails: TCarDetailsResponse
} & ClassProps

const CarDetails = ({ carDetails, className }: TCarDetailsProps) => {
  const carTitle = processCarTitle(carDetails)
  const carMileage = processCarMileage(carDetails.mileage)

  return (
    <div className={cn(className)}>
      <CarDetailsImagesPreview images={carDetails.images} />

      <div className="lg:flex lg:gap-x-32">
        <div className="pb-[100px]">
          <div className="mb-24">
            <h2 className="text-primary font-semibold text-xl md:text-2xl mb-8 truncate">{carTitle}</h2>
            <p className="text-base md:text-lg font-medium">
              {carDetails.price && <span>{formatCurrency(carDetails.price)}</span>}
              <span className="mx-3 text-gray-300 font-normal">|</span>
              <span>{carMileage}</span>
            </p>
          </div>

          <CarDetailsSpecials car={carDetails} />
          <CarDetailsVehicleBasics car={carDetails} />
          <CarDetailsMoreFromSeller moreFromSeller={carDetails.moreFromSeller} />
          <CarDetailsHistory car={carDetails} />
          <CarDetailsDealerInfo car={carDetails} />
        </div>

        <CarDetailsDesktopWidgets car={carDetails} />
      </div>
    </div>
  )
}

export { CarDetails }
