import axios from "axios";
import * as constants from "../../constants";

export const getExerciseListAction = () => {
    return (dis) => {
        axios({
                method: 'get',
                url: constants.api+'/exercises',
                header: {
                    // 'access-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', 
                    Accept: 'application/json'
                }
            })
            .then(res => {
                // console.log(res.data.data);
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
