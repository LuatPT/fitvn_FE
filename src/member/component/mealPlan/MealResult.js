import React from 'react'
import "../../../css/mealList.css";
import MealRsItemContainer from "../../container/mealPlan/MealRsItemContainer";

class MealList extends React.Component{
  // fetch data
  componentDidMount() {
    const {getMealListAction} = this.props;
    if(sessionStorage.getItem("user")){
      var obj = {
        userName: sessionStorage.getItem("user"),
        mealPlanDate: new Date().toISOString().slice(0, 10)
      }
      getMealListAction(obj);
    }else{
      alert("Please login !")
    }
  }

  changeDate = (eve) => {
    const {getMealListAction} = this.props;
    if(sessionStorage.getItem("user")){
      var obj = {
        userName: sessionStorage.getItem("user"),
        mealPlanDate: eve.target.value
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
        <input type="date" defaultValue={new Date().toISOString().slice(0, 10)} onBlur={this.changeDate}/>
        <table className="divRsMealListTable table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Food Name</th>
              <th>Energy(kCal)</th>
              <th>Serving(g)</th>
              <th>Amount(serving)</th>
              <th>Protein(g)</th>
              <th>Carb(g)</th>
              <th>Fat(g)</th>
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
          <tfoot>
            <tr>
              <td>Tổng</td>
              <td></td>
              <td>
                {
                 listMeal.reduce((sum, obj) => { return sum + obj.foodCalo }, 0)
                } kCal
              </td>
              <td>
                {
                 listMeal.reduce((sum, obj) => { return sum + obj.foodServing }, 0)
                } g
              </td>
              <td>
                {
                 listMeal.reduce((sum, obj) => { return sum + obj.amount }, 0)
                } serving
              </td>
              <td>
                {
                 listMeal.reduce((sum, obj) => { return sum + obj.protein }, 0)
                } g
              </td>
              <td>
                {
                 listMeal.reduce((sum, obj) => { return sum + obj.carb }, 0)
                } g
              </td>
              <td>
                {
                 listMeal.reduce((sum, obj) => { return sum + obj.fat }, 0)
                } g
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default MealList;