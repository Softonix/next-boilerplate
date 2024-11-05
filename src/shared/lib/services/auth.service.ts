export class ClientOnlyError extends Error {
  constructor(message = 'Should be used on client side only') {
    super(message)
  }
}

export const authService = (() => {})()
