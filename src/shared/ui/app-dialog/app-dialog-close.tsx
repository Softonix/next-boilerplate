import React from 'react'
import { Close } from '@radix-ui/react-dialog'

type TAppDialogCloseProps = { visible?: boolean }

const AppDialogClose = ({ visible = true }: TAppDialogCloseProps) => {
  return (
    visible && (
      <Close className="absolute right-16 top-16 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-30 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <AppIconCross className="h-16 w-16 stroke-0" />
        <span className="sr-only">Close</span>
      </Close>
    )
  )
}

AppDialogClose.displayName = Close.displayName

export { AppDialogClose }
