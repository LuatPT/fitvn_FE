import { connect } from 'react-redux';
import FoodList from "../../component/food/FoodList";
import getFoodListAction from "../../action/food/getFoodListAction";

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer
} )
const mapDispatchToProps = (dispatch) => ({
    getFoodListAction: () => dispatch(getFoodListAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);