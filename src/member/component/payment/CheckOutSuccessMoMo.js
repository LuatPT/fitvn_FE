import {useEffect} from 'react';

function CheckOutSuccessMoMo (props){
    useEffect(() => {
        if (props.transID === "") {
            props.saveInfoPaymentMoMoAction();
        }
    }, [props.transID])
    function callRefund(){
        props.getRefundMoMoAction({
            transId: props.transId,
            amount: "1000",
            requestType: "refundMoMoWallet"
        });
    }
    return (
        <div>
            Result: {props.transID} success
            <button onClick={callRefund}>Click to get refund</button>
            {/* {props.objectRefund} */}
        </div>
    )
}
export default CheckOutSuccessMoMo