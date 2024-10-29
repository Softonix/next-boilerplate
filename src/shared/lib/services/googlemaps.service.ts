import { Loader } from '@googlemaps/js-api-loader'

export const googlemapsService = new Loader({
  apiKey: ENV.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})
