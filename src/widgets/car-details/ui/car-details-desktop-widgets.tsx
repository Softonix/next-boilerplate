import { TCarDetailsResponse } from '@/entities/car'
import { SearchQuest } from '@/entities/search'

type TCarDetailsDesktopWidgetsProps = {
  car: TCarDetailsResponse
}

const CarDetailsDesktopWidgets = ({}: TCarDetailsDesktopWidgetsProps) => {
  return (
    <div className="block basis-[38%] shrink-0">
      <aside className="sticky top-[5%]">
        <h3 className="font-medium text-lg text-black mb-32">Contact dealer about this car</h3>

        <SearchQuest
          quest={{ title: 'Negotiations', subtitle: 'Send a message to the dealer' }}
          icon={<AppIconChat className="w-25 h-25 icon-gradient" />}
        />
      </aside>
    </div>
  )
}

export { CarDetailsDesktopWidgets }
