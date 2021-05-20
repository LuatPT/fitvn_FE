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
                tdee: tdeeTemp
            })
        }
        //Add user info
        const{addUserInfoAction} = this.props;
        var obj = {
            infoId: 1,
            userName: sessionStorage.getItem("user"),
            tdee: tdeeTemp,
            nutritionType: "Type1",
            fullName: this.name.current.value,
            age:  this.age.current.value,
            gender:  this.gender.current.value,
            height:  this.height.current.value,
            weight:  this.weight.current.value,
            bodyFat:  this.bodyFat.current.value,
            target: this.target.current.value
        };
        console.log(obj);
        //Show result panel
        document.getElementById("showResult").style.display = "inline";
    }
    render(){
        return (
            <div className="caculatorDiv">
                <div className="caculatorForm">
                <form action="index.html" className="caculForm" method="post">
                    <h2>Nhập thông tin của bạn:</h2><br/>
                    <fieldset>
                        <legend><span className="number">1</span> Thông tin cơ bản</legend>
                        <label htmlFor="name" className="labelForm">Tên:</label>
                        <input type="text" id="name" name="name" className="textForm" placeholder="Nhập tên của bạn..." ref={this.name}/>

                        <label htmlFor="age" className="labelForm">Tuổi:</label>
                        <input type="number" id="age" name="age" className="textForm" placeholder="Nhập số tuổi của bạn..." ref={this.age}/>

                        <label className="labelForm">Giới tính:</label>
                        <input type="radio" id="male" value="male" name="gender" className="radioForm" ref={this.gender}/>
                        <label htmlFor="male" className="light labelForm">Nam</label><br/>
                        <input type="radio" id="female" value="female" name="gender" className="radioForm" ref={this.gender}/>
                        <label htmlFor="female" className="light labelForm">Nữ</label>

                        <label htmlFor="height" className="labelForm">Chiều cao(cm):</label>
                        <input type="number" id="height" name="height" className="textForm" placeholder="Nhập chiều cao của bạn..." ref={this.height}/>

                        <label htmlFor="weight" className="labelForm">Cân nặng(kg):</label>
                        <input type="number" id="weight" name="weight" className="textForm" placeholder="Nhập cân nặng của bạn..." ref={this.weight}/>

                    </fieldset>

                    <fieldset>
                        <label htmlFor="weight" className="labelForm">Body Fat(%):</label>
                        <input type="number" id="bodyFat" name="bodyFat" className="textForm" placeholder="Nhập chỉ số BDF..."ref={this.bodyFat} />
                        <legend><span className="number">2</span> Thông tin tập luyện</legend>
                        <label className="labelForm" htmlFor="volumeTrainer">Chế độ tập luyện</label>
                        <select id="volumeTrainer" name="volumeTrainer" className="selectForm" ref={this.volumeTrainer}>
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

                        <label className="labelForm">Mục đích</label>
                        <input type="checkbox" id="decreaseWeight" value="decrease" name="target" className="checkForm" ref={this.target}/>
                        <label className="light labelForm" htmlFor="decreaseWeight">Giảm cân</label><br/>
                        <input type="checkbox" id="keepWeight" value="keep" name="target" className="checkForm" ref={this.target}/>
                        <label className="light labelForm" htmlFor="keepWeight">Duy trì</label><br/>
                        <input type="checkbox" id="increaseWeight" value="increase" name="target" className="checkForm" ref={this.target}/>
                        <label className="light labelForm" htmlFor="increaseWeight">Tăng cân</label>
                    </fieldset>
                    <button type="submit" className="btnForm" onClick={this.caculatorBMRTDEE}>Tính Toán</button>
                </form>

                    <Result bmi={this.state.bmi} bmr={this.state.bmr} tdee={this.state.tdee} />
                </div>
            </div>
        )
    }
};
export default CaculatorForm;