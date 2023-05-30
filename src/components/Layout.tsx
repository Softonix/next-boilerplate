type LayoutProps = {
  children: React.ReactNode
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <AntLayout>
      <Header />
      <div className='min-h-screen flex-grow bg-gray-100 pb-10'>{children}</div>
    </AntLayout>
  )
}

export default Layout
