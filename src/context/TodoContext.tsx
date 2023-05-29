import { ToDoRecord } from '@prisma/client'
import { trpc } from 'config/trpc/trpc-hook'
import React, { useState, createContext } from 'react'

export type TTask = {
  id: number | null | undefined
  body: string | null | undefined
  completed: boolean | null | undefined
} | null;

export type TTaskContextType = {
  tasks: ToDoRecord[]
  createTask: (data: any) => void
  updateTask: (data: any) => void
  deleteTask: (id: number) => void
};
export const TodoContext = createContext<TTaskContextType | undefined>(
  undefined
)
export type TToDoContextProviderProps = {
  children: React.ReactNode
};
export const TodoContextProvider: React.FC<TToDoContextProviderProps> = ({
  children
}) => {
  const [tasks, setTasks] = useState<ToDoRecord[]>([])

  const tasksFromDatabase = trpc.allTasks.useQuery()
  const createTaskMutation = trpc.createTask.useMutation()
  const deleteTaskMutation = trpc.deleteTask.useMutation()
  const updateTaskMutation = trpc.updateTask.useMutation()

  useEffect(() => {
    if (tasksFromDatabase.data) {
      setTasks(tasksFromDatabase.data)
    }
  }, [tasksFromDatabase.data])

  const createTask = async (data: any) => {
    await createTaskMutation.mutateAsync(data)
    tasksFromDatabase.refetch()
  }
  const updateTask = async (data: any) => {
    await updateTaskMutation.mutateAsync(data)
    tasksFromDatabase.refetch()
  }

  const deleteTask = async (id: number) => {
    await deleteTaskMutation.mutateAsync(id)
    tasksFromDatabase.refetch()
  }

  const todoContextValue = { tasks, updateTask, deleteTask, createTask }

  return (
    <TodoContext.Provider value={todoContextValue as TTaskContextType}>
      {children}
    </TodoContext.Provider>
  )
}
