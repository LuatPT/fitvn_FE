import axios from 'axios';
import * as constants from '../../constants/index';
export const updateFoodAction = (obj) => {
  return (dispatch, getState) => {
    axios
      .put(constants.api + '/exercises/' + obj.foodId, obj, {
        headers: constants.commonHeader,
      })
      .then((res) => {
        const { getListFood } = getState();
        let listFoodUpdated = getListFood.map((ele) => ele.foodId === obj.foodId ? {...ele, soluong: obj.soluong, tong: (ele.tong / ele.soluong)*obj.soluong} : ele );
        dispatch(getFood([...listFoodUpdated]));
      })
      .catch((err) => console.log(err));
  };
};
const updateFood = (message) => ({
  type: 'UPDATE_FOOD',
  message,
});

const getFood = (listFood) => ({
  type: 'GET_CART',
  listFood,
});