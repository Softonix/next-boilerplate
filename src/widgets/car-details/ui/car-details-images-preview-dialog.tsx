import { TCarDetailsResponse } from '@/entities/car'
import { AppDialog, AppDialogContent, AppDialogTitle, VisuallyHidden } from '@/shared/ui'

type TCarDetailsImagesPreviewDialogProps = {
  images: TCarDetailsResponse['images']
} & TDialogDefaultProps

const CarDetailsImagesPreviewDialog = ({ images, closeDialog, ...props }: TCarDetailsImagesPreviewDialogProps) => {
  return (
    <AppDialog {...props}>
      <AppDialogContent
        className="max-w-[800px] min-h-full"
        center={false}
        onClick={closeDialog}
      >
        <VisuallyHidden>
          <AppDialogTitle />
        </VisuallyHidden>

        <div className="relative">
          {images?.map((image) => {
            return (
              <NextImage
                className="rounded-lg mb-15"
                src={image}
                key={image}
                alt="Car image"
                height={570}
                width={800}
              />
            )
          })}
        </div>
      </AppDialogContent>
    </AppDialog>
  )
}

export { CarDetailsImagesPreviewDialog }
