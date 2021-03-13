import axios from 'axios';
import * as constants from '../../constants/index';
export const addFoodAction = (obj) => {
  axios.({
    method: 'post',
    url: constants.api + '/carts', obj, 
    headers: { 
      'access-token': localStorage.getItem('token') 
    }
  });
}
