const EditTaskPage: NextPage = () => {
  const [task, setTask] = useState<PrismaToDoRecord>()
  const [isLoading, setLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query
  const { tasks, updateTask, deleteTask } =
    useContext<TTaskContextType>(TodoContext)
  const taskToEdit = tasks?.find((t) => t?.id === Number(id))

  useEffect(() => {
    if (taskToEdit && taskToEdit !== task) {
      setLoading(true)
      setTask(taskToEdit)
    } else {
      setLoading(false)
    }
  }, [taskToEdit, task])

  const handleUpdate = (body: string) => {
    updateTask({ id: Number(id), body })
    router.push('/to-do-list')
  }

  const handleDelete = () => {
    deleteTask(Number(id) as number)
    router.push('/to-do-list')
  }

  return (
    <Layout>
      <NextHead>
        <title>{task?.body}</title>
      </NextHead>
      <div className='container mx-auto max-w-screen-lg p-4'>
        {task && !isLoading && (
          <EditTask
            task={task}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </div>
    </Layout>
  )
}

export default EditTaskPage
