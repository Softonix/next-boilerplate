import { carDetailsService } from '@/entities/car'
import { CarDetailsPageContent } from '@/widgets/car-details'

type TCarDetailsIdPageProps = {
  params: {
    carId: string
  }
}

const CarDetailsIdPage = async ({ params: { carId } }: TCarDetailsIdPageProps) => {
  try {
    const carDetails = await carDetailsService.getCarDetails(carId)
    return <CarDetailsPageContent carDetails={carDetails.data?.car} />
  } catch {
    notFound()
  }
}

export { CarDetailsIdPage }
