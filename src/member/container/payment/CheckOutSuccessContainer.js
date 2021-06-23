import { connect } from 'react-redux';
import CheckOutSuccess from '../../component/payment/CheckOutSuccess';
import saveInfoPaymentAction from "../../action/payment/saveInfoPaymentAction";

const mapStateToProps = (state) =>({
    message: state.saveInfoVnPayReducer
} )
const mapDispatchToProps = (dispatch) => ({
    saveInfoPaymentAction: () => dispatch(saveInfoPaymentAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutSuccess);