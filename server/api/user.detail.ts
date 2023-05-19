import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const id = body.id;
    console.log(body);
    
    return await prisma.user.findUnique({
        where: {
            id: id,
        },
    })

    // const result = await prisma.user.findUnique({
    //     where: {
    //       id: 1,
    //     },
    //   })
    //   return result
})
