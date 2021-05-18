import axios from "axios";
import * as constants from "../../constants";

const getMealListAction = (obj) => {
    return (dispatch) => {
        axios({
                method: 'post',
                url: constants.api+'/getMealPlans',
                data: obj
                // headers: {
                //     // 'access-token': localStorage.getItem('token'),
                //     'Content-Type': 'application/json',
                //     'Access-Control-Allow-Origin': '*',
                //     Accept: 'application/json'
                // }
            })
            .then(res => {
                dispatch(getMealList(res.data.data));
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