import { searchService, useCarSearch } from '@/features/search'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { TSearchResultResponse } from './types'

export type TUseSearchResultsOptions = {
  searchId: string
}

export const useSearchResults = ({ searchId }: TUseSearchResultsOptions) => {
  const queryClient = useQueryClient()
  const startSearch = useCarSearch()
  const { getHistoryResultById } = searchService

  const queryKey = ['search-results', useRef(searchId).current]

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey,
    queryFn: fetchResults,
    initialPageParam: searchId,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastResult, _results) => getReversedHistory(_lastResult)?.[_results.length],
    select: (data) => ({
      pages: data.pages.toReversed(),
      pageParams: data.pageParams.toReversed(),
    }),
  })
  const chatId = useMemo(() => data?.pages.at(-1)?.chatId, [data])

  const handleNewPropmt = async (_prompt: string) => {
    const id = await startSearch(_prompt, { chatId, blockRedirect: true })

    if (!id) return
    const { data } = await getHistoryResultById(id)
    if (!data) return

    queryClient.setQueryData<{
      pages: TSearchResultResponse[]
      pageParams: string[]
    }>(queryKey, (_oldData) => {
      if (!_oldData) return

      return {
        pages: [data, ..._oldData.pages],
        pageParams: [data.searchResultId, ..._oldData.pageParams],
      }
    })

    window.history.replaceState(null, '', data.searchResultId)
  }

  function fetchResults({ pageParam }: { pageParam: string }) {
    return getHistoryResultById(pageParam).then(({ data }) => data)
  }

  function getReversedHistory(_searchResult: TOptional<TSearchResultResponse>) {
    return _searchResult?.searchResultIds?.toReversed()
  }

  return {
    searchResults: data?.pages ?? [],
    hasPreviousResult: hasNextPage,
    fetchPreviousResult: fetchNextPage,
    handleNewPropmt,
  }
}
