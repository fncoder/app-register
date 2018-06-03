import { ADD_REPEAT_PASSWORD_VALUE } from 'constants/actionTypes.js';

const addRepeatPasswordValue = value => ({
  type: ADD_REPEAT_PASSWORD_VALUE,
  payload: value,
});

export default addRepeatPasswordValue;
