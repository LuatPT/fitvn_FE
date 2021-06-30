import axios from "axios";
import * as constants from "../../constants";

const getFeeAction = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.apiFee,
                headers: {
                    token: constants.tokenGHN
                },
                data: {
                    service_id   : obj.serviceID,
                    insurance_value: 50000,
                    coupon: "",
                    to_ward_code: obj.wardCode,
                    to_district_id: obj.districtID,
                    from_district_id: constants.defaultStore.districtID,
                    weight: 2000,
                    length: 60,
                    with: 50,
                    height: 50
                }
            })
            .then(res => {
                dis(getFee(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getFee = (fee) => (
    {
        type: 'GET_FEE',
        fee
    }
)

export default getFeeAction