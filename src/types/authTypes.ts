export type signUpReq = {
  name: string;
  email: string;
  password: string;
};

export type user = {
  id: number;
  email: string;
  name: string;
};

export type logInReq = {
  email: string;
  password: string;
};

export type logInRes = {
  user: user;
  accessToken: string;
};
