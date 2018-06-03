import { CHANGE_INPUT_STATUS } from 'constants/actionTypes.js';

const changeInputStatus = (state, action) => {
  if (state === undefined) {
    return false;
  }

  switch (action.type) {
    case CHANGE_INPUT_STATUS:
      return action.payload;
    default:
      return state;
  }
};


export default changeInputStatus;
