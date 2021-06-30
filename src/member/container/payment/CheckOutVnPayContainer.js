import { connect } from 'react-redux';
import CheckOutVnPay from '../../component/payment/CheckOutVnPay';

import paymentWithVnPay from "../../action/payment/paymentWithVnPay";

const mapStateToProps = (state) =>({
    url: state.paymentReducer,
    fee: state.getFeeReducer
} )
const mapDispatchToProps = (dispatch) => ({
    paymentWithVnPay: (obj) => dispatch(paymentWithVnPay(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutVnPay);