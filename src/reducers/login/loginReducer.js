const loginReducer  = (state = "", action) => {
  switch (action.type) {
    case 'LOGIN':
      return action
    default:
      return state;
  }
};
export default loginReducer;