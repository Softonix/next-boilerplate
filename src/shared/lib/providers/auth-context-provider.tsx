'use client'

import { TUser } from '@/shared/types'
import { UpdateUserAttributesInput } from 'aws-amplify/auth'
import { useMagicLink, useUser } from '../hooks'

export type TAuthContextValue = {
  user: TOptional<TUser>
  isAuthenticated: boolean
  getUser: () => Promise<void>
  updateUser: (user: UpdateUserAttributesInput) => Promise<unknown>
}

export const AuthContext = createContext<null | TAuthContextValue>(null)

type TAuthProviderProps = TChildrenProps & {
  defaultUser?: TOptional<TUser>
}

const AuthProvider = ({ children, defaultUser }: TAuthProviderProps) => {
  const { user, isAuthenticated, updateUser, getUser } = useUser({ defaultUser })
  useMagicLink({ isAuthenticated, afterSignIn: getUser })

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
