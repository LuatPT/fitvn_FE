import React from 'react'
import "../../../css/mealList.css";
import * as constants from "../../constants";

let init = [
  {
    foodId: "1",
    foodName: "Rice",
    foodImg: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
    foodCalo: "200",
    foodServing: "100",
    foodType: "Carb",
    foodContent: "Good to build muscle, up size and not good for decrease weight"
  }
];
class MealList extends React.Component{
  state = {
    data: init,
    search: "",
    food: ""
  }
  // fetch data
  componentDidMount() {
    fetch(constants.api+"/foods")
      .then(response => response.json())
      .then(result =>
          this.setState({data: result
          
          })
        )
  }

  addMeal = (food) =>{
    const {addMealAction} = this.props;
    let obj = {
      mealPlanId: 1,
      userName: sessionStorage.getItem("user"),
      foodId: food.foodId,
      amount: "1",
      mealPlanDate: new Date().toISOString().slice(0, 10)
    }
    addMealAction(obj);
  }

  // Search input
  onInput = e => this.setState({ [e.target.id]: e.target.value });
  // Select the wrapper and toggle class 'focus'
  onFocus = e => e.target.parentNode.parentNode.classList.add('focus');
  onBlur = e => e.target.parentNode.parentNode.classList.remove('focus');

  // Select item
  onClickItem = item => this.setState({
    search: "",
    food: item
  });

  render() {
    let { data, search, food } = this.state;
    if (!data) {
      return <p>Loading</p>
    }
    let filtered = data.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="container divExerciseList">
        <h3 className="msgText">{this.props.message}</h3>
        <div className="wrapper">
          <div className="search">
            <input id="search" value={this.state.search} placeholder="Search a food by name..." onChange={this.onInput} onFocus={this.onFocus} onBlur={this.onBlur} autoComplete="off"/>
            <i className="fa fa-search"></i>
          </div>
          {/* Display result: food list */}
          {search.length > 1 && filtered.length > 0 && (
            <ul className="list">
              {
                filtered.map((item,key) => (
                  <li key={key} onClick={() => this.onClickItem(item)}>{item.foodName}</li>
                ))
              }
            </ul>
          )}
        </div>
        {/* Display the item food be choosen */}
        {
          food &&(
            <div className="divRsMeal">
              <div>
                <div className="result">
                  <b className="result__title">Food Type:</b>
                  <p>{food.foodType}</p>
                </div>
                <div className="result">
                  <b className="result__title">Detail:</b>
                  <p>{food.foodContent}</p>
                </div>
              </div>

              <div className="media-image">
                <div className="image-frame">
                  <div className="image-ratio">
                    <img src={food.foodImg} alt="Dont display" className="imgSearchDisp"/>
                  </div>
                  <div className="label label-new">
                    <p><b> {food.foodName}</b></p>
                    <p>{food.foodCalo} calo Per {food.foodServing}g</p>
                  </div>
                </div>
              </div>

              <button type="button" className="btn btn-success btnAddMeal" onClick={() => this.addMeal(food)}>ADD TO MEAL</button>
              <a href="/findMeal"><h4>Go to meal plan</h4></a>
            </div>
          )
        }
      </div>
    )
  }
}

export default MealList;