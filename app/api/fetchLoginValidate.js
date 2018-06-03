import {
  changeInputStatus,
  fetchValidateSuccess,
  loadHomePage,
} from '../actions';

const fetchClickValidate = obj => (dispatch) => {
  const { name, password } = obj;
  const url = '/login';
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      password,
      loginStatus: true,
    }),
  }).then(res => res.json()).then((res) => {
    if (res.status === 'login') {
      dispatch(changeInputStatus(false));
      dispatch(loadHomePage());
    } else {
      dispatch(changeInputStatus(true));
    }
    dispatch(fetchValidateSuccess(res));
  });
};

const fetchChangeValidate = obj => (dispatch) => {
  const { name, password } = obj;
  const url = '/login';
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      password,
    }),
  }).then(res => res.json()).then((res) => {
    dispatch(fetchValidateSuccess(res));
  });
};

export default { fetchClickValidate, fetchChangeValidate };
