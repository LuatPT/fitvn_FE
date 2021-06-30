import React, {useEffect,useState} from 'react';
import {useParams} from "react-router-dom";

function CheckOutMoMo (props){
  var {fee} = useParams();

  const [amount, setAmount] = useState(0);
  const [orderInfo, setOrderInfo] = useState("");
  const [requestType, setRequestType] = useState("captureMoMoWallet");

  useEffect( () => {
       if(props.url !== ""){
            window.location.href = props.url ;
        }
    }, [props.url])

  function changeAmount (eve){
      setAmount(parseInt(eve.target.value));
  }

  function changeOrderInfo (eve){
    setOrderInfo(eve.target.value);
  }

  function changeRequestType (eve){
    setRequestType(eve.target.value);
  }
  function checkOutNow(){
        const {paymentWithMoMo} = props;
        var obj = {
          requestType: requestType,
          amount: parseInt(fee) + parseInt(amount),
          orderInfo: orderInfo
        }
        paymentWithMoMo(obj);
    }
  return(
    <div className="container">
       <div className="form-group">
                <label htmlFor="requestType">Hình thức thanh toán </label>
                <select name="requestType" id="requestType" className="form-control" onChange={changeRequestType}>
                    <option value="captureMoMoWallet">MoMo QR</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="Amount">Số tiền </label>
                <input className="form-control" data-val="true" place-holder="The field Amount must be a number." 
                data-val-required="The Amount field is required." id="Amount" name="Amount" type="number" onChange={changeAmount}/>
            </div>
            <div className="form-group">
                <label htmlFor="orderInfo">Nội dung thanh toán</label>
                <textarea className="form-control" cols="20" id="orderInfo" name="orderInfo" rows="2" onChange={changeOrderInfo}></textarea>
            </div>
            <button className="btn btn-success" onClick={checkOutNow}>Thanh Toán</button>
    </div>
  )
}
export default CheckOutMoMo