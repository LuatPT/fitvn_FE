import axios from "axios";
import * as constants from "../../constants";

const getCaloMapAction = (obj) => {
    return (dispatch) => {
        axios({
                method: 'post',
                url: constants.api+'/getCaloMap',
                data: obj,
                headers: constants.commonHeader,
            })
            .then(res => {
                dispatch(getCaloMap(res.data));
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