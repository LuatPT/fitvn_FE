import axios from "axios";
import * as constants from "../../constants";

const paymentWithVnPay = (obj) => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.api+'/paymentVNPay',
                headers: {
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

const payVNPay = (message) => (
    {
        type: 'PAY_VNPAY',
        message
    }
)

export default paymentWithVnPay