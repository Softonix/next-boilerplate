'use client'

import { useContextValue } from '@/shared/lib/contexts'

type TSidebarContextProviderProps = TChildrenProps
type TSidebarContextValue = {
  sidebarOpened: boolean
  historyVisible: boolean
  toggleSidebarVisibility: () => void
  toggleHistoryVisibility: () => void
}

const SidebarContext = createContext<TSidebarContextValue | null>(null)
const useSidebarContext = () => useContextValue({ SidebarContext })

const SidebarContextProvider = ({ children }: TSidebarContextProviderProps) => {
  const [historyVisible, setHistoryVisible] = useState(true)
  const [sidebarOpened, setSidebarOpened] = useState(true)

  function toggleSidebarVisibility() {
    setSidebarOpened((prev) => !prev)
  }

  function toggleHistoryVisibility() {
    setHistoryVisible((prev) => !prev)
  }

  return (
    <SidebarContext.Provider
      value={{
        historyVisible,
        sidebarOpened,
        toggleSidebarVisibility,
        toggleHistoryVisibility,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarContextProvider, useSidebarContext }
