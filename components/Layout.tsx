type LayoutProps = {
  children: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-0 bg-green-50'>
      <Header />
      <div className='min-h-screen flex-grow bg-gray-100 pb-10'>{children}</div>
    </div>
  )
}

export default Layout
