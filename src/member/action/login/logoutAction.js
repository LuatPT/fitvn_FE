const logoutAction = () => {
    return (dispatch) =>{
        localStorage.removeItem("token");
        sessionStorage.removeItem("user");
        localStorage.setItem("isLogin", false);
        dispatch(logout("Logout sucess!!!"));
    }
}
const logout = (msg) =>{
    let result = {
        type: "LOGOUT",
        msg
    }
    return result
}
export default logoutAction