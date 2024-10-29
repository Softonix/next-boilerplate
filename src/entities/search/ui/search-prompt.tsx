import { ReactNode } from 'react'

type SearchPromptProps = {
  prompt: string
  onClick: () => void
  icon?: ReactNode
  renderPrompt?: (prompt: string) => ReactNode
} & ClassProps

const SearchPrompt = ({ prompt, onClick, renderPrompt, className, icon }: SearchPromptProps) => {
  return (
    <li
      className={cn(
        'lg:break-inside-avoid rounded-2xl bg-white border border-regular-light px-24 py-16 text-sm md:text-base cursor-pointer flex gap-x-12 justify-between items-center hover:bg-lime-50 hover:border-lime-150 transition-colors duration-200 w-full',
        className
      )}
      onClick={onClick}
    >
      {renderPrompt ? renderPrompt(prompt) : prompt}

      {icon ?? <AppIconArrowUpRight className="min-w-20" />}
    </li>
  )
}

export { SearchPrompt }
