export interface IUser {
  username: string;
  fullname: string;
  email: string;
  password: string;
}

export interface IResponseUserRegister {
  userId: number;
  username: string;
  fullname: string;
  password: string;
}


export interface IResponseLogin {
  payload: {
    id: number;
    email: string;
    password: string;
  }
  refreshToken: string;
  accessToken: string;
}
