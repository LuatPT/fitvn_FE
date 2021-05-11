import React from 'react'
import Result from './Result'
import "../../../css/caculatorForm.css";

class CaculatorForm extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            bmi: 0,
            bmr: 0,
            tdee: 0
        }

        //Create ref to get value current
        this.name = React.createRef();
        this.age = React.createRef();
        this.gender = React.createRef();
        this.height = React.createRef();
        this.weight = React.createRef();
        this.bodyFat = React.createRef();
        this.volumeTrainer = React.createRef();
        this.target = React.createRef();  
    }
    caculatorBMRTDEE = (eve) => {
        eve.preventDefault();

        var weight = Number(this.weight.current.value);
        
        var bodyFat = Number(this.bodyFat.current.value);

        var volumeTrainer = Number(this.volumeTrainer.current.value);

        var height = Number(this.height.current.value);

        var target = this.target.current.checked;

        var bmrTemp =  (21.6*weight*(100-bodyFat ) )/100;
       
        var bmiTemp = weight/(height*height)*10000;
        switch (target) {
            case "decrease":
                bmrTemp = bmrTemp + 200;
                break;
            case "keep":
                break;
            case "increase":
                bmrTemp = bmrTemp - 200;
                break;
            default:
                break;
        }

        var tdeeTemp = bmrTemp*volumeTrainer;
        
        if (bmrTemp !== 0 & tdeeTemp !== 0) {
            this.setState({
                bmi: bmiTemp,
                bmr: bmrTemp,
                tdee: tdeeTemp,

            })
        }
        //Show result panel
        document.getElementById("showResult").style.display = "inline";
    }
    render(){
        return (
            <div className="caculatorForm">
               <form action="index.html" className="form" method="post">
                <h2>Nhập thông tin của bạn:</h2><br/>
                <fieldset>
                    <legend><span className="number">1</span> Thông tin cơ bản</legend>
                    <label htmlFor="name">Tên:</label>
                    <input type="text" id="name" name="name" className="textForm" placeholder="Nhập tên của bạn..." ref={this.name}/>

                    <label htmlFor="age">Tuổi:</label>
                    <input type="number" id="age" name="age" className="textForm" placeholder="Nhập số tuổi của bạn..." ref={this.age}/>

                    <label>Giới tính:</label>
                    <input type="radio" id="male" value="male" name="gender" ref={this.gender}/><label htmlFor="male" className="light">Nam</label><br/>
                    <input type="radio" id="female" value="female" name="gender" ref={this.gender}/><label htmlFor="female" className="light">Nữ</label>
                    
                    <label htmlFor="height">Chiều cao(cm):</label>
                    <input type="number" id="height" name="height" placeholder="Nhập chiều cao của bạn..." ref={this.height}/>
                    
                    <label htmlFor="weight">Cân nặng(kg):</label>
                    <input type="number" id="weight" name="weight" placeholder="Nhập cân nặng của bạn..." ref={this.weight}/>

                </fieldset>

                <fieldset>
                     <label htmlFor="weight">Body Fat(%):</label>
                    <input type="number" id="bodyFat" name="bodyFat" placeholder="Nhập chỉ số BDF..."ref={this.bodyFat} />
                    <legend><span className="number">2</span> Thông tin tập luyện</legend>
                    <label htmlFor="volumeTrainer">Chế độ tập luyện</label>
                    <select id="volumeTrainer" name="volumeTrainer" ref={this.volumeTrainer}>
                                <optgroup label="Newbie">
                                    <option value="1.2">Ít vận động</option>
                                    <option value="1.375">1-3 buổi/tuần</option>
                                </optgroup>
                                <optgroup label="Normal">
                                    <option value="1.55">3-5 buổi/tuần</option>
                                    <option value="1.725">6-7 buổi/tuần</option>
                                </optgroup>
                                <optgroup label="Pro">
                                    <option value="1.9">2 buổi/ngày</option>
                                </optgroup>
                    </select>

                    <label>Mục đích</label>
                    <input type="checkbox" id="decreaseWeight" value="decrease" name="target" ref={this.target}/>
                    <label className="light" htmlFor="decreaseWeight">Giảm cân</label><br/>
                    <input type="checkbox" id="keepWeight" value="keep" name="target" ref={this.target}/>
                    <label className="light" htmlFor="keepWeight">Duy trì</label><br/>
                    <input type="checkbox" id="increaseWeight" value="increase" name="target" ref={this.target}/>
                    <label className="light" htmlFor="increaseWeight">Tăng cân</label>
                </fieldset>
                <button type="submit" onClick={this.caculatorBMRTDEE}>Tính Toán</button>
                </form>

                 <Result bmi={this.state.bmi} bmr={this.state.bmr} tdee={this.state.tdee} />
            </div>
        )
    }
};
export default CaculatorForm;