const logoutReducer  = (state = "", action) => {
  switch (action.type) {
    case 'LOGOUT':
      return action.msg
    default:
      return state;
  }
};
export default logoutReducer;