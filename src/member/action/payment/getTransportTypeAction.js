import axios from "axios";
import * as constants from "../../constants";

const getTransportTypeAction = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.apiTransport,
                headers: {
                    token: constants.tokenGHN
                },
                data: {
                    shop_id : constants.defaultStore.shopID,
                    from_district : constants.defaultStore.districtID,
                    to_district : obj.districtID
                }
            })
            .then(res => {
                dis(getTransport(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getTransport = (listTransport) => (
    {
        type: 'GET_TRANSPORT',
        listTransport
    }
)

export default getTransportTypeAction