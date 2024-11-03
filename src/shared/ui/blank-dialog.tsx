import { AppDialog, AppDialogContent, AppDialogTitle, VisuallyHidden } from '@/shared/ui'

type TBlankDialogProps = TDialogDefaultProps

const BlankDialog = ({ children, ...props }: TBlankDialogProps) => {
  return (
    <AppDialog {...props}>
      <AppDialogContent
        aria-describedby={undefined}
        className="w-[700px]"
      >
        <VisuallyHidden>
          <AppDialogTitle />
        </VisuallyHidden>

        {children}
      </AppDialogContent>
    </AppDialog>
  )
}

export { BlankDialog, type TBlankDialogProps }
