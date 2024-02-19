import { authRouter } from './auth'
import { tasksRouter } from './tasks'

// import { observable } from '@trpc/server/observable'
// import { clearInterval } from 'timers'

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'success'),

  // randomNumber: publicProcedure.subscription(() => {
  //   return observable<number>((emit) => {
  //     const int = setInterval(() => {
  //       emit.next(Math.random())
  //     }, 500)
  //     return () => {
  //       clearInterval(int)
  //     }
  //   })
  // }),

  auth: authRouter,
  tasks: tasksRouter
})

export type TAppRouter = typeof appRouter;
