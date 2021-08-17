import React from 'react'
import Result from './Result'
import "../../../css/caculatorForm.css";

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

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
        addUserInfoAction(obj);
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
                        <Box sx={{'& .MuiTextField-root': { m: 1, width: '100%' }, }} noValidate autoComplete="off">
                            <TextField required id="outlined-basic" label="Nhập Tên" inputRef={this.name} variant="filled"/>
                            <TextField required id="filled-number" label="Nhập Tuổi" type="number" inputRef={this.age} variant="filled"/>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Giới tính</FormLabel>
                                <RadioGroup defaultValue="male" row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value="male" control={<Radio />} label="Nam" inputRef={this.gender} />
                                    <FormControlLabel value="female" control={<Radio />} label="Nữ" inputRef={this.gender} />
                                </RadioGroup>
                            </FormControl>

                            <TextField required id="filled-number" label="Nhập Chiều Cao(cm)" type="number" inputRef={this.height} variant="filled"/>
                            <TextField required id="filled-number" label="Nhập Cân nặng(kg)" type="number" inputRef={this.weight} variant="filled"/>
                        </Box>
                    </fieldset>

                    <fieldset>
                        <Box sx={{'& .MuiTextField-root': { m: 1, width: '100%' }, }} noValidate autoComplete="off">
                        <TextField required id="filled-number" label="Nhập Body Fat(%)" type="number" inputRef={this.bodyFat}variant="filled" /> 

                        <legend><span className="number">2</span> Thông tin tập luyện</legend>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Chế độ tập luyện</InputLabel>
                            <Select variant="filled" inputRef={this.volumeTrainer} labelId="demo-simple-select-label" id="demo-simple-select" label="Chế độ tập luyện" >
                            <MenuItem value={1.2}>Ít vận động</MenuItem>
                            <MenuItem value={1.375}>1-3 buổi/tuần</MenuItem>
                            <MenuItem value={1.55}>3-5 buổi/tuần</MenuItem>
                            <MenuItem value={1.725}>6-7 buổi/tuần</MenuItem>
                            <MenuItem value={1.9}>2 buổi/ngày</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Mục đích</FormLabel>
                            <RadioGroup defaultValue="decrease" row aria-label="volumeTrainer" name="row-radio-buttons-group">
                                <FormControlLabel value="decrease" control={<Radio />} label="Giảm cân" inputRef={this.target} />
                                <FormControlLabel value="keepWeight" control={<Radio />} label="Duy trì" inputRef={this.target} />
                                <FormControlLabel value="increaseWeight" control={<Radio />} label="Tăng cân" inputRef={this.target} />
                            </RadioGroup>
                        </FormControl>
                        </Box>
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