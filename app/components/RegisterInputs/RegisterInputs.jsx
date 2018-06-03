import React from 'react';

const RegisterInputs = (props) => {
  const {
    name, password, repeatPassword, validate, handleChangeName, handleChangePassword, handleChangeRepeatPassword,
  } = props;
  return (
    <React.Fragment>
      <label htmlFor="nickname" className="label-text label">
        Nickname
        <input id="nickname" onChange={handleChangeName} value={name} className="label-nickname__input input" type="text" name="nickname" placeholder="Nickname" />
        <p className="validate validate-nickname">{validate.name || validate.busy || validate.fields ? validate.message : null}</p>
      </label>
      <label htmlFor="password" className="label-password label">
        Password
        <input id="password" onChange={handleChangePassword} value={password} className="label-password__input input" type="password" name="password" placeholder="Password" />
        <p className="validate validate-password">{validate.password || validate.fields ? validate.message : null}</p>
      </label>
      <label htmlFor="repeat-password" className="label-password label">
        <input id="repeat-password" onChange={handleChangeRepeatPassword} value={repeatPassword} className="label-password__input input" type="password" name="repeat-password" placeholder="Repeat password" />
        <p className="validate validate-repeat-password">{validate.password || validate.fields ? validate.message : null}</p>
      </label>
    </React.Fragment>
  );
};

export default RegisterInputs;
