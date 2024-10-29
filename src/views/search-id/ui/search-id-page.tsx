import { searchService } from '@/features/search'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { SearchResultsWithSearchBox } from './search-results-with-search-box'

type SearchIdPageProps = {
  params: {
    searchId: string
  }
}

const SearchIdPage = async ({ params: { searchId } }: SearchIdPageProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['search-results', searchId],
    queryFn: ({ pageParam }) => searchService.getHistoryResultById(pageParam).then((res) => res.data),
    initialPageParam: searchId,
  })

  return (
    <HydrationBoundary state={JSON.parse(JSON.stringify(dehydrate(queryClient)))}>
      <SearchResultsWithSearchBox searchId={searchId} />
    </HydrationBoundary>
  )
}

export { SearchIdPage }
