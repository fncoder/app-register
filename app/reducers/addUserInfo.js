const addUserInfo = (state = undefined, action) => {
  switch (action.type) {
    case 'ADD_USER_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default addUserInfo;
