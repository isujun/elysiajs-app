import Elysia, { t } from "elysia";
import { UserController } from "../controllers/user.controller";
import { IUser } from "../types/user.entities";


const Routes = new Elysia({ prefix: '/users' })
  .get("/", () => UserController.getUser())
  .post("/", ({ body }) => UserController.createUser(body as IUser), {
    body: t.Object({
      username: t.String({
        minLength: 3,
        maxLength: 10,
      }),
      fullname: t.String({
        minLength: 3,
        maxLength: 100,
      }),
      email: t.String({
        minLength: 10,
        maxLength: 200,
      }),
      password: t.String({
        minLength: 8,
        maxLength: 200,
      })
    })
  })
export default Routes
