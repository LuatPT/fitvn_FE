import axios from 'axios';
import * as constants from '../../constants/index';
export const addFoodAction = (obj) => {
  axios.({
    method: 'post',
    url: constants.api + '/foods', obj, 
    headers: constants.commonHeader,
  });
}
