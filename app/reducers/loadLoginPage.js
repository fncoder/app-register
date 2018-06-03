import { LOAD_LOGIN_PAGE } from 'constants/actionTypes.js';

const loadLoginPage = (state, action) => {
  if (state === undefined) {
    return false;
  }

  switch (action.type) {
    case LOAD_LOGIN_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default loadLoginPage;
