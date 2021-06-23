
const saveInfoVnPayReducer = (state = "", action) => {
  switch (action.type) {
    case 'SAVE_INFO_PAYMENT':
      if (action.status === "") {
        return state
      }else{
        return action.status;
      }
    default:
      return state;
  }
};
export default saveInfoVnPayReducer;