import React from 'react';
import LoginContainer from '../member/container/login/LoginContainer';
import FoodListContainer from '../member/container/food/FoodListContainer';
import ExerciseListContainer from '../member/container/exercise/ExerciseListContainer'
import CaculatorContainer from '../member/container/caculator/CaculatorContainer'
import MealListContainer from '../member/container/mealPlan/MealListContainer';
import ExercisePlanContainer from '../member/container/exercisePlan/ExercisePlanContainer';
import MealResultContainer from '../member/container/mealPlan/MealResultContainer';
import UpdateMealContainer from '../member/container/mealPlan/UpdateMealContainer';


class Body extends React.PureComponent{

    render(){
        const {typeComponent} = this.props;
        let component;
        switch (typeComponent) {
            case 'login':
                component = <LoginContainer />
                break;
            case 'food':
                component = <FoodListContainer />;
                break;
            case 'excercise':
                component = <ExerciseListContainer />;
                break;
            case 'caculator':
                component = <CaculatorContainer />;
                break;
            case 'exercisePlan':
                component = <ExercisePlanContainer />;
                break;
            case 'mealPlan':
                component = <MealListContainer />;
                break;
            case 'mealResult':
                 component = <MealResultContainer />;
                break;
            case 'updateMealForm':
                component = <UpdateMealContainer mealPlan_id={this.props.mealPlan_id}/>
            break;
            default:
                component = <LoginContainer />;
                 break;
        }
        return(
            <div className="bodyDiv">
                {
                    component
                }
            </div>
        )
    }
}

export default Body;