'use client'

import { TAuthType } from '@/shared/types'

const AuthSwithTypeButtons = () => {
  const pathname = usePathname()
  const authType = useSearchParams()?.get('auth') as TAuthType

  switch (authType) {
    case 'sign-up':
      return (
        <div className="text-center mt-16">
          Already a member?{' '}
          <NextLink href={`${pathname}?auth=sign-in`} replace className="cursor-pointer underline text-black">
            LOG IN
          </NextLink>
        </div>
      )

    case 'sign-in':
      return (
        <div className="text-center mt-16">
          Don't have an account yet?{' '}
          <NextLink href={`${pathname}?auth=sign-up`} replace className="cursor-pointer underline text-black">
            SIGN UP
          </NextLink>
        </div>
      )

    default:
      return null
  }
}

export { AuthSwithTypeButtons }
