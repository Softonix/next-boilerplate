import { auth } from '@/auth'

const Profile: React.FC<{ className: string }> = async (props) => {
  const session = await auth()

  const { className = '' } = props

  return (
    <div className={className}>
      <h1 className='font-bold text-2xl mb-4'>Profile</h1>

      {session?.user && (
        <UserBadge user={session.user} />
      )}
      {JSON.stringify(session)}
    </div>
  )
}

export default Profile
