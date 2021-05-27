import axios from "axios";
import * as constants from "../../constants";

const getDetailMealAction = (mealPlanId) => {
    return (dispatch) => {
        axios({
                method: 'get',
                url: constants.api+'/mealPlans/'+mealPlanId,
                headers: constants.commonHeader
            })
            .then(res => {
                dispatch(getDetailMeal(res.data));
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