import './LogIn.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { userLogin } from '../../api';
import { logInReq } from '../../types/authTypes';
import { AuthContext } from '../../context/AuthContext';

export const usePageError = (initialError: string) => {
  const [submitError, setSubmitError] = useState(initialError);

  useEffect(() => {
    if (!submitError) {
      return;
    }

    const timerId = setTimeout(() => {
      setSubmitError('');
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [submitError]);

  return [submitError, setSubmitError] as const;
};

function validateEmail(value: string) {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }
}

function validatePassword(value: string) {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 6) {
    return 'At least 6 characters';
  }
}

export const LogIn = () => {
  const [submitError, setSubmitError] = usePageError('');
  const {
    accessToken,
    setAccessToken,
    user,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async(
    data: logInReq,
    { setSubmitting, resetForm }: FormikHelpers<logInReq>,
  ) => {
    try {
      const response = await userLogin(data);

      setAccessToken(response.accessToken);
      setUser(response.user);

      resetForm();
      navigate('/account');
    } catch (error) {
      setSubmitError((error as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="Auth-wrapper">
      <div className="Auth">
        <div className="Auth__banner" />
        <div className="Auth__form">
          <>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validateOnMount={true}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form className="box">
                  <h1 className="title">Log in</h1>
                  <div className="field">
                    <label htmlFor="email" className="label">
                      Email
                    </label>

                    <div className="control has-icons-left has-icons-right">
                      <Field
                        validate={validateEmail}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className={cn('input', {
                          'is-danger': touched.email && errors.email,
                        })}
                      />

                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                      </span>

                      {touched.email && errors.email && (
                        <span
                          className="icon is-small is-right has-text-danger"
                        >
                          <i className="fas fa-exclamation-triangle"></i>
                        </span>
                      )}
                    </div>

                    {touched.email && errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Password
                    </label>

                    <div className="control has-icons-left has-icons-right">
                      <Field
                        validate={validatePassword}
                        name="password"
                        type="password"
                        id="password"
                        placeholder="*******"
                        className={cn('input', {
                          'is-danger': touched.password && errors.password,
                        })}
                      />

                      <span className="icon is-small is-left">
                        <i className="fa fa-lock"></i>
                      </span>

                      {touched.password && errors.password && (
                        <span
                          className="icon is-small is-right has-text-danger"
                        >
                          <i className="fas fa-exclamation-triangle"></i>
                        </span>
                      )}
                    </div>

                    {touched.password && errors.password ? (
                      <p className="help is-danger">{errors.password}</p>
                    ) : (
                      <p className="help">At least 6 characters</p>
                    )}
                  </div>
                  <div className="field">
                    <button
                      type="submit"
                      className={cn('button is-success has-text-weight-bold', {
                        'is-loading': isSubmitting,
                      })}
                      disabled={
                        isSubmitting || !!errors.email || !!errors.password
                      }
                    >
                      Log in
                    </button>
                  </div>
                  Do not have an account? <Link to="/signup">Sign up</Link>
                </Form>
              )}
            </Formik>

            {submitError && (
              <p className="notification is-danger is-light">{submitError}</p>
            )}
          </>
        </div>
      </div>
    </div>
  );
};
