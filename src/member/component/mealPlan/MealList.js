import React from 'react'
import "../../../css/mealList.css";

let dummyData = [
  {
    id:0,
    title: 'My Blog',
  },
  {
    id:1,
    title: 'My Movie',
  },
  {
    id:2,
    title: 'My App',
  },
  {
    id:3,
    title: 'My Book',
  },
  {
    id:4,
    title: 'My Computer',
  }
];
class MealList extends React.Component{
  state = {
    data: dummyData,
    search: "",
    food: ""
  }
  // fetch data
  // componentDidMount() {
  //   fetch(REQUEST_URL)
  //     .then(response => response.json())
  //     .then(data => this.setState({data}))
  // }
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
    let filtered = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    console.log(filtered);
    return (
      <div>
        <div className="wrapper">
          <div className="search">
            <input
              id="search"
              type="search"
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
                <li key={key} onClick={() => this.onClickItem(item)}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
        {food && (
          <p className="result">
            <b>Food:</b>
            {food.title}
            <span className="box" style={{backgroundColor: food.title}}/>
            {food.id}
          </p>
        )}
      </div>
    )
  }
}

export default MealList;