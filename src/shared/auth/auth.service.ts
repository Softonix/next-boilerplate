import * as amplifyAuthServer from 'aws-amplify/auth/server'
import * as amplifyAuthClient from 'aws-amplify/auth'
import { TAuthProviders, TUser } from '@/shared/types'
import { toasterService } from '@/shared/ui/toaster'
import { runServerSideOperation } from '../config/auth/configure-amplify-server-side'

class ClientOnlyError extends Error {
  constructor(message = 'Should be used on client side only') {
    super(message)
  }
}

export const authService = (() => {
  // CLIENT SIDE ONLY

  function updateUserAttributes(_user: amplifyAuthClient.UpdateUserAttributesInput) {
    if (typeof window === 'undefined') throw new ClientOnlyError()
    return amplifyAuthClient.updateUserAttributes(_user)
  }

  async function handleSignIn(challengeResponse: string, username: string) {
    if (typeof window === 'undefined') throw new ClientOnlyError()
    return amplifyAuthClient
      .signIn({
        username,
        options: { authFlowType: 'CUSTOM_WITHOUT_SRP' },
      })
      .then(({ nextStep }) => {
        if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
          return amplifyAuthClient.confirmSignIn({ challengeResponse })
        }
      })
      .then((output) => {
        if (output?.isSignedIn) return output
        else throw new Error('Unauthorized')
      })
      .catch((e) => {
        console.error(e)
        toasterService.error('Sign in process failed. Try again or contact support.')
      })
  }

  function handleSignOut() {
    if (typeof window === 'undefined') throw new ClientOnlyError()
    return amplifyAuthClient.signOut().then(() => (window.location.href = '/'))
  }

  function signInWithProvider(provider: TAuthProviders) {
    if (typeof window === 'undefined') throw new ClientOnlyError()
    return amplifyAuthClient.signInWithRedirect({ provider }).catch(console.log)
  }

  // RUNTIME AGNOSTIC

  function getToken() {
    return fetchAuthSession().then((session) => session.tokens?.accessToken.toString())
  }

  function verifySession() {
    return getToken().then((_token) => !!_token)
  }

  async function fetchAuthSession() {
    if (typeof window === 'undefined') {
      return runServerSideOperation((contextSpec) => amplifyAuthServer.fetchAuthSession(contextSpec))
    } else {
      return amplifyAuthClient.fetchAuthSession()
    }
  }

  async function fetchUserAttrs() {
    if (typeof window === 'undefined') {
      return runServerSideOperation((contextSpec) => amplifyAuthServer.fetchUserAttributes(contextSpec)).then(
        mapUserAttrsToUser
      )
    } else {
      return amplifyAuthClient.fetchUserAttributes().then(mapUserAttrsToUser)
    }
  }

  function sendMagicLink(email: string, name?: string) {
    return client.POST('/api/auth/magic-link/', { body: { email, name } })
  }

  function mapUserAttrsToUser(_attrs: amplifyAuthClient.FetchUserAttributesOutput): TUser {
    return {
      subId: _attrs.sub!,
      email: _attrs['custom:email'] || _attrs.email,
      name: _attrs.name ?? '',
      phone_number: _attrs.phone_number ?? '',
      'custom:vipList': _attrs['custom:vipList'] ?? '',
    } as TUser
  }

  return {
    getToken,
    verifySession,
    fetchUserAttrs,
    updateUserAttributes,
    handleSignIn,
    handleSignOut,
    signInWithProvider,
    sendMagicLink,
  }
})()
