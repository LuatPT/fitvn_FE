import axios from "axios";
import * as constants from "../../constants";

const getRefundMoMoAction = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.api +"/refundMoMo",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    transId: obj.transId,
                    amount: obj.amount,
                    requestType: obj.requestType
                }
            })
            .then(res => {
                console.log(res.data);
                dis(getRefundMoMo(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getRefundMoMo = (objRefund) => (
    {
        type: 'GET_REFUND_MOMO',
        objRefund
    }
)

export default getRefundMoMoAction