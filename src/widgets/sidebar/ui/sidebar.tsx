'use client'

import { useAuthContext, useDialogContext } from '@/shared/lib/contexts'
import { AppButton } from '@/shared/ui'
import { useSidebarContext } from '../lib/sidebar-context-provider'
import { SidebarMainLogo } from './sidebar-main-logo'
import { SidebarNav } from './sidebar-nav'
import { NewThreadBtn } from '@/features/search'
import { SidebarProfileActionButtons } from './sidebar-profile-action-buttons'

const Sidebar = ({ children }: TChildrenProps) => {
  const { openDialog } = useDialogContext()
  const { isAuthenticated } = useAuthContext()
  const { sidebarOpened, toggleSidebarVisibility } = useSidebarContext()

  const openNewThreadDialog = () => {
    openDialog('new-thread-dialog')
  }

  return (
    <aside
      className={cn([
        'w-[64px] pt-24 pb-16 px-12 h-full border-r border-regular-light duration-200',
        'flex flex-col bg-white shrink-0',
        { 'w-[296px] px-24': sidebarOpened },
      ])}
    >
      <SidebarMainLogo
        isSidebarOpened={sidebarOpened}
        onArrowIconClick={toggleSidebarVisibility}
      />

      <div
        className={cn('flex flex-col', {
          'items-center space-y-10 px-12': !sidebarOpened,
        })}
      >
        <NewThreadBtn
          isSidebarOpened={sidebarOpened}
          onClick={openNewThreadDialog}
        />

        <SidebarNav isSidebarOpened={sidebarOpened} />

        {!isAuthenticated && sidebarOpened && (
          <AppButton
            className="flex w-full mt-24"
            tag="Link"
            replace
            href="?auth=sign-up"
          >
            <span className="shrink-0">Sign Up</span>
          </AppButton>
        )}
      </div>

      {children}

      {isAuthenticated && <SidebarProfileActionButtons isSidebarOpened={sidebarOpened} />}
    </aside>
  )
}

export { Sidebar }
