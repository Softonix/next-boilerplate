import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// This is called for each request !!!
export async function createContext (_opts?: trpcNext.CreateNextContextOptions) {
  return { prisma }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
