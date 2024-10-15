import { t } from 'elysia';

export const UserCreateModels = t.Object({
  username: t.String({ maxLength: 10, default: "" }),
  fullname: t.String({ maxLength: 100, default: "" }),
  email: t.String({ format: "email", default: "example@yourmail.com" }),
  password: t.String({ default: "12345678" }),
})

export interface UserCreateProps {
  name: string;
  fullname: string;
  password: string
}

