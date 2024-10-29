export type TAuthProviders = 'Google' | 'Apple'

export type TAuthType = Optional<'sign-in' | 'sign-up'>

export type TUser = {
  email?: string
  name: string
  subId: string
  phone_number?: string
  'custom:vipList'?: string
}
