import { searchService } from '@/features/search'
import { useAuthContext } from '@/shared/lib/contexts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { TSearchChats, TSearchChatsMap } from '../api/schema'
import { dayjsService } from '@/shared/lib/services'

export const useSearchHistory = () => {
  const { isAuthenticated } = useAuthContext()
  const queryKey = ['search-history']
  const queryClient = useQueryClient()
  const { getSearchChats, deleteSearchChat } = searchService

  const { data: searchHistory } = useQuery({
    queryKey,
    queryFn: fetchSeachHistory,
    initialData: new Map() as TSearchChatsMap,
    enabled: isAuthenticated,
  })

  const isSearchHistoryAvailable = !!searchHistory.size
  const groupedSearchHistory = useMemo(() => groupSearchHistoryByDate(searchHistory), [searchHistory])

  const { mutateAsync: deleteHistoryChat } = useMutation({
    mutationFn: (chatId: string) => {
      return deleteSearchChat({ chatId })
    },
    onMutate: async (chatId: string) => {
      await queryClient.cancelQueries({ queryKey })
      const previousHistory = queryClient.getQueryData(queryKey)
      queryClient.setQueryData<TSearchChatsMap>(queryKey, (old) => (old?.delete(chatId), new Map(old)))
      return { previousHistory }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(queryKey, context?.previousHistory)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  function fetchSeachHistory({ signal }: Signal) {
    return getSearchChats({ signal }).then(({ data }) => {
      const map: TSearchChatsMap = new Map()
      data?.forEach((chat) => {
        map.set(chat.id, chat)
      })
      return map
    })
  }

  function updateSearchHistory({ chatId, searchResultId }: { chatId: string; searchResultId?: string }) {
    queryClient.setQueryData<TSearchChatsMap>(queryKey, (_oldData) => {
      if (!_oldData) return
      const chat = searchHistory.get(chatId)
      if (chat) {
        chat.latestSearchResultId = searchResultId
        chat.updatedAt = dayjsService().toISOString()
      }
      return new Map(_oldData)
    })
  }

  return {
    groupedSearchHistory,
    isSearchHistoryAvailable,
    deleteHistoryChat,
    getSearchChats,
    updateSearchHistory,
  }
}

function groupSearchHistoryByDate(_chatMap: TSearchChatsMap): Record<string, TSearchChats> {
  const CHATS_LIMIT = 200 // TODO Set limit on backend or add virtual scrolling

  const chats = Array.from(_chatMap.values())
    .slice(0, CHATS_LIMIT)
    .sort((a, b) => dayjsService(b.updatedAt).diff(dayjsService(a.updatedAt)))

  return chats.reduce(
    (groups, chat) => {
      const isToday = dayjsService(chat.updatedAt).isToday()
      const isYesterday = dayjsService(chat.updatedAt).isYesterday()
      const isLastWeek = dayjsService(chat.updatedAt).isBetween(
        dayjsService().subtract(1, 'week'),
        dayjsService(),
        'day',
        '[]'
      )

      if (chat.latestSearchResultId) {
        if (isToday) {
          groups.today = [...(groups.today || []), chat]
        } else if (isYesterday) {
          groups.yesterday = [...(groups.yesterday || []), chat]
        } else if (isLastWeek) {
          groups['previous 7 days'] = [...(groups['previous 7 days'] || []), chat]
        } else {
          groups.older = [...(groups.older || []), chat]
        }
      }

      return groups
    },
    {} as Record<string, TSearchChats>
  )
}
