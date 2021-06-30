import axios from "axios";
import * as constants from "../../constants";

const getMealListAction = (obj) => {
    return (dispatch) => {
        axios({
                method: 'post',
                url: constants.api+'/getMealPlans',
                data: obj,
                headers: constants.commonHeader
            })
            .then(res => {
                dispatch(getMealList(res.data));
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