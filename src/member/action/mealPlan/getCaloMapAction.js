import axios from "axios";
import * as constants from "../../constants";

const getCaloMapAction = (obj) => {
    return (dispatch) => {
        axios({
                method: 'post',
                url: constants.api+'/getCaloMap',
                data: obj
                // headers: {
                //     // 'access-token': localStorage.getItem('token'),
                //     'Content-Type': 'application/json',
                //     'Access-Control-Allow-Origin': '*',
                //     Accept: 'application/json'
                // }
            })
            .then(res => {
                dispatch(getCaloMap(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getCaloMap = (listCaloMap) => (
    {
        type: 'GET_CALO_MAP',
        listCaloMap
    }
)

export default getCaloMapAction