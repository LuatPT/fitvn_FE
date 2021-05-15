import axios from "axios";
import * as constants from "../../constants";

const getMealListAction = () => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.api+'/mealPlans',
                headers: {
                    // 'access-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', 
                    Accept: 'application/json'
                }
            })
            .then(res => {
                dis(getMealList(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getMealList = (listMeal) => (
    {
        type: 'GET_MEAL_LIST',
        listMeal
    }
)

export default getMealListAction