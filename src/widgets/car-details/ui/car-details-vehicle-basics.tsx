import { AppSeparator } from '@/shared/ui'
import { dayjsService } from '@/shared/lib/services'
import { CarInfoItem, CarInfoItemsWrapper, TCarDetailsResponse } from '@/entities/car'

type TCarDetailsVehicleBasicsProps = {
  car: TCarDetailsResponse
}

const CarDetailsVehicleBasics = ({ car }: TCarDetailsVehicleBasicsProps) => {
  const vehicleBasics = [
    { value: car.vehicleBasicsFuelConsumption, icon: <AppIconCar /> },
    { value: car.vehicleBasicsLocation, icon: <AppIconMapPoint /> },
    {
      label: 'Listed',
      value: car.vehicleBasicsListedOn ? `${dayjsService(car.vehicleBasicsListedOn).fromNow()}` : '',
      icon: <AppIconCalendar />,
    },
    { label: 'VIN:', value: `${car.vehicleBasicsVin}`, icon: <AppIconMagnifiedCheckmark />, showTooltip: true },
    {
      label: 'Stock Number:',
      value: `${car.vehicleBasicsStockNumber}`,
      showTooltip: true,
      icon: <AppIconMagnifiedCheckmark />,
    },
  ].filter(({ value }) => Boolean(value))

  if (!vehicleBasics.length) {
    return null
  }

  return (
    <div>
      <AppSeparator className="mt-24 mb-32 md:my-24" />

      <h3 className="text-black font-medium text-base md:text-lg mb-16 md:mb-24">Vehicle Basics</h3>

      <CarInfoItemsWrapper>
        {vehicleBasics.map(({ icon, value, label, showTooltip }) => (
          <CarInfoItem
            key={String(label) + value}
            icon={icon}
            value={value ?? ''}
            label={label}
            showTooltip={showTooltip}
            isCopyable
          />
        ))}
      </CarInfoItemsWrapper>
    </div>
  )
}

export { CarDetailsVehicleBasics }
