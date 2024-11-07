import { AuthPerk } from '@/entities/auth'

const AuthPerks = () => {
  return (
    <>
      <AuthPerk
        className="mb-12"
        contentClassName="ml-12"
        icon={<AppIconSendAndTrack className="icon-gradient" />}
        title="Send & Track Message"
        description="Dealer chats, track anywhere."
      />
      <AuthPerk
        className="mb-12"
        contentClassName="ml-9"
        icon={<AppIconHeart className="w-25 h-21 icon-gradient fill-none" />}
        title="Save Favorites"
        description="Chat with dealers, track on any device."
      />
      <AuthPerk
        className="mb-30"
        contentClassName="ml-13"
        icon={<AppIconMagnifiedCheckmark className="icon-gradient w-21 h-21" />}
        title="More searches"
        description="Perform up to 50 searches per day"
      />
    </>
  )
}

export { AuthPerks }
