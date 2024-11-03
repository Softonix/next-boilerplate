'use client'

import { useMediaQuery } from 'usehooks-ts'
import React from 'react'
import { usePageLoadingContext } from '@/shared/lib/contexts'
import { AppButton } from '@/shared/ui'
import { SearchBox } from '@/features/search'
import { PageWrapper } from '@/shared/ui/page-wrapper'
import { useIsElementInViewport } from '@/shared/lib/hooks'
import { SearchResult } from '@/widgets/search-result'
import { useSearchResults } from '@/widgets/search-result/lib/search-results.hook'

type TSearchResultsWithSearchBoxProps = {
  searchId: string
}

const SearchResultsWithSearchBox = ({ searchId }: TSearchResultsWithSearchBoxProps) => {
  const { setIsLoading } = usePageLoadingContext()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { searchResults, fetchPreviousResult, handleNewPropmt, hasPreviousResult } = useSearchResults({ searchId })

  const {
    ref: lastResultRef,
    setRef: setLastResultRef,
    isElementInViewport: isLastResultInViewport,
  } = useIsElementInViewport<HTMLDivElement>()

  function handlePrevSearchResult() {
    setIsLoading(true)
    return fetchPreviousResult().finally(() => setIsLoading(false))
  }

  function handleSearch(_prompt: string) {
    return handleNewPropmt(_prompt).then(() => setTimeout(scrollToLastResult))
  }

  function scrollToLastResult() {
    lastResultRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <PageWrapper
      children={searchResults.map(
        (searchResult, index) =>
          searchResult && (
            <SearchResult
              ref={(el) => {
                if (index === searchResults.length - 1) {
                  el && setLastResultRef(el)
                }
              }}
              key={searchResult?.searchResultId}
              hasPreviousHistory={hasPreviousResult}
              index={index}
              searchResult={searchResult}
              onShowPrevResult={handlePrevSearchResult}
              onSearch={handleSearch}
            />
          )
      )}
      footer={
        <div className="flex w-full gap-10 backdrop-blur sticky bottom-0 px-16 py-8 md:px-24 md:py-16">
          <SearchBox
            autoFocus
            className="flex-grow"
            onSearch={handleSearch}
          />

          {searchResults.length > 1 && !isLastResultInViewport && (
            <AppButton
              theme="outlined"
              size={isDesktop ? 'small' : 'default'}
              className="shrink-0"
              onClick={scrollToLastResult}
            >
              <AppIconArrowDownDouble className="w-20 h-20 text-black fill-current" />
            </AppButton>
          )}
        </div>
      }
    />
  )
}

export { SearchResultsWithSearchBox }
