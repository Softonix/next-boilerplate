import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { getServerSession } from 'next-auth'
import { getProviders, signIn } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth].api'

const Signin = ({
  providers
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextHead>
        <title>Sign in</title>
      </NextHead>

      <div className='flex min-h-screen items-center justify-center overflow-x-hidden'>
        <div>
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name} className='w-full   py-2 text-white '>
              <AntButton
                type='primary'
                block
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </AntButton>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/' } }
  }
  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] }
  }
}

export default Signin
