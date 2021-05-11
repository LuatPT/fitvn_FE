import React from 'react'

class FoodDetail extends React.PureComponent{

    render(){
        var ele = this.props;
        return(
            <div className="col-md-3 foodDetail">
                <img src={ele.foodImg} className="center" width="100%" height="55%" alt={ele.foodName}/>
                {/* <p>{ele.id}</p> */}
                <p><span className="spanHeader">NAME:</span> <span className="spanBody">{ele.foodName}</span></p>
                <p><span className="spanHeader">ENERGY:</span><span className="spanBody">{ele.foodCalo} calo/100g</span> </p>
                {/* <p>{ele.typeMacro}</p> */}
            </div>
            )
    }
}

export default FoodDetail;