import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning={true} was added to fix warning
      "Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed" comes from Grammarly
      */}
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className='relative flex flex-col min-h-screen'>
          <Provider>
            <div className='flex-grow flex-1'>
              {children}
            </div>
          </Provider>
        </main>
      </body>
    </html>
  )
}
