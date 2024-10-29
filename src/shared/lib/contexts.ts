import { DeviceContext, DialogContext, PageLoadingContext, AuthContext } from './providers'
import { useContext } from 'react'
import { DialogInstanceContext } from '../ui'

export const useDialogContext = () => useContextValue({ DialogContext })
export const useAuthContext = () => useContextValue({ AuthContext })
export const useDeviceContext = () => useContextValue({ DeviceContext })
export const usePageLoadingContext = () => useContextValue({ PageLoadingContext })
export const useDialogInstanceContext = () => useContextValue({ DialogInstanceContext })

export function useContextValue<T>(objectWithContext: Record<string, React.Context<T>>) {
  const names = Object.keys(objectWithContext)
  if (names.length !== 1) throw new Error('Provide only one context')

  const contextName = names[0]

  const context = useContext(objectWithContext[contextName])

  if (!context) throw new Error(`No ${contextName}Provider found up the component tree`)
  return context
}
