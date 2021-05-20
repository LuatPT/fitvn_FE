import React from 'react'
import "../../../css/mealList.css";
import MealRsItemContainer from "../../container/mealPlan/MealRsItemContainer";
import {Chart} from 'react-google-charts';

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
    var sumCalo =  listMeal.reduce((sum, obj) => { return sum + obj.foodCalo }, 0);
    var sumProtein = listMeal.reduce((sum, obj) => { return sum + obj.protein }, 0);
    var sumCarb = listMeal.reduce((sum, obj) => { return sum + obj.carb }, 0);
    var sumFat = listMeal.reduce((sum, obj) => { return sum + obj.fat }, 0)
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
                 sumCalo
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
                 sumProtein
                } g
              </td>
              <td>
                {
                 sumCarb
                } g
              </td>
              <td>
                {
                 sumFat
                } g
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="row">
          {/* <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          /> */}
          <Chart
            width={'600px'}
            height={'400px'}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Day',
                'Guardians of the Galaxy',
                'The Avengers',
                'Transformers: Age of Extinction',
              ],
              [1, 37.8, 80.8, 41.8],
              [2, 30.9, 69.5, 32.4],
              [3, 25.4, 57, 25.7],
              [4, 11.7, 18.8, 10.5],
              [5, 11.9, 17.6, 10.4],
              [6, 8.8, 13.6, 7.7],
              [7, 7.6, 12.3, 9.6],
              [8, 12.3, 29.2, 10.6],
              [9, 16.9, 42.9, 14.8],
              [10, 12.8, 30.9, 11.6],
              [11, 5.3, 7.9, 4.7],
              [12, 6.6, 8.4, 5.2],
              [13, 4.8, 6.3, 3.6],
              [14, 4.2, 6.2, 3.4],
            ]}
            options={{
              chart: {
                title: 'Box Office Earnings in First Two Weeks of Opening',
                subtitle: 'in millions of dollars (USD)',
              },
            }}
            rootProps={{ 'data-testid': '3' }}
          />
        </div>
      </div>
    )
  }
}

export default MealList;