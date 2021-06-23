import axios from "axios";

const saveInfoPaymentAction = () => {
    var urlSaveInfo = window.location.href.replace("checkOutSuccess","saveInfoVnPay").replace("3000", "8080/api/v1")
    return (dis) => {
        axios({
                method: 'get',
                url: urlSaveInfo,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => {
                dis(saveInfoPayment(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const saveInfoPayment = (status) => (
    {
        type: 'SAVE_INFO_PAYMENT',
        status
    }
)

export default saveInfoPaymentAction