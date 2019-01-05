import * as React from 'react';
import { Component } from 'react';

import './DeviceForm.scss'
import { DeviceFormState } from './DeviceInfo.state';
import { FormRegex } from '../../../helper/';
import TextBoxTooltip from '../../TextBoxTooltip/';
import Modal from '../../Modal/'

export class DeviceForm extends Component<{}, DeviceFormState> {
    csnRegx = FormRegex.csnRegx;
    imeiRegx = FormRegex.imeiRegx;
    csnInput = React.createRef<HTMLInputElement>();
    imeiInput = React.createRef<HTMLInputElement>();
    constructor(props) {
        super(props);
        this.state= {
            csnValid: false,
            imeiValid: false
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.isFieldsValid = this.isFieldsValid.bind(this);
    }
  
  isFieldsValid() {
    return this.state.csnValid && this.state.imeiValid
  }

  onInputChange(event) {
    const element = event.target;
    const key:string = element.dataset.key;
    let stateResult:boolean = false;
    if(element && element.value && 
        element.value.length >= element.dataset.minlength && 
        element.value.length <= element.dataset.maxlength) {
        if(this[key+"Regx"].test(element.value)) {
            stateResult = true;
        }
    }
    key === 'csn' ? this.setState({csnValid: stateResult}) : this.setState({imeiValid: stateResult})
  }

  setDeviceInfo(formEle) {
    window.location.href='/login';
  }
  render() {
    return (
        <form className='mt-5' onSubmit={(event: React.FormEvent<HTMLFormElement>) => {event.preventDefault();this.setDeviceInfo(event.target)}}>
            <div className={"form-group " + (!(this.csnInput.current && this.csnInput.current.value) || this.state.csnValid ? '' : 'field-error')}>
                <label htmlFor="csninput">CSN</label>
                <div className="input-group mb-3">
                    <input type="CSN" name="csn" data-key="csn" data-minlength="20" ref={this.csnInput} data-maxlength="32" onChange={this.onInputChange} className="form-control" id="csninput" placeholder="Enteryour csn number" />
                    <TextBoxTooltip>
                        <p>This is csn input tooltip</p>
                    </TextBoxTooltip>
                </div>
                {/* <a data-toggle="modal" href="#exampleModal">
                    Link for modal
                </a>
                <div className="modal" tabIndex={-1} id="exampleModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div> */}
                <Modal>
                    {{
                        modalheader: 'Modal title from comp',
                        modalbody: <p>Modal body text goes here.</p>,
                        linktext: 'Link for modal from comp'
                    }}
                </Modal>
            </div>
            <div className={"form-group " + (!(this.imeiInput.current && this.imeiInput.current.value) || this.state.imeiValid ? '' : 'field-error')}>
                <label htmlFor="imeinoinput">IMEI</label>
                <div className="input-group mb-3">
                    <input type="text" name="IMEI" data-key="imei" data-minlength="15" data-maxlength="18" ref={this.imeiInput} onChange={this.onInputChange} className="form-control" id="IMEI" placeholder="Password" />
                    <TextBoxTooltip>
                        <p>This is imei input tooltip</p>
                    </TextBoxTooltip>
                </div>
            </div>
            { /*
            <button type="submit" disabled={!this.isFieldsValid() } className={(!this.isFieldsValid()) ? 'btn btn-secondary  btn-block' : 'btn btn-primary btn-block'}>Submit</button>
            */ }
            <button type="submit" disabled={!this.isFieldsValid() } className={"btn btn-block " + (!this.isFieldsValid() ? 'btn-secondary': 'btn-primary')}>Submit</button>
        </form>
    )
  }
}