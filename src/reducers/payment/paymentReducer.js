
const paymentReducer = (state = "", action) => {
  switch (action.type) {
    case 'PAY_VNPAY':
      if (action.url === "") {
        return state
      }else{
        return action.url;
      }
    case 'PAY_MOMO':
      if (action.url === "") {
        return state
      }else{
        return action.url;
      }  
    default:
      return state;
  }
};
export default paymentReducer;