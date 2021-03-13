import React from 'react'
import FoodDetail from './FoodDetail'
import SearchFood from './SearchFood'


class FoodList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            keySearch : ""
        }
    }

    searchFood = (value) => {
        this.setState({
            keySearch: value
        })
    }
    render(){
        var {listFood} = this.props;
        const filterListFood = listFood.filter(ele => ele.name.toLowerCase().includes(this.state.keySearch.toLowerCase()) === true);
        return(
            <div>
                <SearchFood  searchFood={this.searchFood}/>
                <div className="row justify-content-center">
                    {
                        filterListFood.map((ele,key) => (
                            <FoodDetail key={key} {...ele} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default FoodList;