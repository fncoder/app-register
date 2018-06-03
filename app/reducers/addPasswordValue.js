const addPasswordValue = (state, action) => {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case 'ADD_PASSWORD_VALUE':
      return action.payload;
    default:
      return state;
  }
};

export default addPasswordValue;
