import axios from "axios";
import * as constants from "../../constants";

const registerAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "post",
            url: constants.api + "/register",
            // headers: {
            //     "Access-Control-Allow-Origin": "*"
            // },
            data: obj
        })
        .then(res=>{
            let fullToken = res.data.tokenType+" "+res.data.accessToken;
            localStorage.setItem("token", fullToken);
            localStorage.setItem("isLogin", true);
            dispatch(register("Register sucess.Please Login to use all of service!!!"));
        })
        .catch(
            dispatch(register("Login failed!!!"))
        )
    }
}
const register = (msg) =>{
    let result = {
        type: "REGISTER",
        msg
    }
    return result
}
export default registerAction