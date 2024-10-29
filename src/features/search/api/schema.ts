export type TSearchChatCreateRequest = TRequestBody<'/api/search-chat/', 'post'>['message']

export type TSearchResultRequest = TRequestParameters<
  '/api/search-result/{searchResultId}/',
  'get'
>['path']['searchResultId']

export type TChatNewPromptRequest = {
  chatId: TRequestParameters<'/api/search-chat/{chatId}/message', 'post'>['path']['chatId']
  message: TRequestBody<'/api/search-chat/{chatId}/message', 'post'>['message']
}

export type TSearchChatDeleteRequest = TRequestParameters<'/api/search-chat/{chatId}/', 'delete'>['path']

export type TSearchChats = TResponse<'/api/search-chat/', 'get'>

export type TSearchChatsMap = Map<string, TSearchChats[number]>
