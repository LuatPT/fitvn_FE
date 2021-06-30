import axios from "axios";
import * as constants from "../../constants";

const loginAction = (obj) => {
    return (dispatch) =>{
        axios({
            method: "post",
            url: constants.api + "/login",
            headers: constants.commonHeader,
            data: obj
        })
        .then(res=>{
            let fullToken = res.data.tokenType+" "+res.data.accessToken;
            localStorage.setItem("token", fullToken);
            // save username to session
            sessionStorage.setItem("user", obj.username);
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