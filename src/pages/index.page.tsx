import { useSession } from 'next-auth/react'

export default function Home () {
  const router = useRouter()
  const { status } = useSession()

  const isAuthenticated = status === 'authenticated'

  return (
    <>
      <Layout>
        <NextHead>
          <title>test head</title>
        </NextHead>
        {isAuthenticated && (
          <>
            <NextLink href='/example-page'>To Example Page</NextLink>
            <AntButton
              type='primary'
              className='ml-4'
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
      </Layout>
    </>
  )
}
