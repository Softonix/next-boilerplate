import { AppButton } from '@/shared/ui'

type SidebarMainLogoProps = {
  isSidebarOpened: boolean
  onArrowIconClick: () => void
}

const SidebarMainLogo = ({ isSidebarOpened, onArrowIconClick }: SidebarMainLogoProps) => {
  return (
    <div className={cn('flex items-center justify-between mb-24', isSidebarOpened ? 'gap-x-8' : 'flex-col')}>
      <NextLink href="/" className="flex shrink-0">
        <NextImage
          src="/images/full-logo-2.png"
          width={143}
          height={36}
          alt="car-scout-logo"
          className={cn({ hidden: !isSidebarOpened })}
        />
        <NextImage
          src="/images/small-logo.png"
          height={36}
          width={36}
          alt="car-scout-logo"
          className={cn({ hidden: isSidebarOpened })}
        />
      </NextLink>

      <AppButton
        className={cn({ 'mt-32 w-32 h-32 !p-0': !isSidebarOpened })}
        theme={isSidebarOpened ? 'secondary' : 'outlined'}
        variant={isSidebarOpened ? 'compact' : undefined}
        onClick={onArrowIconClick}
      >
        <AppIconDoubleArrow className={cn('text-black', { 'rotate-180': !isSidebarOpened })} />
      </AppButton>
    </div>
  )
}

export { SidebarMainLogo }
