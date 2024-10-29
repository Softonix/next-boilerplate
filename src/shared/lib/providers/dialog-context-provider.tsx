'use client'

import { DialogInstanceContext } from '@/shared/ui'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

type IDialog = { component: any; props: any; isOpen: boolean }

type TComponentsType = typeof components

export type TComponentNames = keyof TComponentsType

export type TInferProps<T> = T extends ComponentType<infer Props> ? Props : never

export type TComponentProps = {
  [K in TComponentNames]: TInferProps<TComponentsType[K]>
}

type DialogContextProviderProps = { children: React.ReactNode }

type DialogMap = Partial<Record<TComponentNames, IDialog>>

type DialogContextValue = {
  openDialog: <T extends TComponentNames>(name: T, props?: TComponentProps[T]) => void
  closeDialog: <T extends TComponentNames>(name: T) => void
}

const components = {
  'auth-dialog': dynamic(() => import('@/widgets/auth-dialog').then((m) => m.AuthDialog)),
  'blank-dialog': dynamic(() => import('@/shared/ui').then((m) => m.BlankDialog)),
  'zip-code-dialog': dynamic(() => import('@/features/set-geo-location').then((m) => m.ZipCodeDialog)),
  'new-thread-dialog': dynamic(() => import('@/features/search').then((m) => m.NewThreadDialog)),
  'car-details-dialog': dynamic(() => import('@/widgets/car-details').then((m) => m.CarDetailsDialog)),
  'car-details-images-preview-dialog': dynamic(() =>
    import('@/widgets/car-details').then((m) => m.CarDetailsImagesPreviewDialog)
  ),
} as const

export const DialogContext = createContext<DialogContextValue | null>(null)

export const DialogContextProvider = ({ children }: DialogContextProviderProps) => {
  const [Dialogs, setDialogs] = useState<DialogMap>({})

  const openDialog = useCallback(<T extends TComponentNames>(name: T, props?: TComponentProps[T]) => {
    setDialogs((prev) => ({
      ...prev,
      [name]: {
        component: components[name],
        props: props ?? {},
        isOpen: true,
      },
    }))
  }, [])

  const closeDialog = useCallback(<T extends TComponentNames>(name: T) => {
    setDialogs((prev) => (delete prev[name], { ...prev }))
  }, [])

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      <div className="fixed">
        {Object.entries(Dialogs).map(([name, Dialog]) => {
          const closeCurrentDialog = () => {
            Dialog.props.onOpenChange?.(false)
            closeDialog(name as TComponentNames)
          }

          return (
            Dialog && (
              <DialogInstanceContext.Provider
                key={name}
                value={{ closeDialog: closeCurrentDialog }}
              >
                <Dialog.component
                  open={Dialog.isOpen}
                  closeDialog={closeCurrentDialog}
                  {...Dialog.props}
                  onOpenChange={(_opened: boolean) => {
                    Dialog.props.onOpenChange?.(_opened)
                    setDialogs((prev) => ({
                      ...prev,
                      [name]: {
                        component: Dialog.component,
                        props: Dialog.props,
                        isOpen: _opened,
                      },
                    }))
                  }}
                />
              </DialogInstanceContext.Provider>
            )
          )
        })}
      </div>

      {children}
    </DialogContext.Provider>
  )
}
