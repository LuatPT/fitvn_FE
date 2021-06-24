import axios from "axios";
import * as constants from "../../constants";
import * as crypto from 'crypto';

const paymentWithMoMo = (obj) => {
    const sign = 
        crypto.createHmac('sha256', constants.momoInfo.secretKey)
        .update("partnerCode="+constants.momoInfo.partnerCode+"&accessKey="+constants.momoInfo.accessKey+"&requestId="+obj.requestId
        +"&amount="+obj.amount+"&orderId="+obj.orderId+"&orderInfo="+obj.orderInfo+"&returnUrl="+constants.momoInfo.returnUrl
        +"&notifyUrl="+constants.momoInfo.notifyurl+"&extraData="+obj.extraData)
        .digest('hex');
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
                console.log({
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
                });
                console.log(res.data);
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