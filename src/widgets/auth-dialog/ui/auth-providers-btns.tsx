import { AuthProviderBtn } from '@/entities/auth'
import { TAuthProviders } from '@/shared/types'

type AuthProvidersBtnsProps = {
  onClick: (provider: TAuthProviders) => unknown
}

const AuthProvidersBtns = ({ onClick }: AuthProvidersBtnsProps) => {
  return (
    <>
      <AuthProviderBtn
        onClick={() => onClick('Google')}
        icon={<AppIconGoogle className="stroke-inherit mr-10" />}
        label="Continue with Google"
      />
      <AuthProviderBtn
        className="mt-12"
        onClick={() => onClick('Apple')}
        icon={<AppIconApple className="stroke-inherit mr-10" />}
        label="Continue with Apple"
      />
    </>
  )
}

export { AuthProvidersBtns }
