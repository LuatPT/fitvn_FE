import axios from "axios";
import * as constants from "../../constants";

const paymentWithVnPay = (obj) => {
    return (dis) => {
        axios({
                method: 'post',
                url: constants.api+'/paymentVNPay',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    vnp_Amount: obj.vnp_Amount,
                    vnp_BankCode: obj.vnp_BankCode,
                    vnp_Locale: obj.vnp_Locale,
                    vnp_OrderInfo: obj.vnp_OrderInfo,
                    vnp_OrderType: obj.vnp_OrderType
                }
            })
            .then(res => {
                dis(payVNPay(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const payVNPay = (url) => (
    {
        type: 'PAY_VNPAY',
        url
    }
)

export default paymentWithVnPay