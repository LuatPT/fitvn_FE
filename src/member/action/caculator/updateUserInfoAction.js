import axios from "axios";
import * as constants from "../../constants";

const updateUserInfoAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "put",
            url: constants.api + "/userInfos/"+ obj.infoId,
            headers: constants.commonHeader,
            data: obj
        })
        .then( res=>{
            dispatch(updateUserInfo("Update user info sucess!!!"));
        })
        .catch(
            dispatch(updateUserInfo("Update user info failed!!!"))
        )
    }
}
const updateUserInfo = (message) =>{
    let result = {
        type: "UPDATE_USER_INFO",
        message
    }
    return result
}
export default updateUserInfoAction