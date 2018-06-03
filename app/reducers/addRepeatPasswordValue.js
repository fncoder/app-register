const addRepeatPasswordValue = (state, action) => {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case 'ADD_REPEAT_PASSWORD_VALUE':
      return action.payload;
    default:
      return state;
  }
};

export default addRepeatPasswordValue;
