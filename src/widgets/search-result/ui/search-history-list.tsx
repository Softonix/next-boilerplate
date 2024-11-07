'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/shared/lib/contexts'
import { AppButton } from '@/shared/ui'
import { useSearchHistory } from '@/features/search'

const SearchHistoryList = () => {
  const pathname = usePathname()

  const { searchId: pathSearchId } = useParams()

  const router = useRouter()
  const { isAuthenticated } = useAuthContext()
  const { groupedSearchHistory, isSearchHistoryAvailable, deleteHistoryChat } = useSearchHistory()

  function deleteAndRedirect(chatId: string, latestSearchResultId: string) {
    if (pathname.startsWith('/search') && pathSearchId === latestSearchResultId) {
      router.push('/')
    }

    deleteHistoryChat(chatId)
  }
  return (
    isAuthenticated &&
    isSearchHistoryAvailable && (
      <ul className="mt-20 ml-16 -mr-24 pr-24 overflow-y-auto">
        {Object.entries(groupedSearchHistory).map(([groupName, groupSearches]) => (
          <li key={groupName}>
            <p className="capitalize font-medium text-sm md:text-xs text-gray-400 mb-10">{groupName}</p>

            <div className="mb-20 flex flex-col gap-y-8">
              {groupSearches.map(({ id, name, latestSearchResultId }) => (
                <AppButton
                  key={id}
                  size="small"
                  theme="transparent"
                  tag="Link"
                  href={`/search/${latestSearchResultId}`}
                  className={cn('justify-between group', {
                    'bg-regular': pathSearchId === latestSearchResultId,
                  })}
                >
                  <p className="truncate font-normal text-sm md:text-xs text-foreground">{name}</p>

                  <span
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      deleteAndRedirect(id, latestSearchResultId!)
                    }}
                  >
                    <AppIconTrash className="md:hidden md:group-hover:block stroke-danger-foreground w-16 h-16 shrink-0 ml-5" />
                  </span>
                </AppButton>
              ))}
            </div>
          </li>
        ))}
      </ul>
    )
  )
}

export { SearchHistoryList }
