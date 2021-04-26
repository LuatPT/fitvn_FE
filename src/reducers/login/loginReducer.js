const loginReducer  = (state = "", action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.msg
    default:
      return state;
  }
};
export default loginReducer;