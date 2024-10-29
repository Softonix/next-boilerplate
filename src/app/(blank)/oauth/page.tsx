'use client'

import { AppLoading } from '@/shared/ui'
import { delay } from 'lodash-es'

const OAuthPage = () => {
  const router = useRouter()

  useEffect(() => {
    delay(() => router.push('/'), 15_000)
  }, [router])

  return <AppLoading />
}

export default OAuthPage
