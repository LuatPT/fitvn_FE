import React from 'react'

class SearchFood extends React.PureComponent{
    searchFoodOnChange = (eve) => {
        eve.preventDefault();
        const {searchFood} = this.props;
        searchFood(eve.target.value);
    }
    render(){
        return(
            <div className="form-group has-feedback has-search container">
                <input type="text" className="form-control inputSearch" placeholder="Type a food name..." onChange = {this.searchFoodOnChange}/>
            </div>
        )
    }
}

export default SearchFood;