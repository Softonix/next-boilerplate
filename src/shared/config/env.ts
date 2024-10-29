import * as v from 'valibot'

const envSchema = v.object({
  NEXT_PUBLIC_LOCAL_PORT: v.pipe(v.unknown(), v.transform(Number)),
  NEXT_PUBLIC_BASE_URL: v.pipe(v.string(), v.url()),
  NEXT_PUBLIC_AWS_USER_POOL_ID: v.string(),
  NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID: v.string(),
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: v.string(),
})

type TEnv = v.InferOutput<typeof envSchema>

export const ENV: TEnv = v.parse(envSchema, {
  NEXT_PUBLIC_LOCAL_PORT: process.env.NEXT_PUBLIC_LOCAL_PORT,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,

  NEXT_PUBLIC_AWS_USER_POOL_ID: process.env.NEXT_PUBLIC_AWS_USER_POOL_ID,
  NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID: process.env.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
})
