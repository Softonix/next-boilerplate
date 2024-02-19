'use client'
const AuthShowcase: React.FC<{ className: string }> = (props) => {
  // const { data: sessionData } = useSession()
  const sessionData = null
  const { className = '' } = props

  const router = useRouter()
  function signIn () {
    if (sessionData) {
      console.log('sign out')
      router.push('/logout')
    } else {
      router.push('/auth/login')
      console.log('sign in')
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {sessionData?.user?.image && (
        <Link href='/registration'>
          <NextImage
            src={sessionData.user.image}
            alt='User profile'
            className='mr-4 rounded-full'
            width={32}
            height={32}
          />
        </Link>
      )}
      <Button
        onClick={() => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </Button>
    </div>
  )
}

export default AuthShowcase
