'use client'

import { usePageLoadingContext } from '@/shared/lib/contexts'
import { AppLoading } from '@/shared/ui'

type PageWrapperProps = {
  classNames?: {
    root?: import('clsx').ClassValue
    children?: import('clsx').ClassValue
  }
} & ChildrenProps &
  ChildrenProps<'footer'> &
  ChildrenProps<'header'>

const PageWrapper = ({ classNames, header, children, footer }: PageWrapperProps) => {
  const { isLoading } = usePageLoadingContext()

  return (
    <div className={cn('relative flex flex-col h-full', classNames?.root)}>
      {isLoading && <AppLoading />}

      {header}

      <div className={cn('p-16 md:p-24 flex-grow', [{ 'overflow-hidden': isLoading }, classNames?.children])}>
        {children}
      </div>

      {footer}
    </div>
  )
}

export { PageWrapper }
