var init = [
            {
                foodId:1,
                foodName: "Rice",
                foodImg: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
                foodCalo: 120,
                foodServing: 10,
                foodType: "Carb",
                foodContent: ""
            },
             {
                foodId:2,
                foodName: "Potato",
                foodImg: "https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg",
                foodCalo: 200,
                foodServing: 100,
                foodType: "Carb",
                foodContent: ""
            },
             {
                foodId:3,
                foodName: "Whey",
                foodImg: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
                foodCalo: 0,
                foodServing: 30,
                foodType: "Protein",
                foodContent: ""
            },
             {
                foodId:4,
                foodName: "Peanut",
                foodImg: "https://www.aboutpeanuts.com/images/com_joomrecipe/cropped-Raw-Shelled-Peanuts.jpg",
                foodCalo: 120,
                foodServing: 100,
                foodType: "Fat",
                foodContent: ""
            },
             {
                foodId:5,
                foodName: "Salmon Fish",
                foodImg: "https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full",
                foodCalo: 150,
                foodServing: 50,
                foodType: "Protein",
                foodContent: ""
            }
        ];
const listFoodReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_FOOD':
      if (action.listFood === []) {
        return state
      }else{
      return action.listFood;
      }
    default:
      return state;
  }
};
export default listFoodReducer;