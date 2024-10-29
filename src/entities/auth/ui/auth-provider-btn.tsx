import { ReactNode } from 'react'

import { AppButton } from '@/shared/ui'

type TAuthProviderBtnProps = {
  onClick: () => void
  icon: ReactNode
  label: string
} & ClassProps

export const AuthProviderBtn = ({ onClick, icon, label, className }: TAuthProviderBtnProps) => {
  return (
    <AppButton theme="secondary" className={cn('w-full', className)} onClick={onClick}>
      <div className="flex items-center">
        {icon}
        <p>{label}</p>
      </div>
    </AppButton>
  )
}
