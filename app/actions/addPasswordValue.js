import { ADD_PASSWORD_VALUE } from 'constants/actionTypes.js';

const addPasswordValue = value => ({
  type: ADD_PASSWORD_VALUE,
  payload: value,
});

export default addPasswordValue;
