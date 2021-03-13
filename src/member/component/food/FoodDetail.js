import React from 'react'

class FoodDetail extends React.PureComponent{

    render(){
        var ele : Object = this.props;
        return(
            <div className="col-md-3 foodDetail">
                <img src={ele.image} className="center" width="100%" height="55%" alt={ele.name}/>
                {/* <p>{ele.id}</p> */}
                <p>Name:  {ele.name}</p>
                <p>Energy: {ele.calo} calo/100g </p>
                {/* <p>{ele.typeMacro}</p> */}
            </div>
            )
    }
}

export default FoodDetail;