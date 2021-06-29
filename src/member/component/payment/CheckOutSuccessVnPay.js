import {useEffect} from 'react';

function CheckOutSuccessVnPay (props){
    useEffect(() => {
        console.log(props.message);
        if (props.message === "") {
            props.saveInfoPaymentVnPayAction()
        }
    }, [props.message])
    return (
        <div>Result: {props.message}</div>
    )
}
export default CheckOutSuccessVnPay