import { connect } from 'react-redux';
import CheckOutSuccessMoMo from '../../component/payment/CheckOutSuccessMoMo';
import saveInfoPaymentMoMoAction from "../../action/payment/saveInfoPaymentMoMoAction";
import getRefundMoMoAction from "../../action/payment/getRefundMoMoAction";

const mapStateToProps = (state) =>({
    transId: state.saveInfoReducer,
    objectRefund : state.getRefunMoMoReducer
} )
const mapDispatchToProps = (dispatch) => ({
    saveInfoPaymentMoMoAction: () => dispatch(saveInfoPaymentMoMoAction()),
    getRefundMoMoAction:(obj) => dispatch(getRefundMoMoAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutSuccessMoMo);