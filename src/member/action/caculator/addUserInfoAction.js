import axios from "axios";
import * as constants from "../../constants";

const addUserInfoAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "post",
            url: constants.api + "/userInfos",
            // headers: {
            //     "Access-Control-Allow-Origin": "*"
            // },
            data: obj
        })
        .then( res=>{
            dispatch(addUserInfo("Add user info sucess!!!"));
        })
        .catch(
            dispatch(addUserInfo("Add user info failed!!!"))
        )
    }
}
const addUserInfo = (message) =>{
    let result = {
        type: "ADD_USER_INFO",
        message
    }
    return result
}
export default addUserInfoAction