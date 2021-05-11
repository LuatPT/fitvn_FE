import { connect } from 'react-redux';
import * as GetFood from "../../action/food/getFoodListAction";
import { bindActionCreators } from 'redux';
import MealPlan from '../../component/mealPlan/MealPlan';

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer
} )
const mapDispatchToProps = (dispatch) => ({
    GetFood: bindActionCreators(GetFood, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MealPlan);