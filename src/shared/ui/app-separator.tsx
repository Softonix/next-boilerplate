'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

type AppSeparatorProps = { label?: string } & React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>

const AppSeparator = forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, AppSeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = true, label, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'relative shrink-0 bg-border my-16 lg:mt-32 lg:mb-24',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    >
      {label ? (
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs rounded-full bg-white px-10 text-gray-400">
          {label}
        </span>
      ) : undefined}
    </SeparatorPrimitive.Root>
  )
)
AppSeparator.displayName = SeparatorPrimitive.Root.displayName

export { AppSeparator }
