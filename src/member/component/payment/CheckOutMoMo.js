import React, {useEffect} from 'react';

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
          amount: "1000",
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