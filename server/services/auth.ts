import { z } from 'zod'

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma?.user.findUnique({ where: { email } })

    return user
  } catch {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await prisma?.user.findUnique({ where: { id } })

    return user
  } catch {
    return null
  }
}

export const createUser = async ({
  name,
  email,
  password
}: z.infer<typeof registerSchema>) => {
  try {
    const user = await prisma?.user.create({
      email,
      password,
      name
    })

    return user
  } catch {
    return null
  }
}
