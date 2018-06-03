import { ADD_NAME_VALUE } from 'constants/actionTypes.js';

const addNameValue = value => ({
  type: ADD_NAME_VALUE,
  payload: value,
});

export default addNameValue;
