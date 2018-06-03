import React from 'react';

const RegisterButtons = ({ handleClick }) => (
  <React.Fragment>
    <button type="submit" className="btn btn--register"><span className="btn-name">Register</span></button>
    <button type="button" onClick={handleClick} className="btn btn--login"><span className="btn-name">Login</span></button>
  </React.Fragment>
);

export default RegisterButtons;
