import { CarInfoItem, CarInfoItemsWrapper, TCarDetailsResponse } from '@/entities/car'

type TCarDetailsSpecialsProps = {
  car: TCarDetailsResponse
}

const CarDetailsSpecials = ({ car }: TCarDetailsSpecialsProps) => {
  const carSpecials = [
    { label: 'Exterior:', value: car.specialsExterior },
    { label: 'Interior:', value: car.specialsInterior },
    { value: car.specialsFwd },
    { value: car.specialsTransmission },
    { value: car.specialsEngine },
  ].filter(({ value }) => Boolean(value))

  if (!carSpecials.length) {
    return null
  }

  return (
    <div>
      <h3 className="text-black font-medium text-base md:text-lg mb-16 md:mb-24">What's special</h3>
      <CarInfoItemsWrapper className="xl:grid-cols-3">
        {carSpecials.map(({ value, label }) => (
          <CarInfoItem
            key={String(label) + value}
            label={label}
            value={value ?? ''}
            isCopyable
            icon={<AppIconDoubleCheckmark className="w-20 h-20 shrink-0" />}
          />
        ))}
      </CarInfoItemsWrapper>
    </div>
  )
}

export { CarDetailsSpecials }
