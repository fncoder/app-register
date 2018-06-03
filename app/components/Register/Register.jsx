import React from 'react';
import RegisterInputs from 'containers/RegisterInputs';
import RegisterButtons from 'containers/RegisterButtons';
import RegisterSuccess from 'containers/RegisterSuccess';

const Register = ({ registerSuccess, handleSubmit }) => (
  <React.Fragment>
    <section className="register">
      <div className="wrapper wrapper--register">
        <form className="form-register" onSubmit={handleSubmit}>
          <h2 className="form-register__text">Sign Up</h2>
          <RegisterInputs />
          <RegisterButtons />
        </form>
      </div>
    </section>
    {registerSuccess ? <RegisterSuccess /> : null}
  </React.Fragment>
);

export default Register;
