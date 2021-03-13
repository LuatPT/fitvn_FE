import React from 'react'

class SearchFood extends React.PureComponent{
    searchFoodOnChange = (eve) => {
        eve.preventDefault();
        const {searchFood} = this.props;
        searchFood(eve.target.value);
    }
    render(){
        return(
            <div >
                  <input className="inputSearch" type="text" placeholder="Type a food name..." onChange = {this.searchFoodOnChange}/>   
            </div>
        )
    }
}

export default SearchFood;