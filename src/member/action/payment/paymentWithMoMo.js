import axios from "axios";
import * as constants from "../../constants";
import CryptoJS from 'crypto-js';

const paymentWithMoMo = (obj) => {
    const sign = CryptoJS.HmacSHA1(constants.momoInfo.secretKey, "partnerCode="+constants.momoInfo.partnerCode+"&accessKey="+constants.momoInfo.accessKey+"&requestId="+obj.requestId+"&amount="+obj.amount+"&orderId="+obj.orderId+"&orderInfo="+obj.orderInfo+"&returnUrl="+constants.momoInfo.returnUrl+"&notifyUrl="+constants.momoInfo.notifyurl+"&extraData="+obj.extraData, "sha256");
    console.log(sign);
    return (dis) => {
        axios({
                method: 'post',
                url: constants.momoInfo.endPoint,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    accessKey: constants.momoInfo.accessKey,
                    partnerCode: constants.momoInfo.partnerCode,
                    requestType: obj.requestType,
                    notifyUrl: constants.momoInfo.notifyUrl,
                    returnUrl: constants.momoInfo.returnUrl,
                    orderId: obj.orderId,
                    amount: obj.amount,
                    orderInfo: obj.orderInfo,
                    requestId: obj.requestId,
                    extraData: obj.extraData,
                    signature: sign
                }
            })
            .then(res => {
                console.log(res);
                dis(payMoMo(res.data));
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