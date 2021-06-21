
const getTransportReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRANSPORT':
      if (action.listTransport === []) {
        return state
      }else{
        return action.listTransport;
      }
    default:
      return state;
  }
};
export default getTransportReducer;