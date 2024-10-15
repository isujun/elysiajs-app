import UserService from "../services/user.service"
import { IUser } from "../types/user.entities"

export const UserController = {
  getUser: async () => {
    try {
      const users = await UserService.getUser()
      return {
        success: true,
        message: "list users",
        data: users,
      }
    } catch (error) {
      console.log(error)
    }
  },
  createUser: async (data: IUser) => {
    try {
      const { username, fullname, email, password } = data
      const userHandler = await UserService.createUser({ username, fullname, email, password })
      return {
        success: true,
        message: "users Created Succesfully",
        data: userHandler,
      }
    } catch (e: unknown) {
      console.error(`error create user: ${e}`)
    }
  }
}


