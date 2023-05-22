import { InputRef } from 'antd'
import { Ref } from 'react'

const CustomInput = forwardRef(({ status }: {status: string}, ref: Ref<InputRef>) => {
  return (
    <>
      <AntInput ref={ref} type="text" />
      Props: { status }
    </>
  )
})

export default function ForwardRefPage () {
  const ref = useRef<InputRef>(null)

  const doSomething = () => {
    ref.current?.focus()
  }

  return (
    <LayoutHooks>
      <CustomInput ref={ref} status="active" />
      <AntButton onClick={doSomething}>Focus</AntButton>
    </LayoutHooks>
  )
}
