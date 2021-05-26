import axios from "axios";
import * as constants from "../../constants";

const updateMealAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "PUT",
            url: constants.api + "/mealPlans/"+ obj.mealPlanId,
            // headers: {
            //     "Access-Control-Allow-Origin": "*"
            // },
            data: obj
        })
        .then( res=>{
            dispatch(updateMeal("Update meal sucess!!!"));
        })
        .catch(
            dispatch(updateMeal("Update meal failed!!!"))
        )
    }
}
const updateMeal = (message) =>{
    let result = {
        type: "UPDATE_MEAL",
        message
    }
    return result
}
export default updateMealAction