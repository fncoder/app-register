import { ADD_TEXTAREA_VALUE } from 'constants/actionTypes.js';

const addTextareaValue = value => ({
  type: ADD_TEXTAREA_VALUE,
  payload: value,
});

export default addTextareaValue;
