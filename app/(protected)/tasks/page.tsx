import { unstable_noStore as noStore } from 'next/cache'

const Tasks: React.FC<{ className: string }> = async (props) => {
  const { className = '' } = props
  noStore()

  const { tasks } = await trpcServer.tasks.getTasks.query()

  return (
    <div className={className}>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl mb-4'>Tasks</h1>
        <AddTask />
      </div>

      <div>
        {tasks.length > 0 && (
          tasks.map(task => {
            return (
              <TaskItem task={task} key={task.id} />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Tasks
