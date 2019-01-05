import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/repoAction";
class DeviceInfo extends Component {
  constructor(props) {
    super(props);
    this.state= {
        csnValid: false,
       imeiValid: false
    };
    // setState you cant use in constructor
    /* this.setState({
        name: 'mahesh'
    }); */
    console.log(this.props);
    this.props.setUserName('sand');
    this.props.setBothName('sandip','attt');

    console.log(this.props.repoDetails);
    this.fieldReg = /^[a-zA-Z0-9]*$/;
    this.onCSNInputChange = this.onCSNInputChange.bind(this);
    this.imeiReg = /^[0-9 ]+$/;
    this.onImeiChange = this.onImeiChange.bind(this);
    this.isFieldsValid = this.isFieldsValid.bind(this);
    this.csnInput = React.createRef();
    this.imeiInput = React.createRef();
    // this.setDeviceInfo = this.setDeviceInfo.bind(this);

  }
  
  isFieldsValid() {
    return this.state.csnValid && this.state.imeiValid
  }

  onCSNInputChange(event) {
    const element = event.target;
   // console.log(this);
    if(element && element.value && element.value.length >= element.dataset.minlength && element.value.length <= element.dataset.maxlength) {
        if(this.fieldReg.test(element.value)) {
            this.setState({
                csnValid: true
            })
        } else {
            this.setState({
                csnValid: false
            })
        }
    } else {
        this.setState({
            csnValid: false
        })
    }
  }

  onImeiChange(event) {
    const element = event.target;
   // console.log(this);
    if(element && element.value && element.value.length >= element.dataset.minlength && element.value.length <= element.dataset.maxlength) {
        if(this.imeiReg.test(element.value)) {
            this.setState({
                imeiValid: true
            })
        } else {
            this.setState({
                imeiValid: false
            })
        }
    } else {
        this.setState({
            imeiValid: false
        })
    }
  }
  setDeviceInfo(formEle) {
    /* axios({
        method: 'POST', 
        url: 'http://localhost:7001/services/shopwireless/model/att/ecom/api/DeviceInfoActor/setDeviceInfo', 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {imei:formEle.IMEI,sim:formEle.csn}
    }).then(function(resp, status, headers, config){
        console.log(resp);
    });; */

    // /* fetch('http://localhost:7001/services/shopwireless/model/att/ecom/api/DeviceInfoActor/setDeviceInfo', {
    //     method: 'post',
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //     transformRequest: function(obj) {
    //         var str = [];
    //         for(var p in obj)
    //         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //         return str.join("&");
    //     },
    //     data: {imei:formEle.IMEI,sim:formEle.csn}
    // }).then(function(response) {
    //    return response.json();
    // }).then(function(data){
    //     if(data.result) {

    //     } else {

    //     }
    //     window.location.href='/login';
    // }) */
    window.location.href='/login';
  }
  componentDidMount() {
    //   this.setState({
    //       name: 'mahesh'
    //   }, () => {
    //     this.props.myProp2(this.state.name);
    //   });
      
  }
  render() {
    return (
          <div className="row">  {this.props.repoDetails.userName} {this.props.repoDetails.appName}
            <div className="col-sm-5 offset-sm-1">
                <h1>Start Activation</h1>
                <form className='mt-5' onSubmit={(event) => {event.preventDefault();this.setDeviceInfo(event.target)}}>
                    <div className={"form-group " + (!(this.csnInput.current && this.csnInput.current.value) || this.state.csnValid ? '' : 'field-error')}>
                        <label htmlFor="csninput">CSN</label>
                        <div className="input-group mb-3">
                            <input type="CSN" name="csn" data-minlength="20" ref={this.csnInput} data-maxlength="32" onChange={this.onCSNInputChange} className="form-control" id="csninput" placeholder="Enteryour csn number" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">?</span>
                            </div>
                        </div>
                    </div>
                    <div className={"form-group " + (!(this.imeiInput.current && this.imeiInput.current.value) || this.state.imeiValid ? '' : 'field-error')}>
                        <label htmlFor="imeinoinput">IMEI</label>
                        <div className="input-group mb-3">
                            <input type="text" name="IMEI" data-minlength="15" data-maxlength="18" ref={this.imeiInput} onChange={this.onImeiChange} className="form-control" id="IMEI" placeholder="Password" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">?</span>
                            </div>
                        </div>
                    </div>
                    { /*
                    <button type="submit" disabled={!this.isFieldsValid() } className={(!this.isFieldsValid()) ? 'btn btn-secondary  btn-block' : 'btn btn-primary btn-block'}>Submit</button>
                    */ }
                    <button type="submit" disabled={!this.isFieldsValid() } className={"btn btn-block " + (!this.isFieldsValid() ? 'btn-secondary': 'btn-primary')}>Submit</button>
                </form>
            </div>
            {/* <p>{this.state.name}</p> */}
        </div>
    )
  }
}

const mapStateToProps = state => {
    console.log(state);
    return {
    	repoDetails: state.att
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}


const DeviceInfoContainer = connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);


export default DeviceInfoContainer;