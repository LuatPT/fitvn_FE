import React from 'react'

class SearchExercise extends React.PureComponent{
    searchExerciseOnChange = (eve) => {
        eve.preventDefault();
        const {searchExercise} = this.props;
        searchExercise(eve.target.value);
    }
    render(){
        return(
            <div className="form-group has-feedback has-search container">
                <input type="text" className="form-control inputSearch" placeholder="Type a exercise name..." onChange = {this.searchExerciseOnChange}/>
            </div>
        )
    }
}

export default SearchExercise;