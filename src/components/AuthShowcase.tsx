import { useSession } from 'next-auth/react'

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession()

  return (
    <div className='flex items-center space-x-2'>
      {sessionData?.user?.image && (
        <NextImage
          src={sessionData.user.image}
          alt='User profile'
          className='mr-4 rounded-full'
          width={32}
          height={32}
        />
      )}
      <AntButton
        type='primary'
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </AntButton>
    </div>
  )
}

export default AuthShowcase
