import { createElement } from 'react'
import Link from 'next/link'

import { TAppButtonProps, TAppButtonTag } from './app-button.props'

export function AppButton<Tag extends TAppButtonTag = 'button'>({
  children,
  className,
  variant,
  tag,
  size = 'default',
  theme = 'primary',
  ...props
}: TAppButtonProps<Tag>) {
  const parsedTag = tag ?? 'button'

  const classes = cn(generateButtonStyles({ variant, theme, size }), className)

  return createElement(
    (parsedTag === 'Link' ? Link : parsedTag) as any,
    {
      className: classes,
      ...props,
    },
    children
  )
}

const generateButtonStyles = <Tag extends TAppButtonTag = 'button'>({ size, theme, variant }: TAppButtonProps<Tag>) => {
  return cn([
    'select-none rounded-lg px-16 font-medium transition duration-300',
    'inline-flex items-center justify-center gap-x-4',
    'disabled:cursor-not-allowed outline-none',
    {
      'py-8 text-xs': size === 'small', // is-small
      'py-11 text-sm': size === 'default', // is-default

      'bg-primary text-white md:[&:enabled:active]:opacity-80 [&:enabled:active]:bg-primary-active md:[&:enabled:active]:opacity-100 disabled:opacity-40':
        theme === 'primary', // is-primary
      'bg-regular text-regular-foreground md:[&:enabled:hover]:opacity-80 [&:enabled:active]:bg-[#EAECEF] md:[&:enabled:active]:opacity-100 disabled:opacity-40 disabled:border disabled:border-gray-400':
        theme === 'secondary', // is-secondary
      'bg-danger text-danger-foreground md:[&:enabled:active]:opacity-80 [&:enabled:active]:bg-danger-foreground [&:enabled:active]:text-danger md:[&:enabled:active]:opacity-100 disabled:opacity-40 disabled:bg-danger-light disabled:text-danger':
        theme === 'danger', // is-danger
      'bg-white text-regular-foreground border border-regular md:[&:enabled:active]:bg-regular [&:enabled:active]:bg-gray-200 disabled:bg-gray-50 disabled:text-foreground':
        theme === 'outlined', // is-outlined
      'text-regular-foreground md:[&:enabled:active]:bg-regular md:[&:enabled:active]:bg-gray-200 disabled:bg-gray-50 disabled:text-foreground':
        theme === 'transparent', // is-transparent

      'w-32 h-32 p-0': variant === 'circle' || variant === 'compact', // compact || circle
      'rounded-full': variant === 'circle', // circle
    },
  ])
}
