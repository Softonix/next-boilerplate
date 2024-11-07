import { authService } from '@/shared/auth'

type TUseMagicLinkOptions = {
  isAuthenticated: boolean
  afterSignIn: () => unknown
}

export const useMagicLink = ({ afterSignIn, isAuthenticated }: TUseMagicLinkOptions) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const token: TOptional<string> = searchParams?.get('token')
    const email: TOptional<string> = searchParams?.get('email')
    if (token && email && !isAuthenticated) {
      authService
        .handleSignIn(token, email)
        .then(afterSignIn)
        .then(() => router.replace('/'))
    }
  }, [])
}
