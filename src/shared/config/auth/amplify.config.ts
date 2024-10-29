const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: ENV.NEXT_PUBLIC_AWS_USER_POOL_ID,
      userPoolClientId: ENV.NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID,
    },
  },
}

export default amplifyConfig
