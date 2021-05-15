var init = [
            {
            mealPlanId: "1",
            userId: "1",
            foodId: "3",
            amount: "2",
            foodName: "Whey protein",
            foodImg: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
            foodCalo: "30",
            foodServing: "0",
            foodType: "Protein",
            foodContent: "User after workout ok"
        },
        {
            mealPlanId: "2",
            userId: "1",
            foodId: "2",
            amount: "5",
            foodName: "Salmon Fish",
            foodImg: "https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full",
            foodCalo: "100",
            foodServing: "200",
            foodType: "Protein",
            foodContent: "Is a protein"
        }
        ];
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