import prisma from '../../../db'

export const getServerSideProps = async () => {
  const lists = await prisma.post.findMany()

  return { props: { lists } }
}