import { connect } from 'react-redux';
import addUserInfoAction from "../../action/caculator/addUserInfoAction";
import CaculatorForm from '../../component/caculator/CaculatorForm';

const mapStateToProps = (state) =>({
    message: state.loginReducer
} )
const mapDispatchToProps = (dispatch) => ({
    addUserInfoAction: (obj) => dispatch(addUserInfoAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CaculatorForm);