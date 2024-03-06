'use client'
interface IProps {
  className?: string
  task: PrismaToDoRecord
  updateTask: (value: boolean) => void
}

export const TaskMenu: FC<IProps> = ({ className, task, updateTask }) => {
  console.log(task.id)

  function completeTask () {
    updateTask(!task.completed)
  }

  return (
    <div className={cn('', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger>menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={completeTask}>{task.completed ? 'Re-open' : 'Complete'}</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
