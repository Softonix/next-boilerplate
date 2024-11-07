import 'react'

declare module 'react' {
  interface CSSProperties {
    '--example-var'?: string | number
    '--app-tab-width'?: string | number
    '--app-tab-count'?: number
    '--app-active-tab-index'?: number
    '--app-active-tab-runner-width'?: string
  }
}
