import React from 'react'
import "../../../css/mealList.css";
import MealRsItem from "./MealRsItem";

let init = [
  {
            mealPlanId: "1",
            userId: "1",
            foodId: "3",
            amount: "2",
            foodName: "Whey protein",
            foodImg: "https://vinmec-prod.s3.amazonaws.com/images/20191030_074353_321093_Whey-Protein.max-800x800.jpg",
            foodCalo: "30",
            foodServing: "0",
            foodType: "Protein",
            foodContent: "User after workout ok"
  }
];
class MealList extends React.Component{
  state = {
    data: init,
  }
  // fetch data
  componentDidMount() {
    const {getMealListAction,listMeal} = this.props;
    getMealListAction();
    console.log(listMeal);
  }

  render() {
    const {listMeal} = this.props;
    return (
      <div className="divRsMealList"> 
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Food Name</th>
              <th>Calo</th>
              <th>Serving</th>
              <th>Type</th>
              <th>Content</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              listMeal.map((ele,key) => (
              <MealRsItem keyMeal={key} {...ele} />
              ))
            }
          </tbody>    
        </table>
      </div>
    )
  }
}

export default MealList;