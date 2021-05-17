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

    componentDidMount = () => {
        const {getFoodListAction} = this.props;
        getFoodListAction();
    }
    searchFood = (value) => {
        this.setState({
            keySearch: value
        })
    }
    render(){
        var {listFood} = this.props;
        const filterListFood = listFood.filter(ele => ele.foodName.toLowerCase().includes(this.state.keySearch.toLowerCase()) === true);
        return(
            <div className="divFoodList">
                <SearchFood  searchFood={this.searchFood}/>
                <div className="row">
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