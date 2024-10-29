import { authService } from '@/shared/auth'
import {
  TChatNewPromptRequest,
  TSearchChatCreateRequest,
  TSearchChatDeleteRequest,
  TSearchResultRequest,
} from './schema'

export const searchService = (() => {
  async function createSearchChat(message: TSearchChatCreateRequest) {
    const endpoint = (await authService.verifySession()) ? '/api/search-chat/' : '/api/public/search-chat/'
    return client.POST(endpoint, { body: { message } })
  }

  async function getSearchResultById(searchResultId: TSearchResultRequest) {
    const endpoint = (await authService.verifySession())
      ? '/api/search-result/{searchResultId}/'
      : '/api/public/search-result/{searchResultId}/'

    return client.GET(endpoint, { params: { path: { searchResultId } } })
  }

  async function getHistoryResultById(searchResultId: TSearchResultRequest) {
    const endpoint = (await authService.verifySession())
      ? '/api/search-result/history/{searchResultId}'
      : '/api/public/search-result/history/{searchResultId}'

    return client.GET(endpoint, { params: { path: { searchResultId } } })
  }

  async function addNewPromptToChat({ chatId, message }: TChatNewPromptRequest) {
    const endpoint = (await authService.verifySession())
      ? '/api/search-chat/{chatId}/message'
      : '/api/public/search-chat/{chatId}/message'

    return client.POST(endpoint, {
      body: { message },
      params: { path: { chatId } },
    })
  }

  function addToWishlist(id: number) {
    console.log('addToWishlist', id)
    return wait(500)
  }

  async function removeFromWishlist(id: number) {
    console.log('removeFromWishlist', id)
    return wait(500)
  }

  function getSearchChats({ signal }: Signal = {}) {
    return client.GET('/api/search-chat/', { signal })
  }

  async function deleteSearchChat(data: TSearchChatDeleteRequest) {
    return client.DELETE('/api/search-chat/{chatId}/', {
      params: { path: { chatId: data.chatId } },
    })
  }

  return {
    createSearchChat,
    getSearchResultById,
    getHistoryResultById,
    addNewPromptToChat,
    addToWishlist,
    removeFromWishlist,
    getSearchChats,
    deleteSearchChat,
  }
})()
