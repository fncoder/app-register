import { LOAD_REGISTER_PAGE } from 'constants/actionTypes.js';

const loadRegisterPage = (state, action) => {
  if (state === undefined) {
    return true;
  }

  switch (action.type) {
    case LOAD_REGISTER_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default loadRegisterPage;
