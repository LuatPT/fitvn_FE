import { connect } from 'react-redux';
import getDetailMealAction from "../../action/mealPlan/getDetailMealAction";
import updateMealAction from "../../action/mealPlan/updateMealAction";
import UpdateMealForm from '../../component/mealPlan/UpdateMealForm';

const mapStateToProps = (state) =>({
    meal: state.detailMealReducer,
    message: state.modifyMealReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getDetailMealAction: (mealPlanId) => dispatch(getDetailMealAction(mealPlanId)),
    updateMealAction: (obj) => dispatch(updateMealAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMealForm);