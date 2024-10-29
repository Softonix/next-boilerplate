import { AppButton } from '@/shared/ui'
import { toasterService } from '@/shared/ui/toaster'
import { useCopyToClipboard } from 'usehooks-ts'

type CarDetailsDialogHeaderProps = {
  onGoBack?: () => unknown
  carId: string
}

const CarDetailsDialogHeader = ({ carId, onGoBack }: CarDetailsDialogHeaderProps) => {
  const [, copy] = useCopyToClipboard()

  const copyCarDetailsURL = () =>
    copy(`${location.origin}/car-details/${carId}`).then(
      (_copied) => _copied && toasterService.success('Page link copied to clipboard!')
    )

  return (
    <div className="flex items-center justify-between mb-16 md:mb-24">
      <div
        className="cursor-pointer flex items-center md:-ml-8"
        onClick={onGoBack}
      >
        <AppButton
          theme="transparent"
          variant="compact"
        >
          <AppIconArrow className="w-18 h-18 md:w-16 md:h-16" />
        </AppButton>
        <span className="font-medium text-sm md:text-base ml-5">Go back</span>
      </div>

      <div>
        <AppButton
          theme="secondary"
          onClick={copyCarDetailsURL}
        >
          <AppIconShare className="w-16 h-16 md:w-12 md:h-12" />
          <span className="text-black text-sm md:text-xs">Share</span>
        </AppButton>
      </div>
    </div>
  )
}

export { CarDetailsDialogHeader }
