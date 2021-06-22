import { connect } from 'react-redux';
import CheckOut from '../../component/payment/Checkout';

import paymentWithVnPay from "../../action/payment/paymentWithVnPay";

const mapStateToProps = (state) =>({
    url: state.payVnPayReducer,
    fee: state.getFeeReducer
} )
const mapDispatchToProps = (dispatch) => ({
    paymentWithVnPay: (obj) => dispatch(paymentWithVnPay(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);