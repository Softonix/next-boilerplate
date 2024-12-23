'use client'

import { SearchHistoryList } from '@/features/search'
import { useDeviceContext } from '@/shared/lib/contexts'
import { useAuthDialog } from '@/widgets/auth-dialog'
import { Sidebar, useSidebarContext } from '@/widgets/sidebar'
import React from 'react'

type TExtendedSidebarProps = {} & TChildrenProps

const ExtendedSidebar = ({}: TExtendedSidebarProps) => {
  useAuthDialog()
  const { isDesktopOrTablet } = useDeviceContext()
  const { historyVisible, sidebarOpened } = useSidebarContext()
  return isDesktopOrTablet && <Sidebar>{sidebarOpened && historyVisible && <SearchHistoryList />}</Sidebar>
}

export { ExtendedSidebar }
