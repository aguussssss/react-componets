import React, {useState} from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import GoogleLoginButton from '../components/GoogleLoginButton/GoogleLoginButton';
import FacebookLoginButton from '../components/FacebookLoginButton/FacebookLoginButton';
import '../styles/Login.css';

function Login (){
    return (
    <div>
        <div className='icon-app'>
            <img src="src\assets\wallhaven-431524.jpg" width="50px" height="50px"/>
            <h2>Salud Data Center</h2>
        </div>
        <center>
            <div className='login-body'>
                <h2>Bienvenido</h2>
                <LoginForm/>
                    <div className='separators'>
                        <div className='sized-box'/>
                        o
                        <div className='sized-box'/>
                </div>
                <GoogleLoginButton/>
                <FacebookLoginButton/>
            </div>
        </center>
    </div>
    );
}

export default Login;