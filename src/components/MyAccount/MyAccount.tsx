import { useContext, useEffect, useState } from 'react';
import './MyAccount.scss';
import cn from 'classnames';
import { userLogOut } from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    accessToken,
    setAccessToken,
    user,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async() => {
    try {
      setIsLoading(true);
      await userLogOut();
      setAccessToken('');
      setUser(null);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <h1 className="title">My Account</h1>
      <p className="sorry">
        Coming soon! This page is currently being developed.
      </p>

      <button
        type="submit"
        className={cn('button is-success has-text-weight-bold', {
          'is-loading': isLoading,
        })}
        onClick={handleLogOut}
      >
        Log out
      </button>
    </>
  );
};
