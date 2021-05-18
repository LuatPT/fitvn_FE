import axios from "axios";
import * as constants from "../../constants";

const getDetailMealAction = (mealPlanId) => {
    return (dispatch) => {
        axios({
                method: 'get',
                url: constants.api+'/mealPlans/'+mealPlanId,
                // headers: {
                //     // 'access-token': localStorage.getItem('token'),
                //     'Content-Type': 'application/json',
                //     'Access-Control-Allow-Origin': '*',
                //     Accept: 'application/json'
                // }
            })
            .then(res => {
                dispatch(getDetailMeal(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getDetailMeal = (meal) => (
    {
        type: 'GET_DETAIL_MEAL',
        meal
    }
)

export default getDetailMealAction