import prisma from '@/db'

export async function POST(req: Request)   {
    const { email, password } = req.json;
    const userExists = await checkIfUserExists(email);
    if (userExists){
        const user = await prisma.user.create(
            {
            data:{
                email:"filipf@gmail.com",
                name: "Filip",
        }})
        return Response.json({user})
    }

    return Response.error();
  }

  const checkIfUserExists = async (email) => {
    const user = prisma.user.findFirst({where: {
        email: email
    }})
    if (user !== null ) {return true }
    return false
  };