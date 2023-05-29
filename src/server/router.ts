import { z } from 'zod'
import { procedure, protectedProcedure, router } from './trpc'

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
  updateUser: procedure.input(
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
  ),
  createTask: protectedProcedure.input(
    z.object({
      body: z.string()
    })
  ).mutation(
    async ({
      ctx: { prisma, session },
      input: { body }
    }) => {
      await prisma.toDoRecord.create({
        data: { userId: session?.user.id, body }
      })
    }
  ),
  allTasks: procedure.query(
    async ({ ctx: { prisma, session } }) => {
      const tasks = await prisma.toDoRecord.findMany({
        where: { userId: session?.user?.id }
      })

      return tasks || []
    }
  ),
  updateTask: procedure.input(z.object({
    id: z.number(),
    body: z.string().optional(),
    completed: z.boolean().optional()
  })).mutation(
    async ({
      ctx: { prisma, session },
      input: { id, body, completed }
    }) => {
      const updatedTask = await prisma.toDoRecord.updateMany({
        where: {
          AND: [{
            id
          }, { userId: session?.user?.id }]
        },
        data: {
          body,
          completed
        }
      })

      return updatedTask
    }
  ),
  taskById: procedure.input(z.string()).query(
    async ({ ctx: { prisma }, input }) => {
      try {
        const task = await prisma.toDoRecord.findUnique({ where: { id: parseInt(input) } })

        return task
      } catch (error) {
        console.log(error)
      }
    }
  ),
  deleteTask: procedure.input(z.number()).mutation(
    async ({ ctx: { prisma, session }, input }) => {
      const deletedTask = await prisma.toDoRecord.deleteMany({
        where: {
          AND: [{
            id: input
          }, { userId: session?.user?.id }]
        }

      })
      return deletedTask
    }
  )
})

export type TServerRouter = typeof appRouter;
