'use client'

import { Amplify } from 'aws-amplify'
import { Hub } from 'aws-amplify/utils'

import { toasterService } from '@/shared/ui/toaster'

import amplifyConfig from './amplify.config'

const ConfigureAmplifyClientSide = () => {
  const router = useRouter()

  useEffect(() => {
    Amplify.configure(
      {
        Auth: {
          Cognito: {
            ...amplifyConfig.Auth.Cognito,
            loginWith: {
              oauth: {
                redirectSignIn: ['http://localhost:3000/oauth', 'https://carscout-fe-next.vercel.app/oauth'],
                redirectSignOut: ['http://localhost:3000', 'https://carscout-fe-next.vercel.app'],
                domain: 'stage-carscout-ai-2.auth.us-east-1.amazoncognito.com',
                scopes: ['email', 'openid', 'phone', 'profile', 'aws.cognito.signin.user.admin'],
                responseType: 'code',
                providers: ['Apple', 'Google'],
              },
            },
          },
        },
      },
      { ssr: true }
    )

    Hub.listen('auth', async ({ payload }) => {
      switch (payload.event) {
        case 'signInWithRedirect':
          toasterService.success('Logged in successfully')
          break
        case 'signInWithRedirect_failure':
          toasterService.error('Sign in process failed. Try again or contact support.')
          break
      }

      router.push('/')
    })
  }, [router])

  return null
}

export { ConfigureAmplifyClientSide }
