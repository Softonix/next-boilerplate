'use client'

import { PageWrapper } from '@/shared/ui'
import { CarDetailsDialogHeader } from './car-details-dialog-header'
import { CarDetails } from './car-details'
import { TCarDetailsResponse } from '@/entities/car'

type CarDetailsPageContentProps = {
  carDetails: Optional<TCarDetailsResponse>
}

const CarDetailsPageContent = ({ carDetails }: CarDetailsPageContentProps) => {
  const router = useRouter()
  return (
    <PageWrapper classNames={{ root: 'max-w-[1400px] mx-auto' }}>
      {carDetails && (
        <>
          <CarDetailsDialogHeader carId={carDetails.id} onGoBack={router.back} />
          <CarDetails carDetails={carDetails} />
        </>
      )}
    </PageWrapper>
  )
}

export { CarDetailsPageContent }
