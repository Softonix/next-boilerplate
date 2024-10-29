'use client'

import Cookies from 'js-cookie'

import { googlemapsService } from '@/shared/lib/services'
import { GEO_COOKIE_KEYS } from '@/shared/lib/constants'
import { IGeoCoordinates } from '../model/types'

const cookiesOptions: Cookies.CookieAttributes = {
  expires: 30,
  sameSite: 'None',
  secure: true,
}

export function useGeolocation() {
  const [geoCookieLat, setGeoCookieLat] = useState<string | null>(Cookies.get(GEO_COOKIE_KEYS.GEO_LOCATION_LAT) || null)
  const [geoCookieLong, setGeoCookieLong] = useState<string | null>(
    Cookies.get(GEO_COOKIE_KEYS.GEO_LOCATION_LONG) || null
  )
  const [zipCodeCookie, setZipCodeCookieState] = useState<string | null>(Cookies.get(GEO_COOKIE_KEYS.ZIP_CODE) || null)

  const setGeoCookies = useCallback(({ latitude, longitude }: IGeoCoordinates) => {
    setGeoCookieLat(String(latitude))
    setGeoCookieLong(String(longitude))

    Cookies.set(GEO_COOKIE_KEYS.GEO_LOCATION_LAT, String(latitude), cookiesOptions)
    Cookies.set(GEO_COOKIE_KEYS.GEO_LOCATION_LONG, String(longitude), cookiesOptions)
  }, [])

  const setZipCodeCookie = useCallback((zipCode: string) => {
    setZipCodeCookieState(zipCode)

    Cookies.set(GEO_COOKIE_KEYS.ZIP_CODE, zipCode, cookiesOptions)
  }, [])

  const getDistance = useCallback(
    (coords: IGeoCoordinates) => {
      if (geoCookieLat && geoCookieLong) {
        const toRadians = (degree: number) => degree * (Math.PI / 180)

        const R = 6371 // Radius of the Earth in kilometers
        const dLat = toRadians(coords.latitude - Number(geoCookieLat))
        const dLon = toRadians(coords.longitude - Number(geoCookieLong))
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(Number(geoCookieLat))) *
            Math.cos(toRadians(coords.latitude)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        const distance = R * c // Distance in kilometers
        const conversionFactor = 0.621371 // Kilometers to miles conversion factor

        return Math.round(distance * conversionFactor) // Distance in miles
      }

      return null
    },
    [geoCookieLat, geoCookieLong]
  )

  const getCoordinatesFromZipCode = useCallback(
    async (zip: string) => {
      setZipCodeCookie(zip)

      try {
        const library = await googlemapsService.importLibrary('geocoding')
        const geocoder = new library.Geocoder()

        return geocoder.geocode({ address: zip, componentRestrictions: { country: 'US' } }, (res, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            if (
              res &&
              typeof res[0].geometry.location.lat === 'function' &&
              typeof res[0].geometry.location.lng === 'function'
            ) {
              setGeoCookies({
                latitude: res[0].geometry.location.lat(),
                longitude: res[0].geometry.location.lng(),
              })
            }
          } else {
            throw new Error(status)
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    [setGeoCookies, setZipCodeCookie]
  )

  return {
    geoCookieLat,
    geoCookieLong,
    zipCodeCookie,
    setGeoCookies,
    getDistance,
    getCoordinatesFromZipCode,
  }
}
