const modifyMealReducer = (state = "", action) => {
  switch (action.type) {
    case 'ADD_MEAL':
        return action.message;
    case 'UPDATE_MEAL':
        return action.message;
    case 'DELETE_MEAL':
          return action.message;
    default:
      return state;
  }
};
export default modifyMealReducer;