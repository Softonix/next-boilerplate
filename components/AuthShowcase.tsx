import { auth } from '@/auth'

const AuthShowcase: React.FC<{ className: string }> = async (props) => {
  const session = await auth()

  const { className = '' } = props

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Link className='flex items-center space-x-2' href='/profile'>
        {session?.user?.image && (
          <NextImage
            src={session.user.image}
            alt='User profile'
            className='rounded-full'
            width={32}
            height={32}
          />
        )}

        <p>{session?.user?.name}</p>
      </Link>

      <AuthButton session={session} />
    </div>
  )
}

export default AuthShowcase
