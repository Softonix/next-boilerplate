import { useAuthContext } from '@/shared/lib/contexts'
import { AppButton } from '@/shared/ui'
import React from 'react'

type ProfileAvatarProps = {
  saveButtonVisible: boolean
  saveButtonDisabled: boolean
}

const ProfileAvatar = ({ saveButtonDisabled, saveButtonVisible }: ProfileAvatarProps) => {
  const { user } = useAuthContext()

  const userNameAbbreviation = useMemo(() => {
    return user?.name
      .split(' ')
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
  }, [user])

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-24 lg:gap-32 -mt-[60px] mb-32">
      <div
        className="w-[96px] h-[96px] md:min-w-[120px] md:h-[120px] lg:min-w-[148px] lg:h-[148px]
              rounded-full bg-regular flex justify-center items-center"
      >
        {user?.name ? (
          <span className="text-2xl md:text-4xl lg:text-5xl">{userNameAbbreviation}</span>
        ) : (
          <AppIconUserPlaceholder v-else className="w-40 h-40 md:w-[60px] md:h-[60px]" />
        )}
      </div>

      <div className="w-full md:flex md:justify-between md:gap-x-16 lg:mt-30">
        <div>
          <h2 className="text-black font-semibold text-xl lg:text-2xl mb-4 max-w-[250px] truncate">
            {user?.name || 'User name'}
          </h2>

          <h3 className="text-sm mb-16 lg:mb-0">{user?.email}</h3>
        </div>

        {saveButtonVisible && (
          <AppButton className="shrink-0 max-h-40" disabled={saveButtonDisabled} form="personal-details-form">
            Save changes
          </AppButton>
        )}
      </div>
    </div>
  )
}

export { ProfileAvatar }
