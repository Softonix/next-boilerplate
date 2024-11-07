import { useQuery } from '@tanstack/react-query'

import { carDetailsService, TCarDetailsRequest } from '@/entities/car'

export const useCarDetails = ({ carId }: { carId: TCarDetailsRequest }) => {
  const queryKey = ['car-details', carId]

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => carDetailsService.getCarDetails(carId),
    refetchOnWindowFocus: false,
  })

  return { carDetails: data?.data?.car, isLoading }
}
