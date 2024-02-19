import { createTRPCReact } from '@trpc/react-query'
import type { TAppRouter } from '@/server/routes'

export const trpc = createTRPCReact<TAppRouter>({})
