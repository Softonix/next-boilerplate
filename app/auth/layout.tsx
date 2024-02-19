export default function AuthLayout ({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4 max-w-xl mx-auto'>
      {children}
    </div>
  )
}
