import React from 'react'
import "../../../css/mealList.css";
import MealRsItemContainer from "../../container/mealPlan/MealRsItemContainer";

class MealList extends React.Component{
  // fetch data
  componentDidMount() {
    const {getMealListAction} = this.props;
    if(sessionStorage.getItem("user")){
      var obj = {
        userName: sessionStorage.getItem("user")
      }
      getMealListAction(obj);
    }else{
      alert("Please login !")
    }
  }

  render() {
    const {listMeal} = this.props;
    return (
      <div className="divRsMealList">
        <h3>{this.props.message}</h3>
        <table className="divRsMealListTable table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Food Name</th>
              <th>Calo</th>
              <th>Serving</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Content</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              listMeal.map((ele,key) => (
              <MealRsItemContainer key={key} {...ele} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default MealList;