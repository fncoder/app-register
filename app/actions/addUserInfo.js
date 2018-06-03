import { ADD_USER_INFO } from 'constants/actionTypes.js';

const addUserInfo = value => ({
  type: ADD_USER_INFO,
  payload: value,
});

export default addUserInfo;
