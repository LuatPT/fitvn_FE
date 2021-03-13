import { connect } from 'react-redux';
import FoodList from "../../component/food/FoodList";

const mapStateToProps = (state) =>({
    listFood: state.listFoodReducer
} )
const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, null)(FoodList);