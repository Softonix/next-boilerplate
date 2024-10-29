import { CarInfoItem, CarInfoItemsWrapper, TCarDetailsResponse } from '@/entities/car'
import { AppSeparator } from '@/shared/ui'

type TCarDetailsHistoryProps = {
  car: TCarDetailsResponse
}

const CarDetailsHistory = ({ car }: TCarDetailsHistoryProps) => {
  const reportName = getVehicleHistoryReportName(car.vhrUrl)

  const carHistory = [
    { text: car.historyOwners ? 'One Owner' : 'Multiple Owners', value: true },
    { text: '1+ Accidents', value: car.historyAccidents },
    { text: 'Clean title', value: car.historyCleanTitle },
    { text: 'Personal Use', value: car.historyPersonalUse },
  ].filter(({ value }) => Boolean(value))

  function isValidUrl(url: string | null | undefined) {
    try {
      const { protocol } = new URL(url ?? '')

      return protocol === 'http:' || protocol === 'https:'
    } catch {
      return false
    }
  }

  function getVehicleHistoryReportName(url: string | null | undefined) {
    if (!isValidUrl(url)) {
      return
    }

    const match = url?.match(/(carfax|autocheck)/gim)

    if (!match || match.length === 0) {
      return
    }

    const str = match[0]

    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  if (!carHistory.length) {
    return null
  }

  return (
    <div>
      <AppSeparator className="mt-24 mb-32 md:my-24" />

      <h3 className="text-black font-medium text-base md:text-lg mb-16 md:mb-24">Vehicle History</h3>

      <CarInfoItemsWrapper className="xl:grid-cols-3">
        {carHistory.map(({ text }) => (
          <CarInfoItem
            key={text}
            value={text}
            icon={<AppIconCheckmarkInCircle className="w-20 h-20 shrink-0" />}
          />
        ))}
      </CarInfoItemsWrapper>

      {reportName && car.vhrUrl && (
        <a
          href={car.vhrUrl}
          target="_blank"
          className="flex items-center gap-x-5 underline mt-16"
        >
          Save 20% on the full {reportName} vehicle history report
          <AppIconArrowUpRight className="w-16 h-16" />
        </a>
      )}
    </div>
  )
}

export { CarDetailsHistory }
