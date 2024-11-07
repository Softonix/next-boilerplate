import markdownit from 'markdown-it'
import { useMediaQuery } from 'usehooks-ts'
import { toasterService } from '@/shared/ui/toaster'
import { AppButton, AppSeparator } from '@/shared/ui'
import { SearchResultRelatedPrompts } from './search-result-related-prompts'
import { GroupedSearchResult } from './group-search-result'
import { TSearchResultResponse } from '../lib/types'

export type TSearchResultProps = {
  searchResult: TSearchResultResponse
  index: number
  hasPreviousHistory: boolean
  onShowPrevResult: () => unknown
  onSearch: (prompt: string) => unknown
}

const SearchResult = forwardRef<HTMLDivElement, TSearchResultProps>(
  ({ index, searchResult, hasPreviousHistory, onShowPrevResult, onSearch }, ref) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    const responseMessage = useMemo(() => {
      const md = markdownit()
      return md.render(searchResult?.responseMessage ?? '')
    }, [searchResult?.responseMessage])

    const copyToClipboard = useCallback(() => {
      toasterService.success('Page link copied to clipboard!!')
    }, [])

    return (
      <div
        id={searchResult.searchResultId}
        ref={ref}
      >
        {index !== 0 && <AppSeparator className="mb-16 md:mb-20 mt-50" />}

        <div className="flex justify-between items-center gap-12 mb-16 lg:my-0 ">
          <h3 className="text-black font-medium text-xl lg:text-2xl">{searchResult.requestMessage}</h3>

          <div className="flex gap-10 items-center shrink-0">
            {hasPreviousHistory && index === 0 && (
              <AppButton
                theme={isDesktop ? 'outlined' : 'secondary'}
                size={isDesktop ? 'small' : 'default'}
                onClick={onShowPrevResult}
              >
                <div className="flex items-center">
                  <AppIconArrow className="w-16 h-16 lg:w-12 lg:h-12 rotate-90" />

                  {isDesktop && <p className="ml-10">Show Previous Search</p>}
                </div>
              </AppButton>
            )}

            <AppButton
              theme={isDesktop ? 'outlined' : 'secondary'}
              size={isDesktop ? 'small' : 'default'}
              onClick={copyToClipboard}
            >
              <AppIconShare className="w-16 h-16" />
            </AppButton>
          </div>
        </div>

        <AppSeparator className="mb-16 lg:mt-20 lg:mb-32" />

        <div>
          <h4 className="flex items-center gap-x-8 mb-16">
            <AppIconDoubleStars className="icon-gradient w-20 h-20" />
            <span className="font-medium text-black">Answer</span>
          </h4>

          {responseMessage && (
            <div
              className="markdown break-words"
              dangerouslySetInnerHTML={{ __html: responseMessage }}
            />
          )}
        </div>

        {Object.keys(searchResult?.groupedCars ?? {}).length > 0 && (
          <>
            <AppSeparator className="mt-24 mb-32 lg:mt-32 lg:mb-40" />
            <GroupedSearchResult groupedCars={searchResult.groupedCars} />
          </>
        )}

        {searchResult.followUpQuestions?.length && (
          <SearchResultRelatedPrompts
            followUpQuestions={searchResult.followUpQuestions}
            onSearch={onSearch}
          />
        )}
      </div>
    )
  }
)

export { SearchResult }
