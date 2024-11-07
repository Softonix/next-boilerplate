import { toasterService } from '@/shared/ui/toaster'
import { ReactNode } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

type TCarDetailsInfoItemProps = {
  value: string
  icon?: ReactNode
  showTooltip?: boolean
  isCopyable?: boolean
  label?: string
  tooltipValue?: string
}

const CarInfoItem = ({
  value,
  isCopyable,
  label,
  showTooltip,
  tooltipValue,
  icon,
}: TCarDetailsInfoItemProps) => {
  const [, copy] = useCopyToClipboard()

  const text = label ? `${label} ${value}` : value
  const tooltipContent = tooltipValue || value

  const copyToClipboard = async () => {
    try {
      await copy(tooltipValue || value)

      toasterService.success('Copied to clipboard!')
    } catch {
      toasterService.error('Error copying the text!')
    }
  }

  return (
    <div className="inline-flex items-center gap-x-12 bg-white text-default text-nowrap border border-regular-light font-normal px-16 py-5 rounded-lg">
      {icon}

      <div className="w-full flex justify-between items-center gap-x-8 group truncate">
        <AntTooltip title={showTooltip ? tooltipContent : ''}>
          <span className="text-sm truncate">{text}</span>
        </AntTooltip>

        {isCopyable && (
          <AppIconCopyToClipboard
            className="w-15 h-17 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity shrink-0 cursor-pointer"
            click="copyToClipboard"
            onClick={copyToClipboard}
          />
        )}
      </div>
    </div>
  )
}

export { CarInfoItem }
