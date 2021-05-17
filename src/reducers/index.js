import { combineReducers } from 'redux';
import listFoodReducer from './food/listFoodReducer';
import listExerciseReducer from './exercise/listExerciseReducer';
import loginReducer from './login/loginReducer';
import logoutReducer from './login/logoutReducer';
import registerReducer from './login/registerReducer';
import listMealReducer from './mealPlan/listMealReducer';
import addMealReducer from './mealPlan/addMealReducer';

export default combineReducers({
    listFoodReducer,
    listExerciseReducer,
    loginReducer,
    logoutReducer,
    registerReducer,
    listMealReducer,
    addMealReducer
});