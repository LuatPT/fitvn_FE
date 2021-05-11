import axios from "axios";
import * as constants from "../../constants";

const loginAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "post",
            url: constants.api + "/login",
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            data: obj
        })
        .then(res=>{
            let fullToken = res.data.tokenType+" "+res.data.accessToken;
            localStorage.setItem("token", fullToken);
            localStorage.setItem("isLogin", true);
            dispatch(login("Login sucess!!!"));
        })
        .catch(
            dispatch(login("Login failed!!!"))
        )
    }
}
const login = (msg) =>{
    let result = {
        type: "LOGIN",
        msg
    }
    return result
}
export default loginAction