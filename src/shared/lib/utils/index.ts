import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}

export function wait(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export function useContextValue<T>(objectWithContext: Record<string, React.Context<T>>) {
  const names = Object.keys(objectWithContext)
  if (names.length !== 1) throw new Error('Provide only one context')

  const contextName = names[0]

  const context = useContext(objectWithContext[contextName])

  if (!context) throw new Error(`No ${contextName}Provider found up the component tree`)
  return context
}
