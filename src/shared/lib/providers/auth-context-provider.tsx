'use client'

import { authService } from '@/shared/auth'
import { TUser } from '@/shared/types'
import { toasterService } from '@/shared/ui/toaster'
import { UpdateUserAttributesInput } from 'aws-amplify/auth'

export type AuthContextValue = {
  user: Optional<TUser>
  isAuthenticated: boolean
  getUser: () => Promise<void>
  updateUser: (user: UpdateUserAttributesInput) => Promise<unknown>
}

export const AuthContext = createContext<null | AuthContextValue>(null)

type AuthProviderProps = ChildrenProps & {
  defaultUser?: Optional<TUser>
}

const AuthProvider = ({ children, defaultUser }: AuthProviderProps) => {
  const [user, setUser] = useState<Optional<TUser>>(defaultUser)
  const isAuthenticated = !!user
  const router = useRouter()
  const searchParams = useSearchParams()

  const getUser = useCallback(async () => {
    if (!(await authService.verifySession())) return
    return authService
      .fetchUserAttrs()
      .then((user) => setUser(user))
      .catch((error) => console.error(error.message))
  }, [])

  const updateUser = useCallback(
    (_user: UpdateUserAttributesInput, message = 'User data successfully updated.') =>
      authService
        .updateUserAttributes(_user)
        .then(() => {
          setUser(
            (prev) =>
              ({
                ...prev,
                ..._user.userAttributes,
              }) as TUser
          )
        })
        .then(() => toasterService.success(message))
        .catch((err) => toasterService.error(err.message)),
    []
  )

  // magic link handler
  useEffect(() => {
    const token: Optional<string> = searchParams?.get('token')
    const email: Optional<string> = searchParams?.get('email')
    if (token && email && !isAuthenticated) {
      authService
        .handleSignIn(token, email)
        .then(getUser)
        .then(() => router.replace('/'))
    }
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        getUser,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
