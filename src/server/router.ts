import { z } from 'zod'
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
  }),
  updateuser: procedure.input(
    registrationFromSchema
  ).mutation(
    async ({
      ctx: { prisma, session },
      input: { nickname, phone, city }
    }) => {
      const updateduser = await prisma.user.update({
        where: { id: session?.user?.id },
        data: {
          nickname,
          phone,
          city
        }
      })
      return updateduser
    }
  )
})

export type TServerRouter = typeof appRouter;
