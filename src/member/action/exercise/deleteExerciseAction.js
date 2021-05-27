import axios from 'axios';
import * as constants from '../../constants/index';

export const deleteFoodAction = (foodId) => {
  return (dispatch, getState) => {
    axios({
      method: 'delete',
      url: constants.api + '/foods/' + foodId,
      headers: constants.commonHeader
      }).then((res) => {
        const { getListExercise } = getState();
        const indexWantRemove = getListExercise.findIndex(item => item.foodId === foodId);
        getListExercise.splice(indexWantRemove,1);
        dispatch(getFood( [...getListExercise]));
      })
      .catch((err) => console.log(err));
}};
const deleteMeal = (message) => ({
  type: 'DELETE_EXERCISE',
  message,
});

const getMeal = (listMeal) => ({
  type: 'GET_EXERCISE',
  listMeal
});