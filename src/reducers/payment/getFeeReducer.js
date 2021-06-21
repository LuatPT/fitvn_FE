
const getFeeReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_FEE':
      if (action.fee === 0) {
        return state
      }else{
        return action.fee;
      }
    default:
      return state;
  }
};
export default getFeeReducer;