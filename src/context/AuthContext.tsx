/* eslint-disable @typescript-eslint/no-empty-function */
import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { User } from '../types/User';

interface AuthContextData {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextData>({
  accessToken: '',
  setAccessToken: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem('token') || '',
  );
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');

    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('token', accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{
      accessToken,
      setAccessToken,
      user,
      setUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
