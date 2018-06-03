import { LOAD_HOME_PAGE } from 'constants/actionTypes.js';

const loadHomePage = (state, action) => {
  if (state === undefined) {
    return false;
  }

  switch (action.type) {
    case LOAD_HOME_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default loadHomePage;
