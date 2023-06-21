import { SignUp } from '../components/SignUp/SignUp';
import './PagesStyles/Login-Signup.scss';

export const SignupPage = () => (
  <div className="Auth-wrapper">
    <div className="Auth">
      <div className="Auth__banner" />
      <div className="Auth__form">
        <SignUp />
      </div>
    </div>
  </div>
);
