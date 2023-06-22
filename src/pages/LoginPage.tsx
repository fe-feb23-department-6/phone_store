import { LogIn } from '../components/LogIn/LogIn';
import './PagesStyles/Login-Signup.scss';

export const LoginPage = () => (
  <div className="Auth-wrapper">
    <div className="Auth">
      <div className="Auth__banner" />
      <div className="Auth__form">
        <LogIn />
      </div>
    </div>
  </div>
);
