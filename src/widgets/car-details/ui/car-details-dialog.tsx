import { AppDialog, AppDialogContent, AppDialogTitle, AppLoading } from '@/shared/ui'
import { CarDetailsDialogHeader } from './car-details-dialog-header'
import { CarDetails } from './car-details'
import { TCarDetailsRequest } from '@/entities/car'
import { useCarDetails } from '../lib/car-details.hook'

type TCarDetailsDialogProps = { carId: TCarDetailsRequest } & DialogDefaultProps

const CarDetailsDialog = ({ closeDialog, carId, ...props }: TCarDetailsDialogProps) => {
  const { carDetails, isLoading } = useCarDetails({ carId })

  return (
    <AppDialog {...props}>
      <AppDialogContent className="max-w-[1100px] gap-0 min-h-full" withCloseButton={false} center={false}>
        <AppDialogTitle>
          <CarDetailsDialogHeader carId={carId} onGoBack={closeDialog} />
        </AppDialogTitle>

        {isLoading && <AppLoading />}

        {carDetails && <CarDetails carDetails={carDetails} />}
      </AppDialogContent>
    </AppDialog>
  )
}

export { CarDetailsDialog }
