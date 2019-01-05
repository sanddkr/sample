import * as React from 'react';
import DeviceForm from '../../components/Forms/DeviceInfo/';
// import { Component } from 'react';
// import { RouteProps, RouteComponentProps } from 'react-router';
// import { RouteComponentProps } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {bindActionCreators} from "redux";
// import {connect} from "react-redux";
// import * as actions from "../actions/repoAction";
import GeneralLayout from '../../layout/General/';

export const DeviceInfoContainer = (props) => {
    const imageProp = {
        src: '',
        alt: ''
    }
    return (
        <GeneralLayout image={imageProp}>
            <div>
                <h1>Start Activation</h1>
                <DeviceForm />
            </div>
        </GeneralLayout>
    )
};

/* const mapStateToProps = state => {
    console.log(state);
    return {
    	repoDetails: state.att
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}
 */

// const DeviceInfoContainer = connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);


// export default DeviceInfoContainer;