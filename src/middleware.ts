import { NextRequest, NextResponse } from 'next/server'
import { authService } from './shared/auth'

const protectedRoutes = ['/profile-settings']

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  try {
    const isAuthenticated = await authService.verifySession()

    if (isProtectedRoute && !isAuthenticated) {
      return NextResponse.redirect(new URL('/?auth=sign-in', request.nextUrl))
    }

    return NextResponse.next()
  } catch (error) {
    console.log(error)
    return false
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
}
