import React from 'react'

class ExerciseDetail extends React.PureComponent{

    render(){
        var ele : Object = this.props;
        return(
            <div className="col-md-3 exerciseDetail">
                <img src={ele.exerciseImg} className="center" width="100%" height="55%" alt={ele.exerciseName}/>
                <p>Group: {ele.exerciseType}</p>
                <p>Name:  {ele.exerciseName}</p>
                {/* <p>Volume: {ele.set} x {ele.rep} </p> */}
                {/* <p>{ele.content}</p> */}
            </div>
            )
    }
}

export default ExerciseDetail;