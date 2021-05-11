import { combineReducers } from 'redux';
import listFoodReducer from './food/listFoodReducer';
import listExerciseReducer from './exercise/listExerciseReducer';
import loginReducer from './login/loginReducer';
import logoutReducer from './login/logoutReducer';

export default combineReducers({
    listFoodReducer,
    listExerciseReducer,
    loginReducer,
    logoutReducer
});