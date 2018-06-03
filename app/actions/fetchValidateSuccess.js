import { FETCH_VALIDATE_SUCCESS } from 'constants/actionTypes.js';

const fetchValidateSuccess = value => ({
  type: FETCH_VALIDATE_SUCCESS,
  payload: value,
});

export default fetchValidateSuccess;
