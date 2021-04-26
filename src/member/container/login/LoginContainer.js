import { connect } from 'react-redux';
import LoginForm from "../../component/login/LoginForm";
import loginAction from "../../action/login/loginAction";

const mapStateToProps = (state) =>({
    message: state.loginReducer
} )
const mapDispatchToProps = (dispatch) => ({
    loginAction: (obj) => dispatch(loginAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);