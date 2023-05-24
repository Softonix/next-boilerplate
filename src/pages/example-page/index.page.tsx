const ExamplePage: FC = () => {
  const [test, setTest] = useState(1)
  const [computedTest, setComputedTest] = useState(0)
  useEffect(() => {
    if (test > 10) {
      setComputedTest(test)
    }
  }, [test])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [messageApi, AntContextHolder] = AntMessage.useMessage()
  function showMessage () {
    messageApi.open({
      content: 'Hello, Ant Design!',
      type: 'success',
      duration: 5
    })
  }

  const [loading, setLoading] = useState(false)

  const [exampleData, setExampleData] = useState<
  IExampleInterface | undefined
  >()
  async function getExampleData () {
    try {
      setLoading(true)
      const res = await exampleViewService.getSomeData()
      console.log(res)

      setExampleData(res)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getExampleData()
  }, [])

  return (
    <>
      <NextHead>
        <title>Example page</title>
      </NextHead>

      {/* It's recommended to use top level registration instead of message static method,
       because static method cannot consume context,
       and ConfigProvider data will not work.
       */}
      {AntContextHolder}
      <Layout>
        <div className='flex min-h-screen flex-col items-center p-24'>
          <div className='flex items-center gap-4 mb-5'>
            <IconCar className='text-red-500' />
            <IconCart className='text-green-500 hover:text-red-500' />
          </div>

          <AntDatePicker />

          <AntButton type='primary' className='mt-5' onClick={showMessage}>
            Display message
          </AntButton>

          <AntButton
            type='primary'
            className='mt-5'
            danger
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </AntButton>

          <AntModal
            title='Basic Modal'
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </AntModal>

          <div className='mt-5'>
            <AntSpin spinning={loading}>
              <AntAlert
                message='Alert message title'
                description={JSON.stringify(exampleData) ?? 'Loading'}
                type='info'
              />
            </AntSpin>
            <div className='mt-5'>
              Loading state：
              <AntSwitch
                checked={loading}
                onChange={(checked) => setLoading(checked)}
              />
            </div>
          </div>

          <div className='mt-5'>
            {test} <br />
            {computedTest} <br />
            <AntButton onClick={() => setTest(test + 1)}>increment</AntButton>
            <ExamplePageComponent />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ExamplePage
