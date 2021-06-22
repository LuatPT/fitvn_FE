import '../../../css/payment.css';
import React from 'react';

class CheckOut extends React.Component{
    async componentDidMount (){
        const {paymentWithVnPay} = this.props;
        await paymentWithVnPay();
    }
    render(){
    return (
        <div className="container">
            {this.props.message}
        </div>
    )
    }
}

export default CheckOut