import { TCarDetailsResponse } from '../api/schema'

export function processCarTitle(car: TCarDetailsResponse | null) {
  return car?.id ? `${car.year} ${car.make} ${car.model} ${car.trim ?? ''}` : 'Car title'
}

export function processCarMileage(mileage: number | null | undefined) {
  if (!mileage) return ''

  const carMileageString = mileage.toString()
  const initialValue = carMileageString.length > 3 ? carMileageString.slice(0, -3) : carMileageString

  return `${initialValue}K mi`
}
