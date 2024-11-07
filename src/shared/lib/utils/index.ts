import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Cookies from 'js-cookie'
import { GEO_COOKIE_KEYS } from '../constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

export function wait(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export function formatCurrency(price: number, options: Intl.NumberFormatOptions = {}) {
  options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    ...options,
  }
  return new Intl.NumberFormat('en-US', options).format(price)
}

export function splitStringByUppercase(string: string) {
  const capitalizeFirstLetter = string.charAt(0).toUpperCase() + string.slice(1)
  return capitalizeFirstLetter.split(/(?=[A-Z])/).join(' ')
}

export function hasGeoCookiesSet() {
  return Cookies.get(GEO_COOKIE_KEYS.GEO_LOCATION_LAT) || Cookies.get(GEO_COOKIE_KEYS.ZIP_CODE)
}
