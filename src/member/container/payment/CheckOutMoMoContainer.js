import { connect } from 'react-redux';
import CheckOutMoMo from '../../component/payment/CheckOutMoMo';

import paymentWithMoMo from "../../action/payment/paymentWithMoMo";

const mapStateToProps = (state) =>({
    url: state.paymentReducer,
    fee: state.getFeeReducer
} )
const mapDispatchToProps = (dispatch) => ({
    paymentWithMoMo: (obj) => dispatch(paymentWithMoMo(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutMoMo);