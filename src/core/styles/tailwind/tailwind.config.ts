import { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,

      fontFamily: {
        sans: 'var(--app-font)',
      },
    },
  },
}

export default config
