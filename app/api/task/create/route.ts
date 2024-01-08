import prisma from '@/db'

export async function POST()   {
    const task = await prisma.task.create(
        {
        data:{
            name: "Create Register proces",
            task: "create register form, create submit button, make sure all date is being sent to db",
    }})
    return Response.json({task})
  }