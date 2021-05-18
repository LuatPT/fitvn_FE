import axios from 'axios';
import * as constants from '../../constants/index';

const deleteMealAction = (mealPlanId) => {
  return (dispatch, getState) => {
    axios({
      method: 'delete',
      url: constants.api + '/mealPlans/' + mealPlanId,
      headers: {
          'Authorization': localStorage.getItem('token')
          }
      }).then((res) => {
        const { listMealReducer } = getState();
        const indexWantRemove = listMealReducer.findIndex(item => item.mealPlanId === mealPlanId);
        listMealReducer.splice(indexWantRemove,1);
        dispatch(deleteMeal("Delete meal success!!!"));
        dispatch(getMeal( [...listMealReducer]));
      })
      .catch(dispatch(deleteMeal("Delete meal failed!!!")));
}};
const deleteMeal= (message)=>({
  type: 'DELETE_MEAL',
  message
})
const getMeal = (listMeal) => ({
  type: 'GET_MEAL_LIST',
  listMeal,
});
export default deleteMealAction