import { z } from 'zod'
import { protectedProcedure, router } from './trpc'

export const appRouter = router({
  createUser: protectedProcedure
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
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany()
  }),
  getUserById: protectedProcedure.input(z.string()).query(
    async ({ ctx: { prisma }, input }) => {
      try {
        const user = await prisma.user.findUnique({ where: { id: input } })

        return user
      } catch (error) {
        console.log(error)
      }
    }
  ),
  updateUser: protectedProcedure.input(
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
  allTasks: protectedProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      const tasks = await prisma.toDoRecord.findMany({
        where: { userId: session?.user?.id }
      })

      return tasks || []
    }
  ),
  updateTask: protectedProcedure.input(z.object({
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
  taskById: protectedProcedure.input(z.string()).query(
    async ({ ctx: { prisma }, input }) => {
      try {
        const task = await prisma.toDoRecord.findUnique({ where: { id: parseInt(input) } })

        return task
      } catch (error) {
        console.log(error)
      }
    }
  ),
  deleteTask: protectedProcedure.input(z.number()).mutation(
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
