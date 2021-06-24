// export const api = 'http://localhost:3002/api/v1';
export const api = 'http://localhost:8080/api/v1';
export const apiGHN = 'https://online-gateway.ghn.vn/shiip/public-api/master-data';
export const apiTransport = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services';
export const apiFee = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee'
export const tokenGHN = "47dd450d-d244-11eb-8d6a-bebc46395325";

export const momoInfo = {
    endPoint: "https://test-payment.momo.vn/gw_payment/transactionProcessor",
    partnerCode : "MOMO08DT20210623",
    accessKey : "bEGzqKLnc6X72bjR",
    secretKey: "wFOfAnky6dg9LV0avXCswP9D6ajkvn0J",
    notifyUrl: "http://localhost:8080/api/v1/saveInfoMoMo",
    returnUrl: "http://localhost:3000/checkOutMoMoSuccess"
}
export const defaultStore = {
    shopID: 1724802,
    provinceID: 203,
    districtID: 1527,
    wardCode: 40208
};
export const host = 'http://localhost:3000';
