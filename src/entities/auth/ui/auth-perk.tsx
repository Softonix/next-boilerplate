import { ReactNode } from 'react'

type TAuthPerkProps = {
  icon: ReactNode
  title: string
  description: string
  contentClassName?: string
} & TClassProps

export const AuthPerk = ({ icon, title, description, className, contentClassName }: TAuthPerkProps) => {
  return (
    <div className={cn('flex py-16 px-20 rounded-lg border border-gray-100 bg-gray-200', className)}>
      {icon}
      <div className={cn(contentClassName)}>
        <p className="font-medium text-sm text-black">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}
