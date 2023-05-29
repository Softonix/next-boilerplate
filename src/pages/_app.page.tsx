import '@/assets/styles/main.scss'
import 'public/antd.min.css'
import { ThemeProvider } from 'config/theme'
import { trpc } from 'config/trpc/trpc-hook'
import { SessionProvider } from 'next-auth/react'
import { TodoContextProvider } from '@/context/TodoContext'

function App ({
  Component,
  pageProps: { session, ...pageProps }
}: NextAppProps) {
  return ThemeProvider(
    <SessionProvider session={session}>
      <TodoContextProvider>
        <Component {...pageProps} />
      </TodoContextProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
