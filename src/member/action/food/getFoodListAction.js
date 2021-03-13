import axios from "axios";
import * as constants from "../constants";

export const getFoodListAction = (obj) => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.api+'/food/' + obj.foodId,
                header: {
                    'access-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                dis(getFoodList(res.data));
            })
            .catch(err => {
                console.log(error);
            })
    }
}

const getFoodList = (listFood) => (
    {
        type: 'GET_FOOD',
        listFood
    }
)
