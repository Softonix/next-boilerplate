import { SearchPrompt } from '@/entities/search'
import { useDialogContext } from '@/shared/lib/contexts'

export type SearchPromptListProps = {
  prompts: string[]
  onSearch?: (prompt: string) => unknown
} & ChildrenProps<'children', { prompt: string }> &
  ClassProps

const SearchPromptList = ({ prompts, children, onSearch, className }: SearchPromptListProps) => {
  const { openDialog } = useDialogContext()

  const handleSearch = (prompt: string) => {
    if (!hasGeoCookiesSet()) {
      openDialog('zip-code-dialog', {
        onZipCodeSaved: () => onSearch?.(prompt),
      })
    } else {
      onSearch?.(prompt)
    }
  }

  return (
    <ul className={cn('space-y-8 md:space-y-16', className)}>
      {prompts.map((_prompt) => (
        <SearchPrompt
          key={_prompt}
          prompt={_prompt}
          onClick={() => handleSearch(_prompt)}
          renderPrompt={children ? (prompt) => children({ prompt }) : undefined}
        />
      ))}
    </ul>
  )
}

export { SearchPromptList }
