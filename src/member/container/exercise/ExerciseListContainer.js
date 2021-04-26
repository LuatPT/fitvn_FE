import { connect } from 'react-redux';
import ExerciseList from "../../component/exercise/ExerciseList";
import * as GetExercise from "../../action/exercise/getExerciseListAction";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) =>({
    listExercise: state.listExerciseReducer
} )
const mapDispatchToProps = (dispatch) => ({
     GetExercise: bindActionCreators(GetExercise, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);