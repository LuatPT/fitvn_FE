import React from "react"
import "../../../css/updateMealForm.css";

class UpdateMealForm extends React.Component {
    constructor(props){
        super(props);
        this.mealPlanId = React.createRef();
        this.userName = React.createRef();
        this.foodId = React.createRef();
        this.amount = React.createRef();
    }
    state = {
        mealPlanId: this.props.meal.mealPlanId,
        userName: this.props.meal.userName,
        foodId: this.props.meal.foodId,
        amount: this.props.meal.amount
      }
    componentDidMount=()=>{
        const {getDetailMealAction} = this.props;
        getDetailMealAction(this.props.mealPlan_id)
    }
    onInput = e => this.setState({ [e.target.id]: e.target.value });
    update=()=> {
        const {updateMealAction} = this.props;
        var obj = {
            mealPlanId: this.mealPlanId.current.value,
            userName: this.userName.current.value,
            foodId: this.foodId.current.value,
            amount: this.amount.current.value
        };
        console.log(obj);
        updateMealAction(obj);
    }
    render(){
        const {meal} = this.props;
        console.log(meal);
        if(Object.keys(meal).length === {}){
            return(<div className="divUpdateMeal">Loading...</div>)
        }
        return(
            <div className="divUpdateMeal">
                 <h3>{this.props.message}</h3>
                <div>
                    <label htmlFor="mealPlanId">Meal Plan ID:</label>
                    <input type="number" name="mealPlanId" id="mealPlanId" defaultValue={meal.mealPlanId}  ref={this.mealPlanId} disabled />
                </div>
                <div>
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" name="userName" id="userName" defaultValue={meal.userName} ref={this.userName}/>
                </div>
                <div>
                    <label htmlFor="foodId">Food ID:</label>
                    <input type="number" name="foodId" id="foodId" defaultValue={meal.foodId} ref={this.foodId}/>
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" name="amount" id="amount" defaultValue={meal.amount} ref={this.amount}/>
                </div>
                <button type="button" className="btn btn-success" onClick={() => this.update()}>Update</button>
            </div>
        )
    }
}
export default UpdateMealForm