import NextImage from 'next/image'

import { useDeviceContext, useDialogContext } from '@/shared/lib/contexts'
import { TCarDetailsResponse } from '@/entities/car'

type TCarDetailsImagesPreviewProps = {
  images: TCarDetailsResponse['images']
}

const CarDetailsImagesPreview = ({ images }: TCarDetailsImagesPreviewProps) => {
  const { isMobile } = useDeviceContext()
  const { openDialog } = useDialogContext()

  const IMAGES_PREVIEW_LIMIT = 5

  const imagesPreviewList = useMemo(() => {
    if (!images?.length) {
      return ['']
    }

    return images.slice(0, IMAGES_PREVIEW_LIMIT)
  }, [images])

  return (
    <div className={cn('-mx-16 md:-mx-24 lg:mx-0 mb-24', { relative: isMobile })}>
      {isMobile ? (
        <button
          type="button"
          aria-label={`Click to view all ${images?.length} photos`}
          onClick={() => openDialog('car-details-images-preview-dialog', { images })}
        >
          <NextImage
            className="rounded-lg"
            src={images?.[0] ?? '/images/car-placeholder.png'}
            alt="Car image"
            height={350}
            width={630}
          />
        </button>
      ) : (
        <div className="grid grid-cols-10 grid-rows-2 gap-16 h-[352px]">
          {imagesPreviewList.map((image, index) => {
            return (
              <button
                type="button"
                aria-label={`Click to view all ${images?.length} photos`}
                className={cn('cursor-pointer relative', {
                  'col-span-6 row-span-2': index === 0,
                  'col-span-2 row-span-1': index !== 0,
                })}
                key={image}
                onClick={() => openDialog('car-details-images-preview-dialog', { images })}
              >
                <NextImage
                  className="rounded-lg"
                  src={image}
                  alt="Car image"
                  fill
                  style={{ objectFit: 'cover' }}
                />

                {index === imagesPreviewList.length - 1 && imagesPreviewList.length > 1 && (
                  <div className="absolute inset-0 flex justify-center items-center bg-gray-600 bg-opacity-60 rounded-lg">
                    <p className="text-white font-medium text-base text-center">Show all {images?.length} photos</p>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      )}

      {images?.length && isMobile && (
        <div className="absolute right-16 bottom-16 w-40 h-28 rounded-lg bg-black bg-opacity-50 flex justify-center items-center">
          <span className="text-white text-xs font-medium">1 / {images?.length}</span>
        </div>
      )}
    </div>
  )
}

export { CarDetailsImagesPreview }
