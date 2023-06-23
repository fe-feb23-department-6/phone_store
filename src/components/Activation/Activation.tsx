import { useNavigate, useParams } from 'react-router-dom';
import './Activation.scss';
import { useContext, useEffect, useState } from 'react';
import { userActivation } from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';
import { logInRes } from '../../types/authTypes';
import { Loader } from '../Loader';

export const Activation = () => {
  const { activateToken } = useParams();

  // eslint-disable-next-line no-console
  console.log('activateToken+++', activateToken);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const {
    setAccessToken,
    user,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const accountActivation = async() => {
    try {
      const response = await userActivation(activateToken);

      setAccessToken(response.accessToken);
      setUser(response.user);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    accountActivation();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        navigate('/account');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className="title">Account activation</h1>
          <p>
            {user && <>
              Welcome, {user.name}!<br/>
              Your account has been successfully activated!
            </>}
          </p>
        </>
      )}
    </>
  );
};
