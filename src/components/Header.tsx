const Header = () => {
  const router = useRouter()
  const { status } = useSession()

  const isAuthenticated = status === 'authenticated'

  return (
    <header className='flex items-center bg-gray-200 p-4'>
      {isAuthenticated && (
        <>
          <AntButton
            type='primary'
            onClick={() => router.push('/example-page')}
          >
              To ExamplePage
          </AntButton>
          <AntButton
            type='primary'
            className='ml-4'
            onClick={() => router.push('/react-autoimports')}
          >
              To ReactHooksPage{' '}
          </AntButton>
          <AntButton
            type='primary'
            className='ml-4'
            onClick={() => router.push('/to-do-list')}
          >
              To Todo list{' '}
          </AntButton>
        </>
      )}
      <AuthShowcase className="ml-auto" />
    </header>
  )
}

export default Header
