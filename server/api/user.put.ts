import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = body.id;

  const name = body.name;
  const email = body.email;
  if (!(id || name || email)) {
    return createError({
      statusCode: 401,
      statusMessage: "Server error",
    });
  }
  let user
  if (id && name && email) {
    user = await prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        name: name,
        email: email,
      },
    })
  }
  return user
})

