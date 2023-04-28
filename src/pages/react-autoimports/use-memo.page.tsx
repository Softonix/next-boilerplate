export default function Main () {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const factorial = useMemo(() => factorialOf(number), [number])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value))
  }

  const onClick = () => setInc(i => i + 1)

  return (
    <CustomLayout>
      Factorial of
      <AntInput type="number" value={number} onChange={onChange} />
      is {factorial}
      <AntButton onClick={onClick}>Re-render</AntButton>
    </CustomLayout>
  )
}

function factorialOf (n: number): number {
  console.log('factorialOf(n) called!')
  return n <= 0 ? 1 : n * factorialOf(n - 1)
}
