'use client'

import { SearchBox } from '@/features/search'
import { PageWrapper } from '@/shared/ui'

import { H1 } from '@/shared/ui/h1'
import { SearchTemplates } from './search-templates'

export function HomePage() {
  return (
    <>
      <PageWrapper>
        <div className="max-w-[1000px] mx-auto">
          <div className="my-36 md:mb-[60px]">
            <H1>Let's find you a car today</H1>

            <SearchBox />
          </div>

          <SearchTemplates />
        </div>
      </PageWrapper>
    </>
  )
}
