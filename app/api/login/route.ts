import prisma from '@/db'
export  async function POST(req: Request) {
    const  {email}  = await req.json()
    const res = await prisma.user.findFirst({where: {email:email}});
    if(res!==null){
      return Response.json(res)
    } else {
      return Response.error()
    }
  }