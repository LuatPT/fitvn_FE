import React from 'react'
import ExerciseDetail from '../exercise/ExerciseDetail'
import SearchExercise from '../exercise/SearchExercise'


class ExerciseList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            keySearch : ""
        }
    }

    searchExercise = (value) => {
        this.setState({
            keySearch: value
        })
    }
    render(){
        var {listExercise} = this.props;
        const filterListExercise = listExercise.filter(ele => ele.name.toLowerCase().includes(this.state.keySearch.toLowerCase()) === true);
        return(
            <div>
                <SearchExercise  searchExercise={this.searchExercise}/>
                <div className="row justify-content-center">
                    {
                        filterListExercise.map((ele,key) => (
                            <ExerciseDetail key={key} {...ele} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ExerciseList;