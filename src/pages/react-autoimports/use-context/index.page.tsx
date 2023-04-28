import { ReactNode } from 'react'
import { CounterProvider, initState, useCounter, useCounterText } from './CounterContext'

type TChildrenType = {
  children: (num: number) => ReactNode
}

export default function Main () {
  return (
    <CustomLayout>
      <CounterProvider count={initState.count} text={initState.text}>
        <><Counter>{(num) => <>Current Count: {num}</>}</Counter></>
      </CounterProvider>
    </CustomLayout>
  )
}

const Counter = ({ children }: TChildrenType) => {
  const { text, handleTextInput } = useCounterText()
  const { count, increment, decrement } = useCounter()
  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <AntButton onClick={increment}>Increment</AntButton>
        <AntButton onClick={decrement}>Decrement</AntButton>
      </div>
      <AntInput type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  )
}
