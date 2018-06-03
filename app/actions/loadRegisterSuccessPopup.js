import { LOAD_REGISTER_SUCCESS_POPUP } from 'constants/actionTypes.js';

const loadRegisterSuccessPopup = value => ({
  type: LOAD_REGISTER_SUCCESS_POPUP,
  payload: value,
});

export default loadRegisterSuccessPopup;
