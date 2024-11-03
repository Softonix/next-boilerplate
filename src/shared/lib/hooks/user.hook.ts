import { authService } from '@/shared/auth'
import { TUser } from '@/shared/types'
import { toasterService } from '@/shared/ui/toaster'
import { UpdateUserAttributesInput } from 'aws-amplify/auth'

type TUseUserHookOptions = {
  defaultUser?: TOptional<TUser>
}

export const useUser = ({ defaultUser }: TUseUserHookOptions) => {
  const [user, setUser] = useState<TOptional<TUser>>(defaultUser)
  const isAuthenticated = !!user

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

  useEffect(() => {
    getUser()
  }, [getUser])

  return {
    user,
    isAuthenticated,
    updateUser,
    getUser,
  }
}
