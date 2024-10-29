'use client'

import { Fragment } from 'react'

import { AppButton, AppPingIndicator } from '@/shared/ui'
import { useNavItems } from '@/shared/lib/hooks'
import { useAuthDialog } from '@/widgets/auth-dialog'

const MobileFooter = () => {
  const navList = useNavItems()

  useAuthDialog()

  return (
    <footer className="flex justify-center">
      {navList.map(({ icon, name, path, isActive, isPingIndicator }) => (
        <Fragment key={name}>
          <AppButton
            className={cn('flex flex-col gap-y-6 grow !rounded-none', [
              isActive ? 'border-t-2 border-default' : 'border-t border-regular-light',
            ])}
            tag="Link"
            theme="transparent"
            href={path}
          >
            <div className={cn({ relative: true }, 'flex justify-center w-full')}>
              {icon}
              {isPingIndicator && <AppPingIndicator className="absolute top-0 right-10" />}
            </div>

            <span className="text-black shrink-0">{name}</span>
          </AppButton>
        </Fragment>
      ))}
    </footer>
  )
}

export { MobileFooter }
