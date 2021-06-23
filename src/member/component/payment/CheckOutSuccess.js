import {useEffect} from 'react';

function CheckOutSuccess (props){
    useEffect(() => {
        console.log(props.message);
        if (props.message === "") {
            props.saveInfoPaymentAction()
        }
    }, [props.message])
    return (
        <div>Result: {props.message}</div>
    )
}
export default CheckOutSuccess