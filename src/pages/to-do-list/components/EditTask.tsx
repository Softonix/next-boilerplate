import { TTask } from '@/context/TodoContext'

interface IEditTaskProps {
  task: TTask
  onUpdate: (body: string) => void
  onDelete: () => void
}

type TEditTaskType = { body: string };

export const editTaskSchema = z.object({
  title: z.string().min(1).max(500),
  content: z.string().min(1).max(10000),
  folderId: z.string().min(1).max(10).optional() || null
})

const EditTask: React.FC<IEditTaskProps> = ({ task, onUpdate, onDelete }) => {
  const onFormSubmit = async (data: TEditTaskType) => {
    if (data.body === null) return

    onUpdate(String(data.body || task?.body))
  }

  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='rounded bg-white p-4 shadow'>
      <div className='mb-4 ml-4 flex items-center'>
        <h2 className='text-xl font-semibold'>Edit Task</h2>
      </div>
      <AntForm
        labelCol={{
          span: 2
        }}
        onFinish={onFormSubmit}
        onFinishFailed={onFinishFailed}
      >
        <AntForm.Item
          label='Body'
          name='body'
          rules={[
            {
              required: false,
              message: 'Please input your body!'
            }
          ]}
          wrapperCol={{
            span: 21
          }}
          initialValue={task?.body}
        >
          <AntInput />
        </AntForm.Item>

        <AntForm.Item
          wrapperCol={{
            offset: 1,
            span: 22
          }}
        >
          <div className='flex justify-end gap-3'>
            <AntButton href='/to-do-list'>Back</AntButton>
            <AntButton
              type='primary'
              onClick={() =>
                confirmationModal(
                  'Do you want to delete these item?',
                  String(task?.body),
                  'Cancel',
                  'Delete',
                  onDelete
                )
              }
              danger
            >
              Delete
            </AntButton>
            <AntButton type='primary' htmlType='submit'>
              Submit
            </AntButton>
          </div>
        </AntForm.Item>
      </AntForm>
    </div>
  )
}

export default EditTask
