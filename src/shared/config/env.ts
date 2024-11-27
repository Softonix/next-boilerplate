import * as v from 'valibot'

const envSchema = v.object({
  NEXT_PUBLIC_LOCAL_PORT: v.pipe(v.unknown(), v.transform(Number)),
  NEXT_PUBLIC_BASE_URL: v.pipe(v.string(), v.url()),
})

type TEnv = v.InferOutput<typeof envSchema>

export const ENV: TEnv = v.parse(envSchema, {
  NEXT_PUBLIC_LOCAL_PORT: process.env.NEXT_PUBLIC_LOCAL_PORT,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
})
