import { authService } from '@/shared/auth'
import { TCarDetailsRequest } from './schema'

export const carDetailsService = (() => {
  async function getCarDetails(carId: TCarDetailsRequest) {
    const endpoint = (await authService.verifySession()) ? '/api/car/{carId}/' : '/api/public/car/{carId}/'

    return client.GET(endpoint, { params: { path: { carId } } })
  }

  return {
    getCarDetails,
  }
})()
