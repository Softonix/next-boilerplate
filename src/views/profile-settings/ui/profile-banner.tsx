const ProfileBanner = () => {
  return (
    <div className="relative h-[150px]">
      <NextImage
        src="/images/profile-page-banner-bg.png"
        fill
        className="object-cover h-[150px]"
        alt="profile-page-banner"
      />
    </div>
  )
}

export { ProfileBanner }
