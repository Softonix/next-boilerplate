import Link from 'next/link'
import * as React from 'react'

export type TAppButtonTag = 'button' | 'Link' | 'a'

export type TAppButtonProps<Tag extends TAppButtonTag> = TClassProps & {
  tag?: Tag
  theme?: 'primary' | 'secondary' | 'danger' | 'outlined' | 'transparent'
  size?: 'small' | 'default'
  disabled?: boolean
  variant?: 'compact' | 'circle'
} & {
    button: React.ButtonHTMLAttributes<HTMLButtonElement>
    Link: React.ComponentPropsWithoutRef<typeof Link>
    a: React.AnchorHTMLAttributes<HTMLAnchorElement>
  }[Tag]
