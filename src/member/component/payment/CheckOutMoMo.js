import React, {useEffect} from 'react';

function CheckOutMoMo (props){
  useEffect( () => {
      props.paymentWithMoMo({
        requestType: "captureMoMoWallet",
        orderId: new Date(),
        amount: 100000,
        orderInfo: "Nap tien",
        requestId: new Date(),
        extraData: "luat@gmail.com"
       })
    }, [])
  return(
    <div>Momo</div>
  )
}
export default CheckOutMoMo