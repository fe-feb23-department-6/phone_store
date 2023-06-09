import './SignUp.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import cn from 'classnames';
import { signUpReq } from '../../types/authTypes';
import { userSignUp } from '../../api/auth';
import { SignUpSaccess } from '../SignUpSaccess/SignUpSaccess';

function validateEmail(value: string) {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }
}

const validatePassword = (value: string) => {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 6) {
    return 'At least 6 characters';
  }
};

export const validateName = (value: string) => {
  if (value.trim() === '') {
    return 'Name is required';
  }

  const namePattern = /^[a-zA-Zа-яА-ЯіІїЇ\s'-]+$/;

  if (!namePattern.test(value.trim())) {
    return 'Name is not valid';
  }
};

export const SignUp = () => {
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(
    data: signUpReq,
    { setSubmitting, resetForm }: FormikHelpers<signUpReq>,
  ) => {
    try {
      await userSignUp(data);
      setIsSuccess(true);
      resetForm();
    } catch (error) {
      setSubmitError((error as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        navigate('/login');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div className="Auth-wrapper">
      {isSuccess ? (
        <SignUpSaccess />
      ) : (
        <div className="Auth">
          <div className="Auth__banner" />
          <div className="Auth__form">
            <>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  password: '',
                }}
                validateOnMount={true}
                onSubmit={handleSubmit}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form className="box">
                    <h1 className="title">Sign up</h1>

                    <div className="field">
                      <label htmlFor="name" className="label">Name</label>

                      <div className="control has-icons-left has-icons-right">
                        <Field
                          validate={validateName}
                          name="name"
                          type="text"
                          id="name"
                          placeholder="e.g. Bob"
                          className={cn('input', {
                            'is-danger': touched.name && errors.name,
                          })}
                        />

                        <span className="icon is-small is-left">
                          <i className="fa fa-user"></i>
                        </span>

                        {touched.name && errors.name && (
                          <span
                            className="icon is-small is-right has-text-danger"
                          >
                            <i className="fas fa-exclamation-triangle"></i>
                          </span>
                        )}
                      </div>

                      {touched.name && errors.name && (
                        <p className="help is-danger">{errors.name}</p>
                      )}
                    </div>

                    <div className="field">
                      <label htmlFor="email" className="label">Email</label>

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
                        className={cn(
                          'button is-success has-text-weight-bold', {
                            'is-loading': isSubmitting,
                          },
                        )}
                        disabled={
                          isSubmitting
                          || !!errors.email
                          || !!errors.password
                          || !!errors.name
                        }
                      >
                        Sign up
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              {submitError
                && <p className="notification is-danger is-light">
                  {submitError}
                </p>}
            </>
          </div>
        </div>
      )}
    </div>
  );
};
