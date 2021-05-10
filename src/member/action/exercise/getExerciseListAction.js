import axios from "axios";
import * as constants from "../../constants";

export const getExerciseListAction = () => {
    return (dis) => { 
            // axios.get(
            //     constants.api+'/exercises',  
            //     {
            //         headers: {
            //             'Authorization': localStorage.getItem('token')
            //     },
            // })
        // Use for action
        axios({
                method: 'get',
                url: constants.api+'/exercises',
                headers: {
                        'Authorization': localStorage.getItem('token')
                
                }
            })
            .then(res => {
                console.log(res.data.data);
                dis(getExerciseList(res.data.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const getExerciseList = (listExercise) => (
    {
        type: 'GET_EXERCISE',
        listExercise
    }
)
