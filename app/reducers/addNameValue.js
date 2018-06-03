import { ADD_NAME_VALUE } from 'constants/actionTypes.js';

const addNameValue = (state, action) => {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case ADD_NAME_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default addNameValue;
