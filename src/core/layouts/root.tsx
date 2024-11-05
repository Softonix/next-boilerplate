import '../styles/index.scss'

import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { appColors } from '@/core/styles/tailwind/app.colors'
import { PageLoadingProvider } from '@/shared/lib/providers'
import { GlobalAntConfigProvider, ReactQueryClientProvider } from '@/core/providers'
import { RegisterToaster } from '@/shared/ui/toaster'

export const metadata: Metadata = {
  title: 'Home Page',
}

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color={appColors.primary}
          showSpinner={false}
        />

        <RegisterToaster />

        <PageLoadingProvider>
          <ReactQueryClientProvider>
            <GlobalAntConfigProvider>{children}</GlobalAntConfigProvider>
          </ReactQueryClientProvider>
        </PageLoadingProvider>
      </body>
    </html>
  )
}
