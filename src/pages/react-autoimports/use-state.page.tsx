export default function Main () {
  const [count, setCount] = useState(0)
  return (
    <CustomLayout>
      <p>Count value is: {count}</p>
      <AntButton onClick={() => setCount(0)}>Reset</AntButton>
      <AntButton
        onClick={() => setCount(prevCount => prevCount + 1)}>
        Plus (+)
      </AntButton>
      <AntButton
        onClick={() => setCount(prevCount => prevCount - 1)}>
       Minus (-)
      </AntButton>
    </CustomLayout>
  )
}
