import { PrismaClient, User } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()

async function createAUser() {
    // Create a new user record
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  log(user)
}

async function getAllUsers() : Promise<User[]> {
    const users = await prisma.user.findMany()
    console.log(users)
    return users
}

async function createAPost() {
    const user : User = await prisma.user.findFirstOrThrow({
        where: {id:1}
    })

    const post = await prisma.post.create({
        data: {
            title: "This is my first post",
            content: "A littile content",
            authorId: user?.id
        }
    })
    log(post)
}

async function main() {
   // await createAUser()
   // await getAllUsers()
   await createAPost()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })