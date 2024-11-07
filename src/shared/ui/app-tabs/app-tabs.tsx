'use client'

import { AppSeparator } from '../app-separator'

type TAppTab = { tabId: string; name: string }

type TAppTabsProps = {
  defaultKey?: string
  tabs?: TAppTab[]
  onChange?: (newTabKey: TAppTab['tabId']) => unknown
} & TChildrenProps &
  TClassProps

type TAppTabsContextValue = {
  activeTabId: TOptional<TAppTab['tabId']>
}

const AppTabsContext = createContext<TNullable<TAppTabsContextValue>>(null)

const AppTabs = ({ defaultKey, tabs, children, className, onChange }: TAppTabsProps) => {
  const [activeTabId, setActiveTabId] = useState<TOptional<TAppTab['tabId']>>(() => defaultKey || tabs?.at(0)?.tabId)

  const activeTabIndex = useMemo(() => tabs?.findIndex((_tab) => _tab.tabId === activeTabId) ?? 0, [tabs, activeTabId])

  function onTabClick(newTab: TAppTab['tabId']) {
    setActiveTabId(newTab)
    onChange?.(newTab)
  }
  if (!tabs) return null

  return (
    <>
      <AppTabsContext.Provider value={{ activeTabId }}>
        <div
          style={{
            '--app-tab-width': '170px',
            '--app-tab-count': tabs.length,
            '--app-active-tab-index': activeTabIndex,
            '--app-active-tab-runner-width': 'calc(100% / var(--app-tab-count))',
            maxWidth: 'calc(var(--app-tab-width) * var(--app-tab-count))',
            gridTemplateColumns: 'repeat(var(--app-tab-count), minmax(0, 1fr))',
          }}
          className={cn([
            'grid overflow-hidden isolate bg-regular p-4 rounded-lg gap-6 relative text-xs font-medium',
            'after:absolute after:scale-x-[0.94] after:scale-y-[0.8] after:inset-0 after:bg-white after:rounded-[inherit] after:-z-[1]',
            'after:ml-[calc(var(--app-active-tab-index)_*_var(--app-active-tab-runner-width))]',
            'after:w-[var(--app-active-tab-runner-width)] after:transition-[margin-left] after:duration-300',
            className,
          ])}
        >
          {tabs.map(({ name, tabId }) => (
            <button
              key={tabId}
              className={cn('py-8', { 'text-black': activeTabId === tabId })}
              onClick={() => onTabClick(tabId)}
            >
              {name}
            </button>
          ))}
        </div>

        <AppSeparator />

        {children}
      </AppTabsContext.Provider>
    </>
  )
}

type TAppTabContentProps = { tabId: TAppTab['tabId'] } & TChildrenProps

function AppTabContent({ tabId, children }: TAppTabContentProps) {
  const context = useContext(AppTabsContext)
  if (!context) throw new Error('AppTabContent must be used within AppTabs')
  if (tabId === context.activeTabId) return children
  else return null
}

export { AppTabs, AppTabContent, type TAppTab }
