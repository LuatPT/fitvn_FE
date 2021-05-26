import axios from "axios";
import * as constants from "../../constants";

const getFoodListAction = () => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.api+'/foods',
                headers: {
                    // 'access-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
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

export default getFoodListAction