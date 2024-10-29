'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type ReactQueryClientProviderProps = {} & ChildrenProps

function ReactQueryClientProvider({ children }: ReactQueryClientProviderProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  )
}

export { ReactQueryClientProvider }
