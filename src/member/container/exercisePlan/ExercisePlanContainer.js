import { connect } from 'react-redux';
import * as GetFood from "../../action/food/getFoodListAction";
import ExercisePlan from "../../component/exercisePlan/ExercisePlan";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer
} )
const mapDispatchToProps = (dispatch) => ({
    GetFood: bindActionCreators(GetFood, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePlan);