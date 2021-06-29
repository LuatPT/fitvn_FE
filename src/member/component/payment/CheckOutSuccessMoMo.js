import {useEffect} from 'react';

function CheckOutSuccessMoMo (props){
    useEffect(() => {
        console.log(props.message);
        if (props.message === "") {
            props.saveInfoPaymentMoMoAction()
        }
    }, [props.message])
    console.log(props.message);
    return (
        <div>Result: {props.message}</div>
    )
}
export default CheckOutSuccessMoMo