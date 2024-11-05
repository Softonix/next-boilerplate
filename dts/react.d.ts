import 'react'

declare module 'react' {
  interface CSSProperties {
    '--example-var'?: string | number
  }
}
