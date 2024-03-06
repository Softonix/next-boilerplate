'use client'

interface IProps {
  className?: string
  user: Partial<PrismaUser>
  size?: number
  showName?: boolean
}

export const UserBadge: FC<IProps> = ({ className, user, size = 32, showName }) => {
  return (
    <div className={cn('flex items-center space-x-2 border rounded-full', className)}>
      {user?.image
        ? (
          <NextImage
            src={user.image}
            alt='User profile'
            className='rounded-full'
            width={size}
            height={size}
          />
        )
        : (
          <div
            className='text-xxs font-semibold table text-center'
            style={{ width: `${size}px`, height: `${size}px` }}>

            <span className='leading-none align-middle table-cell'>
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

      {showName && <p>{user?.name}</p>}
    </div>
  )
}
