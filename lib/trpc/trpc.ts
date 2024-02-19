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

// import { getServerAuthSession } from './common/get-server-auth-session'
import { initTRPC, TRPCError } from '@trpc/server'
import { prisma } from '@/server/db/client'

interface ICreateContextOptions {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
async function createContextInner (_opts: ICreateContextOptions) {
  return {
    // session: opts.session,
    prisma
  }
}

type TContext = Awaited<ReturnType<typeof createContextInner>>;

const t = initTRPC.context<TContext>().create()

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
