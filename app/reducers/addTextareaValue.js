import { ADD_TEXTAREA_VALUE } from 'constants/actionTypes.js';

const addTextareaValue = (state, action) => {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case ADD_TEXTAREA_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default addTextareaValue;
