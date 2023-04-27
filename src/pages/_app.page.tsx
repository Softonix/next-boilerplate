import '@/assets/styles/main.scss'
import 'public/antd.min.css'
import { ThemeProvider } from 'config/theme'

import { trpc } from 'config/trpc/trpc-hook'

function App ({ Component, pageProps }: NextAppProps) {
  return ThemeProvider(<Component {...pageProps} />)
}

export default trpc.withTRPC(App)
