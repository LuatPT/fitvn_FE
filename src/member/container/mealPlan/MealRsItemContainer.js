import { connect } from 'react-redux';
import deleteMealAction from "../../action/mealPlan/deleteMealAction";
import MealRsItem from '../../component/mealPlan/MealRsItem';

const mapStateToProps = (state) =>({
    listMeal: state.listMealReducer
} )
const mapDispatchToProps = (dispatch) => ({
    deleteMealAction: (mealPlanId) => dispatch(deleteMealAction(mealPlanId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealRsItem);