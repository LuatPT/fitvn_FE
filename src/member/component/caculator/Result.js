import React from 'react'

class Result extends React.Component {
    render(){
        var {bmi,bmr,tdee} = this.props;
        var message = "";
        if(bmi === 0){
            message = "";
        }else if(bmi < 18.5){
            message = message + "THIẾU CÂN";
        }else if(bmi > 18.5 & bmi < 24.9){
            message = message + "BÌNH THƯỜNG";
        } else if (bmi > 25 & bmi < 29.9){
            message = message + "THỪA CÂN";
        }else{
            message = message + "BÉO PHÌ";
        }
        return (
            <div className="showResult" id="showResult">
                    <p>BMR của bạn là: <span className="result_val">{bmr.toFixed(2)}</span></p>
                    <p>TDEE của bạn là: <span className="result_val">{tdee.toFixed(2)}</span></p>
                    <p>BMI của bạn là: <span className="result_val">{bmi.toFixed(2)}</span></p>
                    <p>BMI chỉ ra bạn đang : <b>{message}</b></p>
            </div>
        )
    }
}
export default Result;