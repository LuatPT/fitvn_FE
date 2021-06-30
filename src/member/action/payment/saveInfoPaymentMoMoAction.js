import axios from "axios";

const saveInfoPaymentMoMoAction = () => {
    var urlSaveInfo = window.location.href.replace("checkOutSuccessMoMo","saveInfoMoMo").replace("3000", "8080/api/v1");
    return (dis) => {
        axios({
                method: 'get',
                url: urlSaveInfo,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(res => {
                dis(saveInfoPaymentMoMo(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const saveInfoPaymentMoMo = (transId) => (
    {
        type: 'SAVE_INFO_PAYMENT_MOMO',
        transId
    }
)

export default saveInfoPaymentMoMoAction