const fetchCommentSuccess = (state, action) => {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case 'FETCH_COMMENT_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};


export default fetchCommentSuccess;
