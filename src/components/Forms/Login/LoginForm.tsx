import * as React from 'react';
import { Component } from 'react';

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.validateForm = this.validateForm.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }
    validateForm(event) {
        const formEle = event.target;
        const isValidUser = this.validateUsername(formEle.username.value);
        const isValidPassword = this.validatePassword(formEle.password.value);
        return isValidUser && isValidPassword === '';
    }
    validateUsername(user) {
        const specialCharacter = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
        return (user && !specialCharacter.test(user) && user.length > 4 && user.length <= 10);
    }
    validatePassword(password) {

        
        if(!password) {
            return 'Password is empty';
        }

        if(!(password.length > 6 && password.length <=15)) {
            return 'Password length did not match'
        }

        return '';

    }
    render() {
        return (
            <form className='mt-5' onSubmit={this.validateForm.bind(this)}>
                <div className="form-group">
                    <label htmlFor="UserID">UserID</label>
                    <input type="userID" name="username" className="form-control" id="useridinput" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}