import '../../../css/payment.css';
import React from 'react';

import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

class Payment extends React.Component{

    constructor(props){
        super(props);
        // Default DN city, Thanh Khe District, Thanh Khe Tay Ward
        this.state = {
            province: "",
            district: "",
            ward: "",
            address: "",
            transport: "",
            paymentBy: ""
        }
    }
    async componentDidMount(){
        const {getProvinceAction} = this.props;
        await getProvinceAction();
    }

    chooseProvince = (eve)=>{
        const {getDistrictAction} = this.props;
        this.setState({
            province: parseInt(eve.target.value)
        })
        getDistrictAction({ provinceID: parseInt(eve.target.value)});
    }
    chooseDistrict = (eve) => {
        const {getWardAction} = this.props;
        this.setState({
            district: parseInt(eve.target.value)
        })
        getWardAction({ districtID: parseInt(eve.target.value)});
    }
    chooseWard = (eve) => {
        const { listProvince,listDistrict,listWard, getTransportTypeAction} = this.props;
        var wardTemp = listWard.filter(ele => ele.WardCode === eve.target.value)[0].WardName;
        var districtTemp = listDistrict.filter(ele => ele.DistrictID === this.state.district)[0].DistrictName;
        var provinceTemp = listProvince.filter(ele => ele.ProvinceID ===this.state.province)[0].ProvinceName;
        this.setState({
            ward: parseInt(eve.target.value),
            address : 'Your Address: '+ wardTemp +', '+ districtTemp +', ' + provinceTemp
        })
        getTransportTypeAction({
            districtID: this.state.district
        })

    }

    chooseTransport = (eve) => {
        const { getFeeAction} = this.props;
        this.setState({
            transport: parseInt(eve.target.value)
        })
        var obj = {
            serviceID: parseInt(eve.target.value),
            wardCode: this.state.ward,
            districtID: this.state.district,
        };
        getFeeAction(obj)
    }
    choosePaymentType = (eve)=>{
        this.setState({
            paymentBy: eve.target.value
        })
    }
    render(){
        const { listProvince,listDistrict,listWard, listTransport, fee} = this.props;
        var transportType = listTransport.filter(ele=> ele.service_id === this.state.transport);
        var feeTotal = fee === 0 ? "" : "Cost: "+ fee.total + "VND";
        var urlCheckOut = "/checkOut"+this.state.paymentBy+"/"+ fee.total;
        return (
        <div className="divPayMent container">
            <div>
                <span>Provice: </span>
                <select className="form-control" aria-label="Default select example" onChange={this.chooseProvince}>
                    <option>=====Choose Provice=====</option>
                    {
                        listProvince.map((ele,key)=> (
                            <option key={key} value={ele.ProvinceID}  >{ele.ProvinceName}</option>
                        ))
                    }
                </select>
            </div> 
            <div>
                <span>District: </span>
                <select className="form-control" aria-label="Default select example" onChange={this.chooseDistrict}>
                    <option>=====Choose District=====</option>
                    {
                        listDistrict.map((ele,key)=> (
                            <option key={key} value={ele.DistrictID} >{ele.DistrictName}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <span>Ward: </span>
                <select className="form-control" aria-label="Default select example" onChange={this.chooseWard}>
                    <option>=====Choose Ward=====</option>
                    {
                        listWard.map((ele,key)=> (
                            <option key={key} value={ele.WardCode} >{ele.WardName}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <span>Transport: </span>
                <select className="form-control" aria-label="Default select example" onChange={this.chooseTransport}>
                    <option>=====Choose Type=====</option>
                    {
                        listTransport.map((ele,key)=> (
                            <option key={key} value={ele.service_id} >{ele.short_name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="paymentType">Payment by: </label>
                <select name="paymentType" id="paymentType" className="form-control" onChange={this.choosePaymentType}>
                    <option>=====Choose Payment=====</option>
                    <option value="Momo">MoMo</option>
                    <option value="VnPay">VNPAY</option>
                </select>
            </div>
            <img src="https://static.topcv.vn/company_covers/cong-ty-co-phan-dich-vu-di-dong-truc-tuyen-m-service-72f7c0b26cb84560accc3e2707f7c39b-5e99075fd6fad.jpg" 
            width="105px" height="50px" alt="type"/>
            <hr/>
            <div className="resultsPayment">
                <p>{this.state.address}</p>
                <p>{ transportType == "" ? "" : "Transport: "+transportType[0].short_name }</p>
                <p>{feeTotal}</p>
                <p>{this.state.paymentBy !== "" ? "Payment by:"+ this.state.paymentBy : ""}</p>
            </div>
            {/* <button className="btn btn-outline-success"> <a className="aCheckOut" href={urlCheckOut}>CheckOut</a></button> */}
            <Button variant="outlined" endIcon={<SendIcon />} href={urlCheckOut}>CheckOut</Button>
      </div>
    )
    }
}

export default Payment