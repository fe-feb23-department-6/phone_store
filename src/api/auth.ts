import { logInReq, logInRes, signUpReq, user } from '../types/authTypes';
import { client } from '../utils/fetchClient';

export const userSignUp = async(data: signUpReq): Promise<user> => {
  return client.signUp('registration', data);
};

export const userLogin = async(data: logInReq): Promise<logInRes> => {
  return client.logIn('login', data);
};

export const userLogOut = async(): Promise<void> => {
  return client.logOut('logout');
};
