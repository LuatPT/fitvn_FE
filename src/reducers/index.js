import { combineReducers } from 'redux';
import listFoodReducer from './food/listFoodReducer';
import listExerciseReducer from './exercise/listExerciseReducer';
import loginReducer from './login/loginReducer';
import logoutReducer from './login/logoutReducer';
import registerReducer from './login/registerReducer';
import listMealReducer from './mealPlan/listMealReducer';
import modifyMealReducer from './mealPlan/modifyMealReducer';
import detailMealReducer from './mealPlan/detailMealReducer';
import getCaloMapReducer from './mealPlan/getCaloMapReducer';

export default combineReducers({
    listFoodReducer,
    listExerciseReducer,
    loginReducer,
    logoutReducer,
    registerReducer,
    listMealReducer,
    modifyMealReducer,
    detailMealReducer,
    getCaloMapReducer
});