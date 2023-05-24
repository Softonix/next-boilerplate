import '@/assets/styles/main.scss'
import 'public/antd.min.css'
import { ThemeProvider } from 'config/theme'

import { trpc } from 'config/trpc/trpc-hook'
import { SessionProvider } from 'next-auth/react'

function App ({
  Component,
  pageProps: { session, ...pageProps }
}: NextAppProps) {
  return ThemeProvider(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
