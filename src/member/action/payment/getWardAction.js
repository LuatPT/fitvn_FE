import axios from "axios";
import * as constants from "../../constants";

const getWardAction = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.apiGHN +'/ward',
                headers: {
                    token: constants.tokenGHN
                },
                data: {
                    district_id  : obj.districtID
                }
            })
            .then(res => {
                dis(getWardList(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getWardList = (listWard) => (
    {
        type: 'GET_WARD',
        listWard
    }
)

export default getWardAction