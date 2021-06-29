import { connect } from 'react-redux';
import CheckOutSuccessVnPay from '../../component/payment/CheckOutSuccessVnPay';
import saveInfoPaymentVnPayAction from "../../action/payment/saveInfoPaymentVnPayAction";

const mapStateToProps = (state) =>({
    message: state.saveInfoReducer
} )
const mapDispatchToProps = (dispatch) => ({
    saveInfoPaymentVnPayAction: () => dispatch(saveInfoPaymentVnPayAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutSuccessVnPay);