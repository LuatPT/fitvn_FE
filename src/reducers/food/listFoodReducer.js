var init = { 
  list: [
            {
                id:1,
                name: "Rice",
                image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
                calo: 120,
                serving: 10,
                type: "Carb",
                content: ""
            },
             {
                id:2,
                name: "Potato",
                image: "https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg",
                calo: 200,
                serving: 100,
                type: "Carb",
                content: ""
            },
             {
                id:3,
                name: "Whey",
                image: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
                calo: 0,
                serving: 30,
                type: "Protein",
                content: ""
            },
             {
                id:4,
                name: "Peanut",
                image: "https://www.aboutpeanuts.com/images/com_joomrecipe/cropped-Raw-Shelled-Peanuts.jpg",
                calo: 120,
                serving: 100,
                type: "Fat",
                content: ""
            },
             {
                id:5,
                name: "Salmon Fish",
                image: "https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-full",
                calo: 150,
                serving: 50,
                type: "Protein",
                content: ""
            }
        ]
 };
const listFoodReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_FOOD':
      return action.productObj;
    default:
      return state.list;
  }
};
export default listFoodReducer;