import { connect } from 'react-redux';
import ExerciseList from "../../component/exercise/ExerciseList";

const mapStateToProps = (state) =>({
    listExercise: state.listExerciseReducer
} )
const mapDispatchToProps = (dispatch) => {
    
}

export default connect(mapStateToProps, null)(ExerciseList);