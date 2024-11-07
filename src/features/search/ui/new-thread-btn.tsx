import { AppButton } from '@/shared/ui'

type TSidebarNewThreadBtnProps = {
  isSidebarOpened: boolean
  onClick?: () => void
}

const NewThreadBtn = ({ isSidebarOpened, onClick }: TSidebarNewThreadBtnProps) => {
  return (
    <AppButton
      theme={isSidebarOpened ? 'outlined' : 'transparent'}
      className={cn('gap-x-8 border-b-0', {
        'w-full shadow justify-start py-6 pr-6 pl-12 mb-24 hover:opacity-100 hover:shadow-md active:bg-white':
          isSidebarOpened,
        'justify-center w-40 h-40 p-0': !isSidebarOpened,
      })}
      onClick={onClick}
    >
      <AppIconSearch className={isSidebarOpened ? 'text-foreground' : 'text-black'} />

      {isSidebarOpened && (
        <div className="flex items-center justify-between w-full">
          <span className="shrink-0 text-xs text-foreground">New thread</span>

          <div className="flex justify-center items-center gap-x-4 w-35 h-27 rounded px-0 bg-secondary shadow">
            <AppIconMacCommand className="text-black" />
            <span className="text-black">K</span>
          </div>
        </div>
      )}
    </AppButton>
  )
}

export { NewThreadBtn }
