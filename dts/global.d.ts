type ChildrenProps<
  Key extends string = 'children',
  Props = never,
  T = IsNever<Props> extends true ? React.ReactNode : (props: Props) => React.ReactNode,
> = Partial<Record<Key, T>>

type ClassProps = { className?: import('clsx').ClassValue }

type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode }

type Optional<T> = null | undefined | T
type Nullable<T> = null | T
type IsNever<T> = [T] extends [never] ? true : false
type IndexedObject<T> = Record<string, T>

type DialogDefaultProps = {
  closeDialog?: () => void
  open?: boolean
} & ChildrenProps<'trigger'> &
  import('@/shared/ui').AppDialogProps

type Signal = { signal?: AbortSignal }
