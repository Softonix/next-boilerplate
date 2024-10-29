'use client'

type PageLoadingProviderProps = ChildrenProps
type PageLoadingContextValue = {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const PageLoadingContext = createContext<PageLoadingContextValue | null>(null)

const PageLoadingProvider = ({ children }: PageLoadingProviderProps) => {
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
