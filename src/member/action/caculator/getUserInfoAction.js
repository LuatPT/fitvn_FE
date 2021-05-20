import axios from "axios";
import * as constants from "../../constants";

const getUserInfoAction = (obj) => {
    return (dispatch) => {
        axios({
                method: 'post',
                url: constants.api+'/getUserInfos',
                data: obj
                // headers: {
                //     // 'access-token': localStorage.getItem('token'),
                //     'Content-Type': 'application/json',
                //     'Access-Control-Allow-Origin': '*',
                //     Accept: 'application/json'
                // }
            })
            .then(res => {
                dispatch(getUserInfo(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getUserInfo = (meal) => (
    {
        type: 'GET_USER_INFO',
        meal
    }
)

export default getUserInfoAction