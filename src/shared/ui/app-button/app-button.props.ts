import Link from 'next/link'
import * as React from 'react'

export type AppButtonTag = 'button' | 'Link' | 'a'

export type AppButtonProps<Tag extends AppButtonTag> = ClassProps & {
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
