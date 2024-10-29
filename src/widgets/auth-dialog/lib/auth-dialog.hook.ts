import { useAuthContext, useDialogContext } from '@/shared/lib/contexts'
import { TAuthType } from '@/shared/types'

export const useAuthDialog = () => {
  const { openDialog } = useDialogContext()
  const { isAuthenticated } = useAuthContext()

  const authTypeFromParams = useSearchParams().get('auth') as TAuthType
  const [authType, setAuthType] = useState(authTypeFromParams)

  const router = useRouter()
  const pathname = usePathname()

  const openAuthDialog = useCallback(() => {
    openDialog('auth-dialog', {
      authType,
      setAuthType,
      onOpenChange: (_opened) => !_opened && router.replace(pathname),
    })
  }, [authType, openDialog, pathname])

  useEffect(() => {
    if (isAuthenticated) return
    if (authTypeFromParams) openAuthDialog()
    setAuthType(authTypeFromParams)
  }, [authTypeFromParams, isAuthenticated, openAuthDialog])
}
