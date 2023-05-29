import { TodoContext } from '@/context/TodoContext'

type TCreateTaskType = { body: string };

const CreateTask = () => {
  const router = useRouter()
  const { createTask } = useContext<TTaskContextType>(TodoContext)

  const onFormSubmit = async (data: TCreateTaskType) => {
    try {
      await createTask(data)

      router.push('/to-do-list')
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='bg-white p-4 shadow'>
      <div className='mb-4 flex items-center'>
        <h2 className='text-xl font-semibold'>Create New Task</h2>
      </div>
      <div className='p-300'>
        <AntForm
          name='basic'
          labelCol={{
            span: 2
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFormSubmit}
          onFinishFailed={onFinishFailed}
        >
          <AntForm.Item
            label='Body'
            name='body'
            rules={[
              {
                required: true,
                message: 'Please input your task!'
              }
            ]}
            wrapperCol={{
              span: 21
            }}
          >
            <AntInput />
          </AntForm.Item>
          <AntForm.Item
            wrapperCol={{
              offset: 21,
              span: 16
            }}
          >
            <div className='flex justify-end gap-3'>
              <AntButton href='/to-do-list'>Back</AntButton>
              <AntButton type='primary' htmlType='submit'>
                Submit
              </AntButton>
            </div>
          </AntForm.Item>
        </AntForm>
      </div>
    </div>
  )
}

export default CreateTask
