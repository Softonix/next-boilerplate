import { TodoContext } from '@/context/TodoContext'
import { ToDoRecord } from '@prisma/client'

const TaskList: React.FC = () => {
  const { tasks, updateTask, deleteTask } =
    useContext<TTaskContextType>(TodoContext)

  const [filteredTasks, setFilteredTasks] = useState<ToDoRecord[]>(tasks)
  const [status, setStatus] = useState('all')

  useEffect(() => {
    if (status === 'completed') {
      setFilteredTasks(tasks.filter((t: ToDoRecord) => t?.completed))
    } else if (status === 'uncompleted') {
      setFilteredTasks(tasks.filter((t: ToDoRecord) => !t?.completed))
    } else {
      setFilteredTasks(tasks)
    }
  }, [status, tasks])

  return (
    <div className='mt-4'>
      <AntRadio.Group
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <AntRadio.Button value='all'>All</AntRadio.Button>
        <AntRadio.Button value='completed'>Completed</AntRadio.Button>
        <AntRadio.Button value='uncompleted'>Uncompleted</AntRadio.Button>
      </AntRadio.Group>
      {tasks.length > 0 &&
        filteredTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        ))}
    </div>
  )
}

export default TaskList
