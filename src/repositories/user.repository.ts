import { PrismaClient } from "@prisma/client";
import { IUser } from "../types/user.entities";

const prisma = new PrismaClient()

export const UserRepository = {
  createUser: async (user: IUser) => {
    try {
      const newUser = await prisma.user.create({
        data: user
      })
      return newUser
    } catch (error) {
      console.log('error in getUser', error)
      throw new Error("failed to created user")
    }
  },

  getUserById: async (user_id: number) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          user_id,
        },
      })
      return user
    } catch (error) {
      console.log('failed to getUser', error)
      throw new Error("failed to retrieve user")
    }
  },

  getUser: async () => {
    try {
      const users = await prisma.user.findMany()
      return users
    } catch (error) {
      console.log(error)
    }
  }
}
