import * as React from 'react';;
// import { Component } from 'react';
import LoginForm from 'components/Forms/Login/';
import GeneralLayout from 'layout/General/';

export const LoginInfoContainer = (props) => {
    const imageProp = {
        src: '',
        alt: ''
    };
    return (
        <GeneralLayout image={imageProp}>
            <div>
                <h1>Log in to your account</h1>
                <LoginForm />
            </div>
        </GeneralLayout>
    )
};