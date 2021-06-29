import axios from "axios";

const saveInfoPaymentVnPayAction = () => {
    var urlSaveInfo = window.location.href.replace("checkOutSuccessVnPay","saveInfoVnPay").replace("3000", "8080/api/v1")
    return (dis) => {
        axios({
                method: 'get',
                url: urlSaveInfo,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => {
                dis(saveInfoPaymentVnPay(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const saveInfoPaymentVnPay = (status) => (
    {
        type: 'SAVE_INFO_PAYMENT_VNPAY',
        status
    }
)

export default saveInfoPaymentVnPayAction