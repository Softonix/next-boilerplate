import '@/assets/styles/main.scss'

export default function App ({ Component, pageProps }: NextAppProps) {
  return ThemeProvider(<Component {...pageProps} />)
}
