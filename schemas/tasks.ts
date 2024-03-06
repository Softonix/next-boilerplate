export const createTaskSchema = z.object({
  title: z.string().trim(),
  subtitle: z.string().trim().optional()
})

export const deleteTaskSchema = z.object({
  id: z.number()
})

export const updateTaskSchema = z.object({
  id: z.number(),
  title: z.string().trim().optional(),
  subtitle: z.string().trim().optional(),
  completed: z.boolean().optional()
})
