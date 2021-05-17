function MealRsItem(props) {
    const ele = props;
    function deleteMeal(mealPlanId){
        const{deleteMealAction} = props;
        deleteMealAction(mealPlanId);
    }
    
    return(
        <tr>
                <td>
                  <img src={ele.foodImg} alt="Error" width="80px" height="80px"/>
                </td>
                <td>{ele.foodName}</td>
                <td>{ele.foodCalo}</td>
                <td>{ele.foodServing}</td>
                <td>{ele.foodType}</td>
                <td>{ele.foodContent}</td>
                <td>
                    <div style={{display:"flex", justifyContent: "space-around"}}>
                        <button type="button" className="btn btn-outline-warning"> 
                            Update
                        </button>
                        <p>{ele.mealPlanId}</p>
                        <button type="button" className="btn btn-outline-danger" onClick={()=>deleteMeal(ele.mealPlanId)}> 
                            Delete
                        </button>
                    </div>
                </td>
        </tr>
    )
}
export default MealRsItem