import { combineReducers } from 'redux';
import listFoodReducer from './food/listFoodReducer';
import listExerciseReducer from './exercise/listExerciseReducer';
import loginReducer from './login/loginReducer';
export default combineReducers({
    listFoodReducer,
    listExerciseReducer,
    loginReducer
});