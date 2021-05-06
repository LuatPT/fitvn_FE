import React from 'react';
import LoginContainer from '../member/container/login/LoginContainer';
import FoodListContainer from '../member/container/food/FoodListContainer';
import ExerciseListContainer from '../member/container/exercise/ExerciseListContainer'
import CaculatorContainer from '../member/container/caculator/CaculatorContainer'

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