import axios from "axios";
import * as constants from "../../constants";

const paymentWithMoMo = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.api +"/paymentMoMo",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    orderInfo: obj.orderInfo,
                    amount: obj.amount,
                    requestType: obj.requestType
                }
            })
            .then(res => {
                dis(payMoMo(res.data.payUrl));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const payMoMo = (url) => (
    {
        type: 'PAY_MOMO',
        url
    }
)

export default paymentWithMoMo