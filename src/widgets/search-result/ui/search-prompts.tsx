import { SearchPrompt } from '@/entities/search'
import { useDialogContext } from '@/shared/lib/contexts'

export type TSearchPromptsProps = {
  prompts: string[]
  onSearch?: (prompt: string) => unknown
} & TChildrenProps<'children', { prompt: string }> &
  TClassProps

const SearchPrompts = ({ prompts, children, onSearch, className }: TSearchPromptsProps) => {
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

export { SearchPrompts }
