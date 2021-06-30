
const getRefunMoMoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_REFUND_MOMO':
      if (action.objRefund === {}) {
        return state
      }else{
        return action.objRefund;
      }
    default:
      return state;
  }
};
export default getRefunMoMoReducer;