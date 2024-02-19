export default function DashboardLayout ({ children }: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen flex flex-col flex-1 bg-blue-50 p-4 max-w-4xl mx-auto'>
      <header className='pb-4'>Dashboard layout header</header>
      {children}
    </div>
  )
}
