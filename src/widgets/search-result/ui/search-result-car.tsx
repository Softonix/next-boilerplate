'use client'

import { useMediaQuery } from 'usehooks-ts'
import { useDialogContext } from '@/shared/lib/contexts'
import { AppImage } from '@/shared/ui'
import { processCarMileage, processCarTitle, TCarDetailsResponse } from '@/entities/car'
import { useGeolocation } from '@/features/set-geo-location'

type SearchResultCarProps = {
  car: TCarDetailsResponse
}

const SearchResultCar = ({ car }: SearchResultCarProps) => {
  const router = useRouter()
  const { openDialog } = useDialogContext()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { getDistance, geoCookieLat } = useGeolocation()
  const carTitle = useMemo(() => processCarTitle(car), [car])

  const carLocation = useMemo(() => {
    if (car?.coordinate?.length && geoCookieLat) {
      const distance = getDistance({
        latitude: car?.coordinate[1],
        longitude: car?.coordinate[0],
      })

      return car?.dealerName ? `${distance} Miles to ${car?.dealerName}` : `${distance} Miles from you.`
    } else {
      const { dealerInfoStreet: street, dealerInfoCity: city } = car
      return [street, city].filter(Boolean).join(', ')
    }
  }, [car, geoCookieLat, getDistance])

  function showCarDetails(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault()

    if (isDesktop) {
      openDialog('car-details-dialog', { carId: car.id })
    } else {
      router.push(`/car-details/${car.id}`)
    }
  }
  return (
    <div
      className="rounded-xl shadow overflow-hidden flex flex-col bg-regular-light md:bg-white cursor-pointer"
      onClick={showCarDetails}
    >
      <AppImage
        src={car.images?.[0] ?? ''}
        alt={carTitle}
        wrapperClassName="block h-[70px] md:h-[130px] w-full"
        className="object-cover"
      />

      <div className="px-12 py-8 md:px-12 md:py-16 flex flex-col">
        <div className="flex flex-col justify-between grow">
          <h5 className="text-primary font-semibold text-xs md:text-sm mb-8 md:mb-12 line-clamp-2 min-h-[2lh]">
            {carTitle}
          </h5>

          <p className="text-xs md:text-sm text-nowrap overflow-hidden lg:text-base xl:text-lg md:font-medium">
            <span>{formatCurrency(car.price ?? 0)}</span>
            <span className="mx-3 text-gray-300 font-normal">|</span>
            <span>{processCarMileage(car.mileage ?? 0)}</span>
          </p>
        </div>

        {!!carLocation && (
          <p className="hidden lg:block mt-8 pt-8 border-t border-regular-light text-xs">{carLocation}</p>
        )}
      </div>
    </div>
  )
}

export { SearchResultCar, type SearchResultCarProps }
