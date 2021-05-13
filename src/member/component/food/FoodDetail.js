import React from 'react'
import '../../../css/foodDetail.css'

class FoodDetail extends React.PureComponent{

    render(){
        var ele = this.props;
        return(
                <section id="content" className="col-md-3">
                        <ul className="grid group">
                            <li className="zoom-on-hover">
                                <a href="http://www.flickr.com/photos/84923476@N00/309452844/">
                                    <div className="image">
                                        <img src={ele.foodImg} className="center" width="100%" height="55%" alt={ele.foodName}/>
                                        <div className="caption">
                                            <h2><span className="spanHeader">NAME:</span> <span className="spanBody">{ele.foodName}</span></h2>
                                            <h2><span className="spanHeader">ENERGY:</span><span className="spanBody">{ele.foodCalo} calo/100g</span></h2>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </section>
            )
    }
}

export default FoodDetail;