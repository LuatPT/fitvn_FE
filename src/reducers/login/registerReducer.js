const registerReducer  = (state = "", action) => {
  switch (action.type) {
    case 'REGISTER':
      return action.msg
    default:
      return state;
  }
};
export default registerReducer;