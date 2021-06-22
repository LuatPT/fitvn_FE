import { connect } from 'react-redux';
import CheckOut from '../../component/payment/Checkout';

import paymentWithVnPay from "../../action/payment/paymentWithVnPay";

const mapStateToProps = (state) =>({
    message: state.payVnPayReducer,
} )
const mapDispatchToProps = (dispatch) => ({
    paymentWithVnPay: (obj) => dispatch(paymentWithVnPay(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);