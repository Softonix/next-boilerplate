import { initTRPC } from '@trpc/server'
import type { TContext } from './context'
import { TRPCError } from 'trpc'
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.

const t = initTRPC.context<TContext>().create()

export const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user }
    }
  })
})
// Base router and procedure helpers
export const router = t.router
export const procedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthed)
