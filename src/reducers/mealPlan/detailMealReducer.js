const detailMealReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DETAIL_MEAL':
      if (action.meal === {}) {
        return state
      }else{
        return action.meal;
      }
    default:
      return state;
  }
};
export default detailMealReducer;