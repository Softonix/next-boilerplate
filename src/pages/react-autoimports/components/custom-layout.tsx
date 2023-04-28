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
export const CustomLayout = ({ children }: {children: ReactNode}) => {
  const router = useRouter()
  const [current, setCurrentKey] = useState('useState')
  const items: MenuProps['items'] = [
    getItem('useState', 'useState', (e) => { router.push('use-state'); setCurrentKey(e.key) }, null),
    getItem('useContext', 'useContext', (e) => { router.push('use-context'); setCurrentKey(e.key) }, null),
    getItem('useEffect', 'useEffect', (e) => { router.push('use-effect'); setCurrentKey(e.key) }, null),
    getItem('useLayoutEffects', 'useLayoutEffects', (e) => { router.push('use-layout-effects'); setCurrentKey(e.key) }, null),
    getItem('useCallback', 'useCallback', (e) => { router.push('use-callback'); setCurrentKey(e.key) }, null),
    getItem('useMemo', 'useMemo', (e) => { router.push('use-memo'); setCurrentKey(e.key) }, null),
    getItem('useDeferredValue', 'useDeferredValue', (e) => { router.push('use-deferred-value'); setCurrentKey(e.key) }, null),
    getItem('useId', 'useId', (e) => { router.push('use-id'); setCurrentKey(e.key) }, null),
    getItem('useReducer', 'useReducer', (e) => { router.push('use-reducer'); setCurrentKey(e.key) }, null),
    getItem('useRef', 'useRef', (e) => { router.push('use-ref'); setCurrentKey(e.key) }, null),
    getItem('useTransition', 'useTransition', (e) => { router.push('use-transition'); setCurrentKey(e.key) }, null),
    getItem('forwardRef', 'forwardRef', (e) => { router.push('forward-ref'); setCurrentKey(e.key) }, null)

  ]
  return (<>
    <AntMenu items={items} selectedKeys={[current]}/>
    <div>{children}</div>
  </>)
}
