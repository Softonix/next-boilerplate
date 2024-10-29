import { AppSeparator } from '@/shared/ui'
import { SearchPromptsProps } from './search-prompts'
import { SearchPromptList } from '@/entities/search'

type SearchResultRelatedPromptsProps = {
  followUpQuestions: any
  onSearch?: SearchPromptsProps['onSearch']
}

const SearchResultRelatedPrompts = ({ onSearch, followUpQuestions }: SearchResultRelatedPromptsProps) => {
  return (
    <>
      <AppSeparator className="my-24 lg:my-32" />

      <div className="flex items-center gap-x-8 mb-16">
        <AppIconLayers className="icon-gradient w-20 h-20" />
        <span className="font-medium text-black">Related</span>
      </div>

      <SearchPromptList className="lg:columns-2" prompts={followUpQuestions} onSearch={onSearch}>
        {({ prompt }) => <span className="truncate">{prompt}</span>}
      </SearchPromptList>
    </>
  )
}

export { SearchResultRelatedPrompts }