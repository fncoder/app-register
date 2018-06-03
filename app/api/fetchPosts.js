import { fetchPostsSuccess } from '../actions';

const fetchPosts = () => (dispatch) => {
  const url = '/post';
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json()).then((res) => {
    if (res.length > 0) {
      res.forEach((value, index) => {
        dispatch(fetchPostsSuccess(value));
      });
    }
  });
};

export default fetchPosts;
