var init = [
            {
            mealPlanId: 1,
            userId: 1,
            foodId: 3,
            amount: 2,
            protein: 30,
            carb: 60,
            fat: 10,
            foodName: "Whey protein",
            foodImg: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
            foodCalo: 30,
            foodServing: 100,
            foodType: "Protein",
            foodContent: "User after workout ok"
        }];
const listMealReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_MEAL_LIST':
      if (action.listMeal === []) {
        return state
      }else{
        return action.listMeal;
      }
    default:
      return state;
  }
};
export default listMealReducer;