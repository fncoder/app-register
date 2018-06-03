import { LOAD_REGISTER_SUCCESS_POPUP } from 'constants/actionTypes.js';

const loadRegisterSuccessPopup = (state, action) => {
  if (state === undefined) {
    return false;
  }

  switch (action.type) {
    case LOAD_REGISTER_SUCCESS_POPUP:
      return action.payload;
    default:
      return state;
  }
};


export default loadRegisterSuccessPopup;
