import React from 'react'

class FoodDetail extends React.PureComponent{

    render(){
        var ele : Object = this.props;
        return(
            <div className="col-md-3 foodDetail">
                <img src={ele.foodImg} className="center" width="100%" height="55%" alt={ele.foodName}/>
                {/* <p>{ele.id}</p> */}
                <p>Name:  {ele.foodName}</p>
                <p>Energy: {ele.foodCalo} calo/100g </p>
                {/* <p>{ele.typeMacro}</p> */}
            </div>
            )
    }
}

export default FoodDetail;