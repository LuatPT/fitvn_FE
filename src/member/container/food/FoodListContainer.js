import { connect } from 'react-redux';
import FoodList from "../../component/food/FoodList";
import * as GetFood from "../../action/food/getFoodListAction";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer
} )
const mapDispatchToProps = (dispatch) => ({
    GetFood: bindActionCreators(GetFood, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);