const Registration = () => {
  const { data: sessionData } = useSession()
  const [user, setUser] = useState<PrismaUser>()
  const [isLoading, setLoading] = useState(false)

  const router = useRouter()
  const updateUser = trpc.updateUser.useMutation()

  const userFromDb = trpc.getUserById.useQuery(sessionData?.user.id)

  useEffect(() => {
    if (userFromDb && userFromDb.data !== user) {
      setLoading(true)
      setUser(userFromDb?.data)
    } else {
      setLoading(false)
    }
  }, [userFromDb, user])

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
        {user && !isLoading && (
          <RegistrationForm onSubmit={handleRegistration} userFromDb={user} />
        )}
      </div>
    </Layout>
  )
}

export default Registration
