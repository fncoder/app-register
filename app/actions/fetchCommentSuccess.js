import { FETCH_COMMENT_SUCCESS } from 'constants/actionTypes.js';

const fetchCommentSuccess = value => ({
  type: FETCH_COMMENT_SUCCESS,
  payload: value,
});

export default fetchCommentSuccess;
