import { connect } from 'react-redux';
import CheckOutSuccessMoMo from '../../component/payment/CheckOutSuccessMoMo';
import saveInfoPaymentMoMoAction from "../../action/payment/saveInfoPaymentMoMoAction";

const mapStateToProps = (state) =>({
    message: state.saveInfoReducer
} )
const mapDispatchToProps = (dispatch) => ({
    saveInfoPaymentMoMoAction: () => dispatch(saveInfoPaymentMoMoAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutSuccessMoMo);