import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await getQuery(event)
  console.log(body)
  if (body.id) {
    return await prisma.user.findUnique({
      where: {
        id: Number(body.id),
      },
    })
  }

  const data = await prisma.user.findMany({
    skip: Number(body.page),
    take: 3,
    orderBy: {
      id: 'desc',
    },
  });
  const total = await prisma.user.findMany()

  return {
    "data": data,
    "total": total ,
  }
})
