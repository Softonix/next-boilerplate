'use client'

import { Fragment } from 'react'
import { capitalize, groupBy } from 'lodash-es'

import { toasterService } from '@/shared/ui/toaster'
import { AppButton, AppButtonProps, AppSection } from '@/shared/ui'

const ButtonsDisplay = () => {
  function generateButtonCombinations() {
    const types = ['primary', 'secondary', 'danger', 'outlined', 'transparent'] as const
    const sizes = ['small', 'default'] as const
    const variants = [undefined, 'compact', 'circle'] as const

    const combinations: Pick<AppButtonProps<'button'>, 'theme' | 'size' | 'variant'>[] = []

    variants.forEach((variant) => {
      types.forEach((theme) => {
        if (!variant) {
          sizes.forEach((size) => {
            if (!variant) combinations.push({ theme, size, variant })
          })
        } else {
          combinations.push({ theme, size: 'default', variant })
        }
      })
    })

    return combinations
  }

  const buttonsConfig = groupBy(generateButtonCombinations(), 'variant')
  return (
    <>
      <AppSection title="Buttons" gradientTitle>
        {Object.entries(buttonsConfig).map(([variant, buttons]) => (
          <Fragment key={variant}>
            <p className="text-xl italic px-5 pb-8 mb-10 border-b-[1px] border-slate-300">
              {variant === 'undefined' ? 'Regular' : capitalize(variant)}
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-20">
              {buttons.map((b) => (
                <AppButton key={b.toString()} {...b} className={cn({ 'mr-20': b.size === 'default' })}>
                  {b.variant ? <AppIconChat width="12" /> : 'Click'}
                </AppButton>
              ))}
            </div>
          </Fragment>
        ))}
      </AppSection>

      <AppSection title="Toasts" gradientTitle>
        <div className="flex gap-x-10">
          <AppButton theme="primary" onClick={() => toasterService.success('Success')}>
            Success
          </AppButton>

          <AppButton theme="secondary" onClick={() => toasterService.info('Info')}>
            Info
          </AppButton>

          <AppButton theme="outlined" onClick={() => toasterService.warning('Warning')}>
            Warning
          </AppButton>

          <AppButton theme="danger" onClick={() => toasterService.error('Erroneous error')}>
            Error
          </AppButton>
        </div>
      </AppSection>
    </>
  )
}

export { ButtonsDisplay }
