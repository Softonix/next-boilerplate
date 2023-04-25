const ExamplePage: FC = () => {
  const [test, setTest] = useState(1)
  const [computedTest, setComputedTest] = useState(0)
  useEffect(() => {
    if (test > 10) {
      setComputedTest(test)
    }
  }, [test])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [messageApi, contextHolder] = AntMessage.useMessage()
  function showMessage () {
    messageApi.open({
      content: 'Hello, Ant Design!',
      type: 'success',
      duration: 5
    })
  }

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
    <>
      {/* It's recommended to use top level registration instead of message static method,
       because static method cannot consume context,
       and ConfigProvider data will not work.
       */}
      {contextHolder}
      <div className="flex min-h-screen flex-col items-center p-24">
        <div className='flex items-center gap-4 mb-5'>
          <IconCar className='text-red-500' />
          <IconCart className='text-green-500' />
        </div>

        <AntDatePicker />

        <AntButton type="primary" className='mt-5' onClick={showMessage}>
        Display message
        </AntButton>

        <AntButton
          type="primary"
          className='mt-5'
          danger
          onClick={() => setIsModalOpen(true)}
        >
        Open Modal
        </AntButton>

        <AntModal
          title="Basic Modal"
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </AntModal>

        {test} <br />
        {computedTest} <br />
        <button onClick={() => setTest(test + 1)}>increment</button>

        {JSON.stringify(exampleData) ?? 'Loading'}

        <ExamplePageComponent/>
      </div>
    </>
  )
}

export default ExamplePage
