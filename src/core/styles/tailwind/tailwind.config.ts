import { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors,

      fontFamily: {
        sans: 'var(--app-font)',
      },
    },
  },
}

export default config
