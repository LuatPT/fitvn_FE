import { connect } from 'react-redux';
import getProvinceAction from "../../action/payment/getProvinceAction";
import getDistrictAction from "../../action/payment/getDistrictAction";
import getWardAction from "../../action/payment/getWardAction";
import getTransportTypeAction from "../../action/payment/getTransportTypeAction";
import getFeeAction from "../../action/payment/getFeeAction";
import Payment from '../../component/payment/Payment';

const mapStateToProps = (state) =>({
    listProvince: state.getProvinceReducer,
    listDistrict: state.getDistrictReducer,
    listWard: state.getWardReducer,
    listTransport: state.getTransportReducer,
    fee: state.getFeeReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getProvinceAction: () => dispatch(getProvinceAction()),
    getDistrictAction: (obj) => dispatch(getDistrictAction(obj)),
    getWardAction: (obj) => dispatch(getWardAction(obj)),
    getTransportTypeAction: (obj) => dispatch(getTransportTypeAction(obj)),
    getFeeAction: (obj) => dispatch(getFeeAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment);