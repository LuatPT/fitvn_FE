
const saveInfoReducer = (state = "", action) => {
  switch (action.type) {
    case 'SAVE_INFO_PAYMENT_VNPAY':
      if (action.status === "") {
        return state
      }else{
        return action.status;
      }
    case 'SAVE_INFO_PAYMENT_MOMO':
      if (action.transId === "") {
        return state
      }else{
        return action.transId;
      }
    default:
      return state;
  }
};
export default saveInfoReducer;