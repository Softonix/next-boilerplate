import type { Metadata } from 'next'
import { ExtendedSidebar } from './ui/extended-sidebar'
import { MobileHeader } from './ui/mobile-header'
import { MobileFooter } from './ui/mobile-footer'

export const metadata: Metadata = {
  title: 'CarScout - Home Page',
}

export async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isMobile } = getDeviceFlags()

  return (
    <>
      <div className={cn('h-full flex', { 'flex-col': isMobile })}>
        <ExtendedSidebar />

        {isMobile && <MobileHeader />}

        <main className="flex-grow h-full overflow-auto relative">{children}</main>

        {isMobile && <MobileFooter />}
      </div>
    </>
  )
}
