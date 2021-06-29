import React, {useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';

function CheckOutMoMo (props){
  useEffect( () => {
    console.log(props.url);
       if(props.url !== ""){
            window.location.href = props.url ;
        }
    }, [props.url])
  function checkOutNow(){
        const {paymentWithMoMo} = props;
        var obj = {
          requestType: "captureMoMoWallet",
          amount: "100000",
          orderInfo: "Nap tien"
        }
        paymentWithMoMo(obj);
    }   
    console.log(props.url);
  return(
    <div onClick={checkOutNow}>Momo</div>
  )
}
export default CheckOutMoMo