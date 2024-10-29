'use client'

import React from 'react'
import { useSidebarContext } from '../lib/sidebar-context-provider'
import { AppButton, AppPingIndicator } from '@/shared/ui'
import { NavItem, useNavItems } from '@/shared/lib/hooks'

type SidebarNavProps = {
  isSidebarOpened: boolean
  onToggleSearchHistory?: () => unknown
}

const SidebarNav = ({ isSidebarOpened }: SidebarNavProps) => {
  const hasUnreadMessagesFromDealer = true
  const navList = useNavItems()
  const router = useRouter()

  const { toggleHistoryVisibility } = useSidebarContext()

  function onNavMenuClick(item: NavItem) {
    const { path, isActive } = item
    if (path === '/search/history') {
      toggleHistoryVisibility()
    } else if (!isActive) {
      router.push(path)
    }
  }

  return (
    <nav>
      <ul className="space-y-10">
        {navList.map(({ icon, name, path, isActive, show }) => (
          <React.Fragment key={name}>
            <li
              className={cn('h-40 relative', {
                relative: hasUnreadMessagesFromDealer,
              })}
            >
              {name === 'Messages' && hasUnreadMessagesFromDealer ? (
                <AppPingIndicator className={cn('absolute', isSidebarOpened ? 'top-6 left-7' : 'top-3 left-3')} />
              ) : null}

              <AppButton
                className={cn('space-x-8 w-full h-full', {
                  'justify-start': isSidebarOpened,
                  'space-x-8 w-full h-full': !isSidebarOpened,
                })}
                theme="transparent"
                onClick={() => onNavMenuClick({ icon, name, path, isActive, show })}
              >
                {icon}
                {isSidebarOpened && <span className="text-black shrink-0">{name}</span>}
              </AppButton>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

export { SidebarNav }
