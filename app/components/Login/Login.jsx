import React from 'react';
import LoginInputs from 'containers/LoginInputs';
import LoginButtons from 'components/LoginButtons';

const Login = ({ handleClick, handleSubmit }) => (
  <section className="login">
    <div className="wrapper wrapper--login">
      <form className="form-login" onSubmit={handleSubmit}>
        <p className="form-login__text">Sign In</p>
        <LoginInputs />
        <p className="text-account">You don't have an account yet? <a href="#" className="text-click" onClick={handleClick}>Click here</a></p>
        <LoginButtons />
      </form>
    </div>
  </section>
);

export default Login;
