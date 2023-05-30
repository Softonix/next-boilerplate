export default function Home () {
  const router = useRouter()
  const { status } = useSession()

  const isAuthenticated = status === 'authenticated'

  return (
    <>
      <Layout>
        <NextHead>
          <title>To do list</title>
        </NextHead>
        {isAuthenticated && (
          <div className='my-5 mx-[100px]'>
            <AntButton
              type='primary'
              onClick={() => router.push('to-do-list/create')}
            >
              Create Task
            </AntButton>
            <TaskList />
          </div>
        )}
      </Layout>
    </>
  )
}
