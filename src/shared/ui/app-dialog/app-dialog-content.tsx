import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { AppDialogOverlay, AppDialogPortal } from '.'
import { AppDialogClose } from './app-dialog-close'
import { useDialogInstanceContext } from '@/shared/lib/contexts'

type TAppDialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  withCloseButton?: boolean
  center?: boolean
}

const AppDialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, TAppDialogContentProps>(
  ({ className, children, withCloseButton = true, center = true, ...props }, ref) => {
    const { closeDialog } = useDialogInstanceContext()
    return (
      <AppDialogPortal>
        <AppDialogOverlay
          className={cn({
            'grid place-items-center': center,
          })}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeDialog?.()
          }}
        >
          <DialogPrimitive.Content
            ref={ref}
            className={cn(
              'relative overflow-hidden z-50 w-full max-w-lg overflow-y-auto mx-auto',
              'gap-16 border bg-background text-sm text-regular-foreground p-20 shadow-lg duration-200 data-[state=open]:animate-in',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'md:rounded-2xl rounded-lg',
              { 'pt-40': withCloseButton },
              className
            )}
            onInteractOutside={(e) => e.preventDefault()}
            {...props}
          >
            {children}
            <AppDialogClose visible={withCloseButton} />
          </DialogPrimitive.Content>
        </AppDialogOverlay>
      </AppDialogPortal>
    )
  }
)

AppDialogContent.displayName = DialogPrimitive.Content.displayName

export { AppDialogContent, type TAppDialogContentProps }
