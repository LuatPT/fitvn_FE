import { connect } from 'react-redux';
import getMealListAction from "../../action/mealPlan/getMealListAction";
import MealResult from '../../component/mealPlan/MealResult';

const mapStateToProps = (state) =>({
    listMeal: state.listMealReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getMealListAction: () => dispatch(getMealListAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(MealResult);