import '../styles/index.scss'

import type { Metadata } from 'next'
import { PageLoadingProvider } from '@/shared/lib/providers'
import { ReactQueryClientProvider } from '@/core/providers'

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
        <PageLoadingProvider>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </PageLoadingProvider>
      </body>
    </html>
  )
}
