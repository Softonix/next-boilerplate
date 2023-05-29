import { trpc } from 'config/trpc/trpc-hook'

const Registration = () => {
  const { data: sessionData } = useSession()

  const router = useRouter()
  const updateUser = trpc.updateUser.useMutation()

  useEffect(() => {
    if (!sessionData) {
      router.push('/')
    }
  })

  const handleRegistration = (
    nickname: string,
    phone: string,
    city: string
  ) => {
    try {
      updateUser.mutateAsync({
        nickname,
        phone,
        city
      })

      router.push('/')
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <Layout>
      <div className='flex min-h-[500px] items-center justify-center overflow-x-hidden'>
        <RegistrationForm onSubmit={handleRegistration} />
      </div>
    </Layout>
  )
}

export default Registration
