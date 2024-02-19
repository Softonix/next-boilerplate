export const tasksRouter = router({
  getTasks: publicProcedure
    .query(async ({ input, ctx }) => {
      // signup
      console.log('get tasks')
      return true
    }),

  createTask: publicProcedure
    .input(
      z.object({
        email: z.string()
      })
    )
    .mutation(async ({ input, ctx }) => {
      // signup
    })
})

export type TTasksRouter = typeof tasksRouter;
