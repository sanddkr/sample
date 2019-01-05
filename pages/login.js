import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export class loginInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Log in to your account</h1>
                <div className="container">
                    <form className='mt-5'>
                        <div className="form-group">
                            <label htmlFor="UserID">UserID</label>
                            <input type="userID" className="form-control" id="useridinput" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}