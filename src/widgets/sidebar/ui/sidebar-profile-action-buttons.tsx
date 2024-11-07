import { authService } from '@/shared/auth'
import { useAuthContext } from '@/shared/lib/contexts'
import { AppButton, AppSeparator } from '@/shared/ui'

type TSidebarProfileActionButtonsProps = { isSidebarOpened: boolean }

const SidebarProfileActionButtons = ({ isSidebarOpened }: TSidebarProfileActionButtonsProps) => {
  const { user } = useAuthContext()

  return (
    <div className={cn('flex items-center mt-auto', isSidebarOpened ? 'justify-between' : 'flex-col-reverse')}>
      <AppButton
        size="small"
        className={cn('justify-start flex-grow ', {
          'md:hover:bg-transparent': !isSidebarOpened,
          '-ml-8 px-8': isSidebarOpened,
        })}
        theme="transparent"
        tag="Link"
        href="/profile-settings"
      >
        <div
          className={cn(
            'rounded-full bg-regular flex items-center justify-center text-xs',
            isSidebarOpened ? 'w-32 h-32' : 'w-48 h-48'
          )}
        >
          <AppIconUserPlaceholder className={cn(isSidebarOpened ? 'w-20 h-20' : 'w-28 h-28', 'text-regular')} />
        </div>

        <p
          className={cn('ml-8 text-sm text-black max-w-[140px] truncate capitalize', {
            hidden: !isSidebarOpened,
          })}
        >
          {user?.name ?? 'Profile'}
        </p>
      </AppButton>

      {!isSidebarOpened && <AppSeparator className="my-12" />}

      <AppButton
        theme="transparent"
        size={isSidebarOpened ? 'small' : 'default'}
        onClick={authService.handleSignOut}
      >
        <AppIconSignOut className="cursor-pointer" />
      </AppButton>
    </div>
  )
}

export { SidebarProfileActionButtons }
