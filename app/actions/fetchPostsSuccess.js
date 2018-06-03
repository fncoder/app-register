import { FETCH_POSTS_SUCCESS } from 'constants/actionTypes.js';

const fetchPostsSuccess = value => ({
  type: FETCH_POSTS_SUCCESS,
  payload: value,
});

export default fetchPostsSuccess;
