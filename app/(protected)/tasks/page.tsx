import { unstable_noStore as noStore } from 'next/cache'

const Tasks: React.FC<{ className: string }> = async (props) => {
  const { className = '' } = props
  noStore()

  // const getTasks = await trpc.tasks.getTasks.useQuery || []
  const { tasks } = await trpcServer.tasks.getTasks.query()

  return (
    <div className={className}>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-2xl mb-4'>Tasks</h1>
        <AddTask />
      </div>

      {tasks.length > 0 && (
        tasks.map(task => {
          return (
            <div className='mb-2' key={task.id}>
              <p>{task.body}</p>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Tasks
