import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { prisma } from '../../server/db/client'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200
  })

  const { id } = req.query
  const userFromDatabaseById = await prisma.user.findUnique({
    where: { id: String(id) }
  })

  res.status(200).json(userFromDatabaseById)
}
