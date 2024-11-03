'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

type TAppDialogProps = DialogPrimitive.DialogProps
type TDialogInstanceContextValue = {
  closeDialog?: () => void
}

export const DialogInstanceContext = createContext<TNullable<TDialogInstanceContextValue>>(null)

const AppDialog = DialogPrimitive.Root
const AppDialogTrigger = DialogPrimitive.Trigger

const AppDialogPortal = DialogPrimitive.Portal

const AppDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed z-50 inset-0 p-20 overflow-y-auto bg-black/50 data-[state=open]:animate-in  data-[inte=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
AppDialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const AppDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    {...props}
  />
)
AppDialogHeader.displayName = 'AppDialogHeader'

const AppDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-8', className)}
    {...props}
  />
)
AppDialogFooter.displayName = 'AppDialogFooter'

const AppDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
AppDialogTitle.displayName = DialogPrimitive.Title.displayName

const AppDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
AppDialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  type TAppDialogProps,
  AppDialog,
  AppDialogPortal,
  AppDialogOverlay,
  AppDialogTrigger,
  AppDialogHeader,
  AppDialogFooter,
  AppDialogTitle,
  AppDialogDescription,
}
