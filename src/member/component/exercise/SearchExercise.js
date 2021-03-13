import React from 'react'

class SearchExercise extends React.PureComponent{
    searchExerciseOnChange = (eve) => {
        eve.preventDefault();
        const {searchExercise} = this.props;
        searchExercise(eve.target.value);
    }
    render(){
        return(
            <div >
                  <input className="inputSearch" type="text" placeholder="Type a Exercise name..." onChange = {this.searchExerciseOnChange}/>   
            </div>
        )
    }
}

export default SearchExercise;