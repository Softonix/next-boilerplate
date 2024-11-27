import '../config/env'
import { ENV } from '../config/env'
import { middleware } from './middleware'

import createClient from 'openapi-fetch'

const client = createClient({
  baseUrl: ENV.NEXT_PUBLIC_BASE_URL,
})

client.use(middleware)

export { client }
