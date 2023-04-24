import '@/assets/styles/main.scss'
import { trpc } from '../utils/trpc'

function App ({ Component, pageProps }: NextAppProps) {
  return ThemeProvider(<Component {...pageProps} />)
}

export default trpc.withTRPC(App)
