var init =[
    {
       userName: "admin1",
       totalCalo: 1000,
       mealPlanDate: "2021-05-20"
    }
]
const getCaloMapReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_CALO_MAP':
      if (action.listCaloMap === []) {
        return state
      }else{
        return action.listCaloMap;
      }
    default:
      return state;
  }
};
export default getCaloMapReducer;