import axios from "axios";
import * as constants from "../../constants";
import CryptoJS from 'crypto-js'

const paymentWithMoMo = (obj) => {
    var rawSignature = "partnerCode="+constants.momoInfo.partnerCode+"&accessKey="+constants.momoInfo.accessKey+"&requestId="+obj.requestId
    +"&amount="+obj.amount+"&orderId="+obj.orderId+"&orderInfo="+obj.orderInfo+"&returnUrl="+constants.momoInfo.returnUrl
    +"&notifyUrl="+constants.momoInfo.notifyurl+"&extraData="+obj.extraData;

    const crypto = require('crypto');
    var sign = crypto.createHmac('sha256', constants.momoInfo.secretKey)
        .update(rawSignature)
        .digest('hex');
    // Sai phần in HMACSHA256
    // var sign = CryptoJS.HmacSHA256(rawSignature, constants.momoInfo.secretKey).toString(CryptoJS.enc.Hex);
    console.log(sign);
    var dataSend =  {
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
    };
    return (dis) => {
        axios({
                method: 'post',
                url: constants.momoInfo.endPoint,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data:dataSend
            })
            .then(res => {
                console.log(dataSend);
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