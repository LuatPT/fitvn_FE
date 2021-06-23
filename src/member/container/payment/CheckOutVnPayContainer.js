import { connect } from 'react-redux';
import CheckoutVnPay from '../../component/payment/CheckoutVnPay';

import paymentWithVnPay from "../../action/payment/paymentWithVnPay";

const mapStateToProps = (state) =>({
    url: state.payVnPayReducer,
    fee: state.getFeeReducer
} )
const mapDispatchToProps = (dispatch) => ({
    paymentWithVnPay: (obj) => dispatch(paymentWithVnPay(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutVnPay);