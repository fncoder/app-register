import React from 'react';

const LoginInputs = (props) => {
  const {
    name, password, validate, handleChangeName, handleChangePassword,
  } = props;
  return (
    <React.Fragment>
      <label htmlFor="nickname" className="label-text label">
          Nickname
        <input id="nickname" onChange={handleChangeName} value={name} className="label-nickname__input input" type="text" placeholder="Nickname" />
        <p className="validate validate-nickname">{validate.name || validate.fields ? validate.message : null}</p>
      </label>
      <label htmlFor="password" className="label-password label">
          Password
        <input id="password" onChange={handleChangePassword} value={password} className="label-password__input input" type="password" placeholder="Password" />
        <p className="validate validate-password">{validate.password || validate.fields ? validate.message : null}</p>
      </label>
    </React.Fragment>
  );
};

export default LoginInputs;
