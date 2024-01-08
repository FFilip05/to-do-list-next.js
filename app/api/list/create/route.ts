import prisma from '@/db'

export async function POST(req:Request)   {
    const list = await prisma.list.create(
        {
        data:{
            name: "Create Register Service",
            // tags: 
            createdById: "db6d3117-65d4-4ef7-a7fe-69c894c20a72",
            status: false,
            
    }})
    return Response.json({list})
  }