
const payVnPayReducer = (state = "", action) => {
  switch (action.type) {
    case 'PAY_VNPAY':
      if (action.url === "") {
        return state
      }else{
        return action.url;
      }
    default:
      return state;
  }
};
export default payVnPayReducer;