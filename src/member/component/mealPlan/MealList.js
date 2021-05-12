import React from 'react'
import "../../../css/mealList.css";

let dummyData = [
  {
      mealPlanId: "1",
      userId: "1",
      foodId: "1",
      amount: "2",
      foodName: "Rice",
      foodImg: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
      foodCalo: "200",
      foodServing: "100",
      foodType: "Carb",
      foodContent: "Good to build muscle, up size and not good for decrease weight"
  },
  {
    mealPlanId: "2",
    userId: "1",
    foodId: "1",
    amount: "2",
    foodName: "Rice Rpppp",
    foodImg: "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/how-to-cook-rice.jpg",
    foodCalo: "200",
    foodServing: "100",
    foodType: "Carb",
    foodContent: "Good to build muscle, up size and not good for decrease weight"
  },
];
class MealList extends React.Component{
  state = {
    data: dummyData,
    search: "",
    food: ""
  }
  // fetch data
  componentDidMount() {
    fetch("http://localhost:8080/api/v1/foods")
      .then(res => this.setState({data: res.data}))
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
    console.log(data);
    if (!data) {
      return <p>Loading</p>
    }
    let filtered = data.filter(item => item.foodName.toLowerCase().includes(search.toLowerCase()));
    console.log(filtered);
    return (
      <div>
        <div className="wrapper">
          <div className="search">
            <input
              id="search"
              value={this.state.search}
              placeholder="Search a food by name..."
              onChange={this.onInput}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autoComplete="off"
            />
            <i className="fas fa-search"></i>
          </div>
          {search.length > 1 && filtered.length > 0 && (
            <ul className="list">
              {filtered.map((item,key) => (
                <li key={key} onClick={() => this.onClickItem(item)}>{item.foodName}</li>
              ))}
            </ul>
          )}
        </div>
        {food && (
          <div className="divRsMeal">
            <p className="result">
              <b>Food:</b>
              {food.foodName}
            </p>
            <p className="result">
              <b>Calo:</b>
              {food.mealPlanId}
            </p>
            <button type="button" className="btn btn-outline-success">ADD TO MEAL</button>
          </div>
        )}
      </div>
    )
  }
}

export default MealList;