import '@/assets/styles/main.scss'
import '../public/antd.min.css'
import { ThemeProvider } from '../theme'

import { trpc } from '../utils/trpc'

function App ({ Component, pageProps }: NextAppProps) {
  return ThemeProvider(<Component {...pageProps} />)
}

export default trpc.withTRPC(App)
