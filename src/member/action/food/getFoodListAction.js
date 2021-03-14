import axios from "axios";
import * as constants from "../../constants";

export const getFoodListAction = () => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.api+'/foods',
                header: {
                    // 'access-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', 
                    Accept: 'application/json'
                }
            })
            .then(res => {
                // console.log(res.data.data);
                dis(getFoodList(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getFoodList = (listFood) => (
    {
        type: 'GET_FOOD',
        listFood
    }
)
