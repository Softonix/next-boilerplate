'use client'

import { searchTemplates } from '@/shared/lib/constants'
import { SearchPromptList, SearchQuest, TQuestType } from '@/entities/search'
import { useMediaQuery } from 'usehooks-ts'
import { useDeviceContext } from '@/shared/lib/contexts'
import { useCarSearch } from '@/features/search'

const SearchTemplates = () => {
  const { isDesktopOrTablet } = useDeviceContext()

  const isDesktop = useMediaQuery('(min-width: 1024px)', {
    defaultValue: isDesktopOrTablet,
    initializeWithValue: false,
  })

  const startSearch = useCarSearch()

  const searchQuestTabRefs = useRef<(HTMLDivElement | null)[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<TQuestType>('mySearch')
  const [isPromptsHidden, setIsPromptsHidden] = useState(!isDesktop)
  const [promptsOrder, setPromptsOrder] = useState('order-none')

  const selectedTemplatePrompts = searchTemplates[selectedTemplate].prompts

  const handleSearchQuestClick = useCallback(
    (key: TQuestType, index: number) => {
      if (!isDesktop) {
        if (selectedTemplate === key) {
          setIsPromptsHidden((prev) => !prev)
        } else {
          setIsPromptsHidden(false)
          changePromptsOrder(key)

          setTimeout(() =>
            searchQuestTabRefs.current[index]?.scrollIntoView({
              behavior: 'smooth',
            })
          )
        }
      }
      setSelectedTemplate(key)
    },
    [selectedTemplate, isDesktop]
  )

  const changePromptsOrder = (_key: TQuestType) => {
    setPromptsOrder(_key === 'mySearch' ? 'order-none' : _key === 'myChosenCar' ? 'order-2' : 'order-3')
  }

  return (
    <>
      <h2 className="text-center md:text-xl text-black font-semibold mb-20 md:mb-24">Try some of these searches:</h2>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 md:gap-16">
        {Object.entries(searchTemplates).map(([templateKey, { title, subtitle }], idx) => {
          return (
            <SearchQuest
              key={templateKey}
              ref={(el) => {
                searchQuestTabRefs.current[idx] = el
              }}
              quest={{
                title,
                subtitle,
                active: selectedTemplate === templateKey,
              }}
              className={cn(['basis-[30%]', { 'order-1': templateKey === 'myChosenCar' }], 'lg:order-none')}
              onClick={() => handleSearchQuestClick(templateKey as keyof typeof searchTemplates, idx)}
              icon={<AppIconDoubleStars className="min-w-25 h-25 icon-gradient" />}
            />
          )
        })}

        <SearchPromptList
          prompts={selectedTemplatePrompts}
          className={cn(`lg:columns-2 lg:mt-24 ${promptsOrder} lg:order-none`, [{ hidden: isPromptsHidden }])}
          onSearch={startSearch}
        />
      </div>
    </>
  )
}

export { SearchTemplates }
