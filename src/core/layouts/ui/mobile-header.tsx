'use client'

import { authService } from '@/shared/auth'
import { useAuthContext } from '@/shared/lib/contexts'
import { AppButton } from '@/shared/ui'

const MobileHeader = () => {
  const { isAuthenticated } = useAuthContext()
  return (
    <header className="flex justify-between items-center max-h-[64px] px-16 py-12 border-b border-regular-light">
      <NextLink href="/" className="shrink-0">
        <NextImage src="/images/full-logo-2.png" height={36} width={36} alt="main-logo" />
      </NextLink>

      {isAuthenticated ? (
        <div className="space-x-16">
          <AppButton size="small" theme="transparent" tag="Link" className="!p-0" href="/profile-settings">
            <div className="rounded-full bg-regular-light flex items-center justify-center text-xs w-32 h-32">
              <AppIconUserPlaceholder className="w-20 h-20" />
            </div>
          </AppButton>

          <AppButton size="default" theme="transparent" className="!p-0" onClick={undefined}>
            <AppIconSignOut className="cursor-pointer" onClick={authService.handleSignOut} />
          </AppButton>
        </div>
      ) : (
        <AppButton size="small" tag="Link" className="space-x-5" href="?auth=sign-up">
          <AppIconSignIn className="w-14 h-14" />

          <span className="shrink-0">Sign Up</span>
        </AppButton>
      )}
    </header>
  )
}

export { MobileHeader }
