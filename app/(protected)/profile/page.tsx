import { auth } from '@/auth'

const Profile: React.FC<{ className: string }> = async (props) => {
  const session = await auth()

  const { className = '' } = props

  return (
    <div className={className}>
      <h1 className='font-bold text-2xl mb-4'>Profile</h1>

      <div className='flex items-center space-x-2'>
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
      </div>
    </div>
  )
}

export default Profile
