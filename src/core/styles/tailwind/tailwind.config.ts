import { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

const spacing = Array.from({ length: 51 }, (_, i) => i).reduce(
  (prev, current) => ({ ...prev, [current]: `${current}px` }),
  {}
)

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

      spacing,

      fontFamily: {
        sans: 'var(--app-font)',
      },

      fontSize: {
        sm: '14px',
        base: '16px',
        '5xl': '2.5rem',
      },

      lineHeight: {
        default: '1.3',
      },

      // shadcn/ui
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'scale-in': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [
    // shadcn/ui
    require('tailwindcss-animate'),
  ],
}

export default config
