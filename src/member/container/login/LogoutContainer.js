import { connect } from 'react-redux';
import Logout from "../../component/login/Logout";
import logoutAction from "../../action/login/logoutAction";

const mapStateToProps = (state) =>({
    message: state.logoutReducer
} )
const mapDispatchToProps = (dispatch) => ({
    logoutAction: (obj) => dispatch(logoutAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);