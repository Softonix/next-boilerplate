import NextAuth, { type NextAuthOptions } from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '../../../server/db/client'
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  callbacks: {
    session ({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }

      return session
    },
    async redirect ({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    newUser: '/registration'
  }
}

export default NextAuth(authOptions)
