import axios from 'axios';
import * as constants from '../../constants/index';

export const deleteFoodAction = (foodId) => {
  return (dispatch, getState) => {
    axios({
      method: 'delete',
      url: constants.api + '/foods/' + foodId,
      headers: { 
          'access-token': localStorage.getItem('token') 
          }
      }).then((res) => {
        const { getListFood } = getState();
        const indexWantRemove = getListFood.findIndex(item => item.foodId === foodId);
        getListCart.splice(indexWantRemove,1);
        dispatch(getFood( [...getListFood]));
      })
      .catch((err) => console.log(err));
}};
const deleteFood = (message) => ({
  type: 'DELETE_FOOD',
  message,
});

const getFood = (listFood) => ({
  type: 'GET_FOOD',
  listFood,
});