import { z } from 'zod';
import { procedure, router } from './trpc'

export const appRouter = router({
  createUser: procedure
    .input(
      z.object({
        email: z.string()
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.user.create({
        data: { email: input.email }
      })
    }),
  getUsers: procedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany()
  })
})

export type ServerRouter = typeof appRouter;
