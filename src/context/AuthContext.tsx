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
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    localStorage.setItem('token', accessToken);
  }, [accessToken]);

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
