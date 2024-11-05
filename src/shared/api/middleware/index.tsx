import { Middleware } from 'openapi-fetch'

export const middleware: Middleware = {
  async onRequest({ request }) {
    if (!request.body) request.headers.delete('content-type')
    return request
  },

  async onResponse({ response }) {
    if (response.ok) return response
    else {
      const error = await response.json()
      return Promise.reject(error)
    }
  },
}
