import { LOAD_LOGIN_PAGE } from 'constants/actionTypes.js';

let value = false;

const loadLoginPage = () => {
  value = !value;

  return {
    type: LOAD_LOGIN_PAGE,
    payload: value,
  };
};

export default loadLoginPage;
