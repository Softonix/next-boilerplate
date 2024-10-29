import '../styles/index.scss'

import type { Metadata } from 'next'
import { defaultAppFont } from '@/shared/lib/constants'
import { ConfigureAmplifyClientSide, configureAmplifyServerSide } from '@/shared/config/auth'
import NextTopLoader from 'nextjs-toploader'
import { appColors } from '@/core/styles/tailwind/app.colors'
import { AuthProvider, DeviceProvider, DialogContextProvider, PageLoadingProvider } from '@/shared/lib/providers'
import { GlobalAntConfigProvider, ReactQueryClientProvider } from '@/core/providers'
import { RegisterToaster } from '@/shared/ui/toaster'
import { authService } from '@/shared/auth'
import { SidebarContextProvider } from '@/widgets/sidebar'

export const metadata: Metadata = {
  title: 'CarScout - Home Page',
}

configureAmplifyServerSide()

export async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isDesktopOrTablet } = getDeviceFlags()

  const isAuthenticated = await authService.verifySession()

  const user = isAuthenticated ? await authService.fetchUserAttrs() : null

  return (
    <html lang="en">
      <body
        className={cn(`h-screen overflow-hidden ${defaultAppFont.variable} font-sans`, {
          'bg-secondary': isDesktopOrTablet,
        })}
      >
        <NextTopLoader color={appColors.primary} showSpinner={false} />

        {/* This icon is important to always be present in the DOM to source gradient for all other icons */}

        <AppIconGradientGeneric className="w-0 h-0" />

        <ConfigureAmplifyClientSide />

        <RegisterToaster />

        <PageLoadingProvider>
          <AuthProvider defaultUser={user}>
            <DeviceProvider deviceFlags={getDeviceFlags()}>
              <ReactQueryClientProvider>
                <DialogContextProvider>
                  <GlobalAntConfigProvider>
                    <SidebarContextProvider>{children}</SidebarContextProvider>
                  </GlobalAntConfigProvider>
                </DialogContextProvider>
              </ReactQueryClientProvider>
            </DeviceProvider>
          </AuthProvider>
        </PageLoadingProvider>
      </body>
    </html>
  )
}
