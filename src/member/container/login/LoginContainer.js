import { connect } from 'react-redux';
import LoginForm from "../../component/login/LoginForm";
import loginAction from "../../action/login/loginAction";
import registerAction from "../../action/login/registerAction";

const mapStateToProps = (state) =>({
    messageLogin: state.loginReducer.msg,
    messageRegister: state.registerReducer
} )
const mapDispatchToProps = (dispatch) => ({
    loginAction: (obj) => dispatch(loginAction(obj)),
    registerAction: (obj) => dispatch(registerAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);