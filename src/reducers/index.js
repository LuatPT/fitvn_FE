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
import getProvinceReducer from './payment/getProvinceReducer';
import getDistrictReducer from './payment/getDistrictReducer';
import getWardReducer from './payment/getWardReducer';
import getTransportReducer from './payment/getTransportReducer';
import getFeeReducer from './payment/getFeeReducer';
import payVnPayReducer from './payment/payVnPayReducer';

export default combineReducers({
    listFoodReducer,
    listExerciseReducer,
    loginReducer,
    logoutReducer,
    registerReducer,
    listMealReducer,
    modifyMealReducer,
    detailMealReducer,
    getCaloMapReducer,
    getProvinceReducer,
    getDistrictReducer,
    getWardReducer,
    getTransportReducer,
    getFeeReducer,
    payVnPayReducer
});