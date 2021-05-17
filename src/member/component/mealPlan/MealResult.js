import React from 'react'
import "../../../css/mealList.css";
import MealRsItem from "./MealRsItem";

class MealList extends React.Component{
  // fetch data
  componentDidMount() {
    const {getMealListAction} = this.props;
    getMealListAction();
  }

  render() {
    const {listMeal} = this.props;
    return (
      <div className="divRsMealList">
        <table className="divRsMealListTable table table-bordered">
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
              <MealRsItem key={key} {...ele} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default MealList;