import {useEffect} from 'react';

function CheckOutSuccessVnPay (props){
    useEffect(() => {
        if (props.message === "") {
            props.saveInfoPaymentVnPayAction()
        }
    }, [props.message])
    return (
        <div>Result: {props.message}</div>
    )
}
export default CheckOutSuccessVnPay