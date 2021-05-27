import axios from "axios";
import * as constants from "../../constants";

const addMealAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "post",
            url: constants.api + "/mealPlans",
            headers: constants.commonHeader,
            data: obj
        })
        .then( res=>{
            dispatch(addMeal("Add meal sucess!!!"));
        })
        .catch(
            dispatch(addMeal("Add meal failed!!!"))
        )
    }
}
const addMeal = (message) =>{
    let result = {
        type: "ADD_MEAL",
        message
    }
    return result
}
export default addMealAction