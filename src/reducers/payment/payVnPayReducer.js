
const payVnPayReducer = (state = "", action) => {
  switch (action.type) {
    case 'PAY_VNPAY':
      if (action.message === "") {
        return state
      }else{
        return action.message;
      }
    default:
      return state;
  }
};
export default payVnPayReducer;