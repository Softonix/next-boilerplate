import 'server-only'

import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

export const getDeviceFlags = () => {
  const { get } = headers()
  const ua = get('user-agent')

  const device = new UAParser(ua || '').getDevice()

  const isDesktop = device.type === undefined || !['wearable', 'mobile'].includes(device.type)

  return {
    isMobile: device.type === 'mobile',
    isDesktopOrTablet: isDesktop || device.type === 'tablet',
  }
}