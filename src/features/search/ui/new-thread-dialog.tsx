'use client'

import { AppDialog, AppDialogContent, AppDialogTitle } from '@/shared/ui'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { SearchBox } from './search-box'

type TNewThreadDialogProps = DialogDefaultProps

const NewThreadDialog = ({ closeDialog, ...props }: TNewThreadDialogProps) => {
  return (
    <AppDialog {...props}>
      <AppDialogContent aria-describedby={undefined} className="max-w-[800px] w-full">
        <VisuallyHidden>
          <AppDialogTitle />
        </VisuallyHidden>

        <div className="relative">
          <p className="mb-20 text-[18px]">New thread</p>

          <SearchBox onSearch={closeDialog} />
        </div>
      </AppDialogContent>
    </AppDialog>
  )
}

export { NewThreadDialog, type TNewThreadDialogProps }
