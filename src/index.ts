import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import Routes from "./routes/user.route";

const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .group('/api', (app) => app.use(Routes))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
