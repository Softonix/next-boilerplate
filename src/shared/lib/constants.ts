import { Poppins } from 'next/font/google'

// 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
export const defaultAppFont = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--app-font',
})
