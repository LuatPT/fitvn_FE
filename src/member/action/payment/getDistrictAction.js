import axios from "axios";
import * as constants from "../../constants";

const getDistrictAction = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.apiGHN+'/district',
                headers: {
                    token: constants.tokenGHN
                },
                data: {
                    province_id : obj.provinceID
                }
            })
            .then(res => {
                dis(getDistrictList(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getDistrictList = (listDistrict) => (
    {
        type: 'GET_DISTRICT',
        listDistrict
    }
)

export default getDistrictAction