import {
  fetchCommentSuccess,
  changeInputStatus,
  fetchPostsSuccess,
  addTextareaValue,
} from '../actions';

const fetchClickPost = obj => (dispatch) => {
  const { name, textarea } = obj;
  const url = '/post';

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      textarea,
      postStatus: true,
    }),
  }).then(res => res.json()).then((res) => {
    if (res.status === 'post') {
      dispatch(fetchPostsSuccess(res));
      dispatch(addTextareaValue(''));
      dispatch(changeInputStatus(false));
    } else {
      dispatch(fetchCommentSuccess(res));
      dispatch(changeInputStatus(true));
    }
  });
};

const fetchChangePost = obj => (dispatch) => {
  const { name, textarea } = obj;
  const url = '/post';

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      textarea,
    }),
  }).then(res => res.json()).then((res) => {
    dispatch(fetchCommentSuccess(res));
  });
};

export default { fetchClickPost, fetchChangePost };
