import { connect } from 'react-redux';
import getMealListAction from "../../action/mealPlan/getMealListAction";
import getCaloMapAction from "../../action/mealPlan/getCaloMapAction";
import MealResult from '../../component/mealPlan/MealResult';

const mapStateToProps = (state) =>({
    listMeal: state.listMealReducer,
    listCaloMap: state.getCaloMapReducer,
    message: state.modifyMealReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getMealListAction: (obj) => dispatch(getMealListAction(obj)),
    getCaloMapAction: (obj) => dispatch(getCaloMapAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(MealResult);