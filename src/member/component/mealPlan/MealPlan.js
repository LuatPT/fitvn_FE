import React from "react";
import MealDetail from "./MealDetail";
import MealList from "./MealList";

class MealPlan extends React.Component{
    render(){
        return(
            <div>
                <MealList />
                <MealDetail />
            </div>
        )
    }
}
export default MealPlan