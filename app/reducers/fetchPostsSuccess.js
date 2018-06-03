import { FETCH_POSTS_SUCCESS } from 'constants/actionTypes.js';

const fetchPostsSuccess = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default fetchPostsSuccess;
