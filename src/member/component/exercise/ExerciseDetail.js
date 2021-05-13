import React from 'react'
import "../../../css/exerciseDetail.css";

class ExerciseDetail extends React.PureComponent{

    render(){
        var ele = this.props;
        return(
            <section id="content" className="col-md-3">
                        <ul className="grid group">
                            <li className="zoom-on-hover">
                                <a href="#">
                                    <div className="image">
                                        <img src={ele.exerciseImg} className="center" width="100%" height="55%" alt={ele.foodName}/>
                                        <div className="caption">
                                            <h2><span className="spanHeader">NAME:</span> <span className="spanBody">{ele.exerciseName}</span></h2>
                                            <h2><span className="spanHeader">VOLUME:</span><span className="spanBody">{ele.exerciseSet} Set X {ele.exerciseRep} Rep</span></h2>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                </section>
            )
    }
}

export default ExerciseDetail;