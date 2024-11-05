import { PageLoadingContext } from './providers'
import { useContextValue } from './utils'

export const usePageLoadingContext = () => useContextValue({ PageLoadingContext })
