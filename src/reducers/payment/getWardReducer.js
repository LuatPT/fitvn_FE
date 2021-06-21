const getWardReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_WARD':
      if (action.listWard === []) {
        return state
      }else{
        return action.listWard;
      }
    default:
      return state;
  }
};
export default getWardReducer;