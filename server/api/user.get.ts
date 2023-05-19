import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await getQuery(event)
  if (body.id) {
    return await prisma.user.findUnique({
      where: {
          id: Number(body.id),
      },
  })
  }
  return await prisma.user.findMany()
})
