import {
  CounterProvider,
  initState,
  useCounter,
  useCounterText
} from './CounterContext'

export default function useContextPage () {
  return (
    <LayoutHooks>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter />
      </CounterProvider>
    </LayoutHooks>
  )
}

const Counter = () => {
  const { text, handleTextInput } = useCounterText()
  const { count, increment, decrement } = useCounter()
  return (
    <>
      <h1>Current Count: {count}</h1>
      <div>
        <AntButton onClick={increment}>Increment</AntButton>
        <AntButton onClick={decrement}>Decrement</AntButton>
      </div>
      <AntInput type='text' onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  )
}
