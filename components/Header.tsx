const Header = () => {
  // const { status } = useSession()

  const isAuthenticated = true // status === 'authenticated'

  return (
    <header className='flex items-center bg-gray-200 p-4'>
      {isAuthenticated && (
        <>
          <Button
            variant='default'
          >
            <Link href='/'>To ExamplePage</Link>
          </Button>
          <Button
            variant='default'
            className='ml-4'
          >
              To ReactHooksPage{' '}
          </Button>
          <Button
            variant='default'
            className='ml-4'
          >
            <Link href='/tasks'>To Todo list</Link>
          </Button>
        </>
      )}
      <AuthShowcase className="ml-auto"></AuthShowcase>
    </header>
  )
}

export default Header
