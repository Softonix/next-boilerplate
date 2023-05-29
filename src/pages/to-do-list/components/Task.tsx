import { ToDoRecord } from '@prisma/client'

interface ITaskProps {
  task: ToDoRecord
  onUpdate: (data: any) => void
  onDelete: (data: any) => void
}

const Task: React.FC<ITaskProps> = ({ task, onUpdate, onDelete }) => {
  const { id, body, completed } = task
  const router = useRouter()

  const onTaskDelete = async () => {
    await onDelete(Number(id) as number)
  }

  const onTaskCompleteHandle = async () => {
    await onUpdate({
      id: Number(id) as number,
      body,
      completed: !completed
    })
  }

  return (
    <div className='my-4 bg-white p-12 shadow'>
      <div className='flex items-center justify-between'>
        <h3 className={'text-xl ' + (completed ? 'line-through' : '')}>
          {body}
        </h3>
        <div className='flex items-center justify-between gap-2'>
          <AntCheckbox checked={completed} onChange={onTaskCompleteHandle}>
            Completed
          </AntCheckbox>
          <AntButton onClick={() => router.push(`/to-do-list/${id}`)}>
            Edit
          </AntButton>
          <AntButton
            onClick={() =>
              confirmationModal(
                'Do you want to delete these items?',
                body,
                'Cancel',
                'Delete',
                onTaskDelete
              )
            }
            danger
          >
            Delete
          </AntButton>
        </div>
      </div>
    </div>
  )
}

export default Task
