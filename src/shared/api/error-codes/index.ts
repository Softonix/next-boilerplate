interface IError {
  code: number
  message: string
}

export const codes = {
  SESSION_EXPIRED: {
    code: 10001,
    title: 'Session expired',
    message: 'Please login back in your account.',
  },

  DEFAULT: {
    code: 1000,
    message: 'Something went wrong. Please, refresh the page or try again later.',
  },
} as const

function getHashedCodes() {
  return Object.values(codes).reduce((acc, currCodeMeta) => {
    return { ...acc, [currCodeMeta.code]: currCodeMeta }
  }, {} as IndexedObject<IError>)
}

export function getErrorMessage(_code: string) {
  const hashedCodes = getHashedCodes()

  const errorHash = hashedCodes[_code]

  return errorHash?.message || codes.DEFAULT.message
}
