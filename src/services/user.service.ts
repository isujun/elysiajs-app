import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../types/user.entities";

const UserService = {
  createUser: async (user: IUser) => {
    try {
      const newUser = await UserRepository.createUser(user);
      return newUser;
    } catch (error) {
      console.log(error)
    }
  },

  getUserByEmail: async (user_id: number) => {
    try {
      const user = await UserRepository.getUserById(user_id)
      return user
    } catch (error) {
      console.log(error)
    }
  },

  getUserById: async (user_id: number) => {
    try {
      const users = await UserRepository.getUserById(user_id)
      return users
    } catch (error) {
      console.log(error)
    }
  },

  getUser: async () => {
    try {
      const users = await UserRepository.getUser()
      return users
    } catch (error) {
      console.log(error)
    }
  }
}

export default UserService
