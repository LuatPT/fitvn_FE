import { connect } from 'react-redux';
import getFoodListAction from "../../action/food/getFoodListAction";
import addMealToListAction from "../../action/mealPlan/addMealToListAction";
import MealList from '../../component/mealPlan/MealList';

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getFoodListAction: () => dispatch(getFoodListAction),
    addMealToListAction: (obj) => dispatch(addMealToListAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealList);