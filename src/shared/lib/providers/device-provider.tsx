'use client'

type TDeviceProviderProps = {
  deviceFlags: ReturnType<(typeof import('@/shared/lib/utils/server'))['getDeviceFlags']>
} & TChildrenProps

type TDeviceContextValue = {
  isMobile: boolean
  isDesktopOrTablet: boolean
}

const DeviceContext = createContext<TDeviceContextValue | null>(null)

const DeviceProvider = ({ children, deviceFlags }: TDeviceProviderProps) => {
  return <DeviceContext.Provider value={deviceFlags}>{children}</DeviceContext.Provider>
}

export { DeviceProvider, DeviceContext, type TDeviceContextValue }
