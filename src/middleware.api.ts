import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'
import { NextApiRequest } from 'next'

export default async function authMiddleware (req: NextApiRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: req?.headers?.get('cookie')
    }
  }

  const session = await getSession({ req: requestForNextAuth })

  const response = await fetch(`http://localhost:3000/api/user-by-id?id=${session?.user?.id}`)
  const userFromDatabase = await response.json()

  const isAuthenticated = session?.user?.email
  const redirectUrl = req.nextUrl.clone()

  if (!isAuthenticated && !['/', '/registration'].includes(req.nextUrl.pathname)) {
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  if (isAuthenticated && userFromDatabase?.nickname === null) {
    redirectUrl.pathname = '/registration'
    return NextResponse.redirect(redirectUrl)
  }
}

export const config = {
  matcher: ['/', '/example-page', '/react-autoimports/:path*', '/to-do-list/:path*']
}
