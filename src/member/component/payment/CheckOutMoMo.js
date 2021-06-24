import React, {useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';

function CheckOutMoMo (props){
  useEffect( () => {
      props.paymentWithMoMo({
        requestType: "captureMoMoWallet",
        orderId: uuidv1(),
        amount: "100000",
        orderInfo: "Nap tien",
        requestId: uuidv1(),
        extraData: "email=luat@gmail.com"
       })
    }, [])
  return(
    <div>Momo</div>
  )
}
export default CheckOutMoMo