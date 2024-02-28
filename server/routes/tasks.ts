export const tasksRouter = router({
  getTasks: protectedProcedure
    .query(async ({ ctx }) => {
      const tasks = await ctx.prisma.toDoRecord.findMany()

      return { tasks: tasks || [] }
    }),

  createTask: protectedProcedure
    .input(createTaskSchema)
    .mutation(async ({ input, ctx }) => {
      const validatedFields = createTaskSchema.safeParse(input)

      if (!validatedFields.success) {
        return { error: 'Invalid data' }
      }

      const { body } = validatedFields.data

      const task = await ctx.prisma.toDoRecord.create({
        data: {
          body,
          userId: ctx.session.user.id
        }
      })

      return { success: true, task }
    })
})

export type TTasksRouter = typeof tasksRouter;
