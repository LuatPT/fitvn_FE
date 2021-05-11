import React from 'react'
import "../../../css/exerciseDetail.css";

class ExerciseDetail extends React.PureComponent{

    render(){
        var ele = this.props;
        return(
            <div className="col-md-3 exerciseDetail">
                <div>
                    <img src={ele.exerciseImg} className="center" width="100%" height="55%" alt={ele.exerciseName}/>
                    <p><span className="spanHeader">GROUP:</span> <span className="spanBody">{ele.exerciseType}</span></p>
                    <p><span className="spanHeader">NAME:</span>  <span className="spanBody">{ele.exerciseName}</span></p>
                    {/* <p>Volume: {ele.set} x {ele.rep} </p> */}
                    {/* <p>{ele.content}</p> */}
                </div>
            </div>
            )
    }
}

export default ExerciseDetail;