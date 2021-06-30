import {useEffect} from 'react';

function CheckOutSuccessMoMo (props){
    useEffect(() => {
        if (props.transId === "") {
            props.saveInfoPaymentMoMoAction();
        }
    }, [props.transId])
    function callRefund(){
        props.getRefundMoMoAction({
            transId: props.transId.toString(),
            amount: "1000",
            requestType: "refundMoMoWallet"
        });
    }
    return (
        <div>
            Result: {props.transId} success
            <button className="btn btn-danger" onClick={callRefund}>Click to get refund</button>
            {/* {props.objectRefund} */}
        </div>
    )
}
export default CheckOutSuccessMoMo