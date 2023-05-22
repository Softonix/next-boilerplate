
export default function UseStatePage () {
  const [count, setCount] = useState(0)

  const multipleIncrement = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  const multipleIncrementBad = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <LayoutHooks>
      <p>Count value is: {count}</p>
      <AntButton onClick={() => setCount(0)}>Reset</AntButton>

      <AntButton onClick={() => setCount(prevCount => prevCount + 1)}>
        Plus (+)
      </AntButton>

      <AntButton onClick={() => setCount(prevCount => prevCount - 1)}>
        Minus (-)
      </AntButton>

      <AntButton onClick={multipleIncrement}>
        Good multiple +
      </AntButton>

      <AntButton onClick={multipleIncrementBad}>
       Bad multiple +
      </AntButton>

    </LayoutHooks>
  )
}
