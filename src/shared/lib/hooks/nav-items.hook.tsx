import { useAuthContext } from '../contexts'

export type NavItem = {
  name: string
  path: string
  icon: React.ReactNode
  show: boolean
  isActive?: boolean
  isPingIndicator?: boolean
}

export const useNavItems = () => {
  const pathname = usePathname()
  const { isAuthenticated } = useAuthContext()

  const navList: NavItem[] = [
    {
      name: 'Home',
      path: '/',
      show: true,
      icon: <AppIconHome className="stroke-black" />,
    },
    {
      name: 'Messages',
      path: '/messages',
      show: isAuthenticated,
      icon: <AppIconChat className="stroke-black" />,
    },
    {
      name: 'Wishlist',
      path: '/wishlist',
      show: false,
      icon: <AppIconHeart className="stroke-black" />,
    },
    {
      name: 'Sign in',
      path: '?auth=sign-in',
      show: !isAuthenticated,
      icon: <AppIconSignIn className="stroke-black" />,
    },
    {
      name: 'UI',
      path: '/ui',
      show: true,
      icon: <AppIconEditPencil className="stroke-black" />,
    },
    {
      name: 'History',
      path: '/search/history',
      show: isAuthenticated,
      icon: <AppIconHistory className="stroke-black" />,
      isPingIndicator: true,
    },
  ]
    .filter((nav) => nav.show)
    .map((nav) => ({ ...nav, isActive: pathname === nav.path }))

  return navList
}
