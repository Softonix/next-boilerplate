import { Middleware } from 'openapi-fetch'

import { codes, getErrorMessage } from '@/shared/api/error-codes'
import { toasterService } from '@/shared/ui/toaster'
import { authService } from '@/shared/auth'

export const middleware: Middleware = {
  async onRequest({ request }) {
    const accessToken = await authService.getToken()
    accessToken && request.headers.set('Authorization', `Bearer ${accessToken}`)
    if (!request.body) request.headers.delete('content-type')
    return request
  },

  async onResponse({ response }) {
    if (response.ok) return response
    else {
      const error = await response.json()
      switch (response.status) {
        case 401:
          await handle401()
          break

        case 429:
          handle429()
          break

        default:
          handleElse(error.code)
          break
      }
      return Promise.reject(error)
    }
  },
}

async function handle401() {
  if (typeof window === 'undefined') return
  toasterService.warning(
    <>
      <h5>{codes.SESSION_EXPIRED.title}</h5>
      <p>{codes.SESSION_EXPIRED.message}</p>
    </>
  )
  await wait(1500)
  await authService.handleSignOut()
}

async function handle429() {
  if (typeof window === 'undefined') return
  const anonymousMessage = (
    <p>
      You've reached your 10-search limit as a guest. Want more?
      <a className="text-primary" href="/?auth=sign-in">
        Log in or create an account
      </a>
      to enjoy up to 50 searches per day!
    </p>
  )

  const authorizedMessage = (
    <p>
      Wow, you're really on a roll! You've reached your daily limit of 50 searches. Love to search more?
      <a className="text-primary" href="/join-vip-list">
        Click here
      </a>
      to join our exclusive waitlist and be the first to know when we increase search limits. More searches, more
      discoveries!
      <br />
      <br />
      <a className="text-primary" href="/join-vip-list">
        Join Our VIP List!
      </a>
    </p>
  )

  toasterService.warning((await authService.verifySession()) ? authorizedMessage : anonymousMessage)
}

function handleElse(_code: string) {
  if (typeof window === 'undefined') return
  toasterService.error(getErrorMessage(_code))
}
