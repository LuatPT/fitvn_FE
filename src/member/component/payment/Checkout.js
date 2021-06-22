import '../../../css/payment.css';
import React, {useState} from 'react';

function CheckOut (props) {
    const [amount, setAmount] = useState(props.fee);
    const [bankCode, setBankCode] = useState("NCB");
    const [orderInfo, setOrderInfo] = useState("");
    const [orderType, setOderType] = useState("topup");
    function changeAmount (eve){
        setAmount(parseInt(eve.target.value));
    }
     function changeBankCode (eve){
        setBankCode(eve.target.value);
    }
     function changeOrderInfo (eve){
        setOrderInfo(eve.target.value);
    }
     function changeOrderType (eve){
        setOderType(eve.target.value);
    }

    function checkOutNow(){
        const {paymentWithVnPay} = props;
        var obj = {
            vnp_Amount: amount,
            vnp_BankCode: bankCode,
            vnp_Locale: "vn",
            vnp_OrderInfo: orderInfo,
            vnp_OrderType: orderType
            }
        paymentWithVnPay(obj);
        console.log(props.url);
    }


    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="language">Loại hàng hóa </label>
                <select name="ordertype" id="ordertype" className="form-control" onChange={changeOrderType}>
                    <option value="topup">Nạp tiền điện thoại</option>
                    <option value="billpayment">Thanh toán hóa đơn</option>
                    <option value="fashion">Thời trang</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="Amount">Số tiền</label>
                <input className="form-control" data-val="true" place-holder="The field Amount must be a number." 
                data-val-required="The Amount field is required." id="Amount" name="Amount" type="number" onChange={changeAmount}/>
            </div>
            <div className="form-group">
                <label htmlFor="OrderDescription">Nội dung thanh toán</label>
                <textarea className="form-control" cols="20" id="OrderDescription" name="OrderDescription" rows="2" onChange={changeOrderInfo}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="bankcode">Ngân hàng </label>
                <select name="bankcode" id="bankcode" className="form-control" onChange={changeBankCode}>
                    <option value="NCB">Ngan hang NCB</option>
                    <option value="VNPAYQR">VNPAYQR</option>
                    <option value="VNBANK">LOCAL BANK</option>
                </select>
            </div>
            <img src="https://sandbox.vnpayment.vn/apis/assets/images/bank/ncb_logo.png" width="105px" height="50px" />
            <button className="btn btn-success" onClick={checkOutNow}>Thanh Toán</button>
        </div>
    )
    
}

export default CheckOut