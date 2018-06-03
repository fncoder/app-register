import {
  changeInputStatus,
  addNameValue,
  addPasswordValue,
  addRepeatPasswordValue,
  loadRegisterSuccessPopup,
  fetchValidateSuccess,
  addUserInfo,
} from '../actions';

const fetchClickValidate = obj => (dispatch) => {
  const { name, password, repeatPassword } = obj;
  const url = '/register';
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      password,
      repeatPassword,
      registerStatus: true,
    }),
  }).then(res => res.json()).then((res) => {
    if (res.status === 'register') {
      dispatch(changeInputStatus(false));
      dispatch(addUserInfo(res));
      dispatch(addNameValue(''));
      dispatch(addPasswordValue(''));
      dispatch(addRepeatPasswordValue(''));
      dispatch(loadRegisterSuccessPopup(true));
      dispatch(fetchValidateSuccess(''));
    } else {
      dispatch(changeInputStatus(true));
      dispatch(fetchValidateSuccess(res));
    }
  });
};

const fetchChangeValidate = obj => (dispatch) => {
  const { name, password, repeatPassword } = obj;
  const url = '/register';
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      password,
      repeatPassword,
    }),
  }).then(res => res.json()).then((res) => {
    dispatch(fetchValidateSuccess(res));
  });
};

export default { fetchClickValidate, fetchChangeValidate };
