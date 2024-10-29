import { Amplify } from 'aws-amplify'
import amplifyConfig from './amplify.config'
import { createServerRunner } from '@aws-amplify/adapter-nextjs'
import { AmplifyServer } from 'aws-amplify/adapter-core'

const config = { Auth: amplifyConfig.Auth }

export const { runWithAmplifyServerContext } = createServerRunner({
  config: amplifyConfig,
})

export async function runServerSideOperation<Return>(
  operation: (context: AmplifyServer.ContextSpec) => Return
): Promise<Awaited<Return>> {
  const { cookies } = await import('next/headers')
  return await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => operation(contextSpec),
  })
}

export const configureAmplifyServerSide = () => Amplify.configure(config, { ssr: true })
