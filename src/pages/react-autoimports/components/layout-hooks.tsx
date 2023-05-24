import { MenuProps } from 'antd'
import { MenuItemType } from 'rc-menu/lib/interface'
import { ReactNode } from 'react'
function getItem (
  label: React.ReactNode,
  key: React.Key,
  onClick: (e: MenuItemType) => void,
  icon?: React.ReactNode,
  children?: MenuItemType[],
  type?: 'group'
): MenuItemType {
  return {
    key,
    onClick,
    icon,
    children,
    label,
    type
  } as MenuItemType
}

const routes: { path: string; label: string }[] = [
  { path: 'use-state', label: 'useState' },
  { path: 'use-context', label: 'useContext' },
  { path: 'use-effect', label: 'useEffect' },
  { path: 'use-layout-effects', label: 'useLayoutEffect' },
  { path: 'use-callback', label: 'useCallback' },
  { path: 'use-memo', label: 'useMemo' },
  { path: 'use-deferred-value', label: 'useDeferredValue' },
  { path: 'use-id', label: 'useId' },
  { path: 'use-reducer', label: 'useReducer' },
  { path: 'use-ref', label: 'useRef' },
  { path: 'use-transition', label: 'useTransition' },
  { path: 'forward-ref', label: 'forwardRef' }
]

export const LayoutHooks = ({ children }: { children?: ReactNode }) => {
  const router = useRouter()
  const [currentPage, setCurrentPageKey] = useState(
    router.asPath.split('react-autoimports/')[1] || ''
  )
  const items: MenuProps['items'] = routes.map((r) =>
    getItem(r.label, r.path, (e) => {
      router.push(`/react-autoimports/${e.key}`)
      setCurrentPageKey(e.key as string)
    })
  )

  return (
    <>
      <Layout>
        <AntMenu items={items} selectedKeys={[currentPage]} />
        <>{children}</>
      </Layout>
    </>
  )
}
