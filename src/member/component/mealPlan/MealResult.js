import React from 'react'
import "../../../css/mealList.css";
import MealRsItemContainer from "../../container/mealPlan/MealRsItemContainer";
import {Chart} from 'react-google-charts';

class MealList extends React.Component{
  // fetch data
  componentDidMount() {
    const {getMealListAction, getCaloMapAction} = this.props;

    if(sessionStorage.getItem("user")){
      var obj = {
        userName: sessionStorage.getItem("user"),
        mealPlanDate: new Date().toISOString().slice(0, 10)
      }
      getCaloMapAction({userName:sessionStorage.getItem("user")});
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
    const {listMeal,listCaloMap} = this.props;
    let dataForMap = [["Calo", "Actually", "Expect"],['Start', 0, 2500]];
    const options = {
    chart: {
        title: "Calo Chart",
        subtitle: "Every day"
      }
    };
    listCaloMap.map(ele=> 
      dataForMap.push([ele.mealPlanDate, ele.totalCalo, 2500])
    )
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
          <Chart
            width={'700px'}
            height={'700px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Macro', 'Calo per Day'],
              ['Protein', sumProtein],
              ['Carb', sumCarb],
              ['Fat', sumFat],
            ]}
            options={{
              title: 'My Daily Macro',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
           <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={dataForMap}
            options={options}
          />
        </div>
      </div>
    )
  }
}

export default MealList;