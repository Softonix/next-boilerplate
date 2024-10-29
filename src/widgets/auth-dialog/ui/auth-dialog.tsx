'use client'

import { TAuthType } from '@/shared/types'
import { AuthPerks } from './auth-perks'
import { AuthForm } from './auth-form'
import { AuthSwithTypeButtons } from './auth-swith-type-buttons'
import { AuthProvidersBtns } from './auth-providers-btns'
import { useDialogContext } from '@/shared/lib/contexts'
import { AppDialog, AppDialogContent, AppDialogHeader, AppDialogTitle, AppSeparator, VisuallyHidden } from '@/shared/ui'
import { authService } from '@/shared/auth'

type AuthDialogProps = {
  authType: TAuthType
  setAuthType: (newAuthType: TAuthType) => unknown
} & ChildrenProps<'trigger'> &
  DialogDefaultProps

const AuthDialog = ({ authType, closeDialog, ...props }: AuthDialogProps) => {
  const { openDialog } = useDialogContext()
  const router = useRouter()

  return (
    <AppDialog {...props}>
      <AppDialogContent aria-describedby={undefined} className="max-w-[430px]">
        <VisuallyHidden>
          <AppDialogTitle />
        </VisuallyHidden>

        <div className="relative">
          <div className="text-center mb-20">
            <p className="text-gradient text-4xl mb-10">Welcome</p>
            <p>Sign in or sign up to continue</p>
          </div>

          <AuthPerks />

          <AuthProvidersBtns onClick={authService.signInWithProvider} />

          <AppSeparator label="or" className="my-25" />

          <AuthForm
            type={authType}
            onSubmit={() => {
              closeDialog?.()
              router.replace('/')
              openDialog('blank-dialog', {
                children: (
                  <>
                    <AppDialogHeader className="text-lg">Success</AppDialogHeader>
                    <p>Login instructions have been sent to your email</p>
                  </>
                ),
              })
            }}
          />

          <AuthSwithTypeButtons />
        </div>
      </AppDialogContent>
    </AppDialog>
  )
}

export { AuthDialog, type AuthDialogProps }
