import { combineReducers } from 'redux';
import listFoodReducer from './food/listFoodReducer';
import listExerciseReducer from './exercise/listExerciseReducer';
export default combineReducers({
    listFoodReducer,
    listExerciseReducer
});