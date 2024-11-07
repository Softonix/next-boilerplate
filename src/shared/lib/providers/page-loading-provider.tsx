'use client'

type TPageLoadingProviderProps = TChildrenProps
type TPageLoadingContextValue = {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const PageLoadingContext = createContext<TPageLoadingContextValue | null>(null)

const PageLoadingProvider = ({ children }: TPageLoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <PageLoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PageLoadingContext.Provider>
  )
}

export { PageLoadingProvider, PageLoadingContext }
