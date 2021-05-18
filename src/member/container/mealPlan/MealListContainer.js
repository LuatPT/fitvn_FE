import { connect } from 'react-redux';
import getFoodListAction from "../../action/food/getFoodListAction";
import addMealAction from "../../action/mealPlan/addMealAction";
import MealList from '../../component/mealPlan/MealList';

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer,
    message: state.modifyMealReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getFoodListAction: () => dispatch(getFoodListAction),
    addMealAction: (obj) => dispatch(addMealAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealList);