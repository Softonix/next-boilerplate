import { usePageLoadingContext } from '@/shared/lib/contexts'
import { useQueryClient } from '@tanstack/react-query'
import { searchService } from '../api/search.service'
import { useSearchHistory } from './search-history.hook'

export const useCarSearch = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { setIsLoading } = usePageLoadingContext()
  const { createSearchChat, addNewPromptToChat } = searchService
  const { updateSearchHistory } = useSearchHistory()

  type TOptions = {
    chatId?: string
    blockRedirect?: boolean
    blockLoading?: boolean
  }

  async function sendNewSearchMessage(message: string, options?: TOptions) {
    try {
      let searchResultId: TOptional<string>

      if (!options?.blockLoading) {
        setIsLoading(true)
      }

      if (options?.chatId) {
        searchResultId = (await addNewPromptToChat({ chatId: options.chatId, message })).data?.searchResultId
        updateSearchHistory({ chatId: options.chatId, searchResultId })
      } else {
        searchResultId = (await createSearchChat(message)).data?.searchResultId
      }

      if (options?.blockRedirect) {
        return searchResultId
      }
      queryClient.invalidateQueries({ queryKey: ['search-history'] })
      router.push(`/search/${searchResultId}`)
    } finally {
      if (!options?.blockLoading) {
        setIsLoading(false)
      }
    }
  }

  return sendNewSearchMessage
}
