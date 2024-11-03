'use client'

import { AppTabContent, AppTabs } from '@/shared/ui'

const UIPageLayout = ({
  formControls,
  buttons,
}: {
  formControls: React.ReactNode
  buttons: React.ReactNode
} & TChildrenProps) => {
  const tabs = [
    { tabId: 'buttons', name: 'Buttons', content: buttons },
    { tabId: 'form-controls', name: 'Form controls', content: formControls },
  ]

  return (
    <section className="p-12">
      <AppTabs
        tabs={tabs}
        className="w-[400px]"
      >
        <AppTabContent tabId="buttons">{buttons}</AppTabContent>
        <AppTabContent tabId="form-controls">{formControls}</AppTabContent>
      </AppTabs>
    </section>
  )
}

export { UIPageLayout }
