import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'
import bcrypt from 'bcrypt'

import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from '@/server/db/client'
import { getUserByEmail } from './server/services/auth'

export const config = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png'
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Credentials({
      async authorize (credentials) {
        const validatedFields = loginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          const user = await getUserByEmail(email)
          if (!user || !user.password) return null

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password
          )

          if (passwordsMatch) return user
        }

        return null
      }
    })
  ],
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
  }
} satisfies NextAuthConfig

export const {
  handlers: {
    GET, POST
  },
  auth,
  signIn,
  signOut
} = NextAuth(config)
