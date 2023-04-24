const ExamplePage: FC = () => {
  const [test, setTest] = useState(1)
  const [computedTest, setComputedTest] = useState(0)
  useEffect(() => {
    if (test > 10) {
      setComputedTest(test)
    }
  }, [test])

  const [exampleData, setExampleData] = useState<IExampleInterface | undefined>()
  async function getExampleData () {
    const res = await exampleViewService.getSomeData()
    console.log(res)

    setExampleData(res)
  }
  useEffect(() => {
    getExampleData()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <AntSpace>
        <AntDatePicker />
        <AntButton type="primary">Primary Button</AntButton>
      </AntSpace>

      {test} <br />
      {computedTest} <br />
      <button onClick={() => setTest(test + 1)}>increment</button>

      {JSON.stringify(exampleData) ?? 'Loading'}

      <ExamplePageComponent/>
    </div>
  )
}

export default ExamplePage
