import { InputRef } from 'antd'
import { Ref } from 'react'

const CustomInput = forwardRef(({ status }: {status: string}, ref: Ref<InputRef>) => {
  return (
    <CustomLayout>
      <AntInput ref={ref} type="text" />
      Props: { status }
    </CustomLayout>
  )
})

export default function Main () {
  const ref = useRef<InputRef>(null)

  const doSomething = () => {
    ref.current?.focus()
  }

  return (
    <>
      <CustomInput ref={ref} status="active" />
      <AntButton onClick={doSomething}>Focus</AntButton>
    </>
  )
}
