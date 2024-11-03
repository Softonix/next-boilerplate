'use client'

import { TSearchQuest } from '../lib/types'

type TSearchQuestProps = {
  quest: TSearchQuest
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & TChildrenProps &
  TChildrenProps<'icon'> &
  TClassProps

const SearchQuest = forwardRef<HTMLDivElement, TSearchQuestProps>(
  ({ children, quest, icon, className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'lime-hover-effect rounded-2xl border px-24 py-16 cursor-pointer flex gap-x-12 grow',
          quest.active ? 'bg-lime-50 border-lime-150' : 'bg-white border-regular-light',
          className
        )}
        onClick={onClick}
      >
        {icon}

        {children ?? (
          <div className="space-y-4">
            <h4 className="text-black font-medium text-sm md:text-base">{quest.title}</h4>
            <p
              v-if="quest.subtitle"
              className="text-xs md:text-sm"
            >
              {quest.subtitle}
            </p>
          </div>
        )}
      </div>
    )
  }
)

export { SearchQuest }
