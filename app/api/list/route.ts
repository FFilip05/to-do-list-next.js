import prisma from '@/db'

export async function GET()   {
  const lists = await prisma.list.findMany()
  return Response.json(lists)
}