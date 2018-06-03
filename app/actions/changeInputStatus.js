import { CHANGE_INPUT_STATUS } from 'constants/actionTypes.js';

const changeInputStatus = value => ({
  type: CHANGE_INPUT_STATUS,
  payload: value,
});

export default changeInputStatus;
