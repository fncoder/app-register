const fetchValidateSuccess = (state, action) => {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case 'FETCH_VALIDATE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};


export default fetchValidateSuccess;
