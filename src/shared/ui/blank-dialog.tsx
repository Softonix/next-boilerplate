import { AppDialog, AppDialogContent, AppDialogTitle, VisuallyHidden } from '@/shared/ui'

type BlankDialogProps = DialogDefaultProps

const BlankDialog = ({ children, ...props }: BlankDialogProps) => {
  return (
    <AppDialog {...props}>
      <AppDialogContent aria-describedby={undefined} className="w-[700px]">
        <VisuallyHidden>
          <AppDialogTitle />
        </VisuallyHidden>

        {children}
      </AppDialogContent>
    </AppDialog>
  )
}

export { BlankDialog, type BlankDialogProps }
