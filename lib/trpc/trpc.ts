/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @link https://trpc.io/docs/v11/router
 * @link https://trpc.io/docs/v11/procedures
 * @link https://trpc.io/docs/v11/merging-routers
 */

// import { getServerAuthSession } from '@/auth'
import { initTRPC, TRPCError } from '@trpc/server'
import { prisma } from '@/server/db/client'

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  // const session = await getServerAuthSession()

  return {
    prisma,
    // session,
    ...opts
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create()

// Protected base procedure
function isAuthed ({ ctx, next }: any) {
  const user = ctx.session?.user

  if (!user?.name) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  console.log(user?.name)

  return next({
    ctx: {
      user: {
        ...user,
        name: user.name
      }
    }
  })
}

export const router = t.router
export const mergeRouters = t.mergeRouters
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthed)
