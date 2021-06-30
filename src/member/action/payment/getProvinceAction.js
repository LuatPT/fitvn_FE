import axios from "axios";
import * as constants from "../../constants";

const getProvinceAction = () => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.apiGHN+'/province',
                headers: {
                    token: constants.tokenGHN
                }
            })
            .then(res => {
                dis(getProvinceList(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getProvinceList = (listProvince) => (
    {
        type: 'GET_PROVINCE',
        listProvince
    }
)

export default getProvinceAction