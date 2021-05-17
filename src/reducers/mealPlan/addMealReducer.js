const addMealReducer = (state = "", action) => {
  switch (action.type) {
    case 'ADD_MEAL':
        return action.message;
    default:
      return state;
  }
};
export default addMealReducer;