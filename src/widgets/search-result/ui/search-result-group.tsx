import { TCarDetailsResponse } from '@/entities/car'
import { SearchResultCar } from './search-result-car'

type SearchResultGroupProps = {
  title: string | number
  cars: TCarDetailsResponse[]
}

const SearchResultGroup = ({ title, cars }: SearchResultGroupProps) => {
  const PAGINATION_STEP = 15
  const [carsListLimit, setCarsListLimit] = useState(0)
  const carsListForGrid = cars.slice(0, PAGINATION_STEP + carsListLimit)

  return (
    <>
      <h5 className="text-black text-lg font-medium">
        {title}

        <span className="mx-4 px-8 py-4 bg-primary/10 rounded-full text-primary text-sm font-medium">
          {cars.length} results
        </span>
      </h5>

      {!!carsListForGrid.length && (
        <div className="grid grid-search-cars-container gap-8 mt-12 sm:gap-12 md:gap-16 lg:gap-y-24">
          {carsListForGrid.map((car) => (
            <SearchResultCar
              key={car.id}
              car={car}
            />
          ))}

          {carsListForGrid.length < cars.length && (
            <button
              className="bg-regular-light md:bg-white md:hover:bg-regular-light
        min-w-[110px] min-h-[144px] md:min-h-[210px]
        text-xs text-default md:text-lg font-medium rounded-xl
        shadow content-center px-12 py-8 md:px-12 md:py-16 duration-200"
              onClick={() => setCarsListLimit((prev) => prev + PAGINATION_STEP)}
            >
              Loading next +{PAGINATION_STEP}
            </button>
          )}
        </div>
      )}
    </>
  )
}

export { SearchResultGroup }
