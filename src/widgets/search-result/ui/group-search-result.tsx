import { TSearchResultResponse } from '../lib/types'
import { SearchResultGroup } from './search-result-group'

type GroupedSearchResultProps = {
  groupedCars: TSearchResultResponse['groupedCars']
}

const GroupedSearchResult = ({ groupedCars }: GroupedSearchResultProps) => {
  return groupedCars?.map((cars, title) => {
    return (
      <div key={title} className="mb-35 last:mb-0">
        <SearchResultGroup title={cars.name} cars={cars.cars} />
      </div>
    )
  })
}

export { GroupedSearchResult }