import { connect } from 'react-redux';
import getMealListAction from "../../action/mealPlan/getMealListAction";
import MealResult from '../../component/mealPlan/MealResult';

const mapStateToProps = (state) =>({
    listMeal: state.listMealReducer,
    message: state.modifyMealReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getMealListAction: (obj) => dispatch(getMealListAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealResult);