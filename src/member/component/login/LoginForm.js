import React from 'react';
import {useState} from "react";
import "../../../css/loginStyle.css";
import leftImg from "../../../image/left1.png";
import rightImg from "../../../image/right.png";

function LoginForm (props){
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    const[isDisableSignIn, setIsDisableSignIn] = useState(false);
    const[isDisableSignUp, setIsDisableSignUp] = useState(false);

    function changeUserName(eve){
        // Set username
        setUserName(eve.target.value);
    }
    function changePassword(eve){
        setPassword(eve.target.value);
    }
    // Event to submit form
    function loginForm(eve){
        eve.preventDefault();
        setIsDisableSignIn(true);
        const {loginAction} = props ;
        let obj = {
            username: userName,
            password: password
        }
        //Login
        loginAction(obj);
    }
     function registerForm(eve){
        eve.preventDefault();
        setIsDisableSignUp(true);
        const {registerAction} = props ;
        let obj = {
            username: userName,
            password: password
        }
        //Register
        registerAction(obj);
    }
    // To switch two state  to display sign in or sign up
    function signUp(){
        const container = document.querySelector(".containerDiv");
        container.classList.add("sign-up-mode");
        container.classList.remove("sign-in-mode");
        setIsDisableSignUp(false);
    }
    function signIn(){
        const container = document.querySelector(".containerDiv");
        container.classList.add("sign-in-mode");
        container.classList.remove("sign-up-mode");
         setIsDisableSignIn(false);
    }
    return(
        <div className="containerDiv">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form loginform" >
                        <h2 className="title">Sign in</h2>
                        <h3 className="login-title">{props.messageLogin}</h3>
                        <div className="input-field">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder="Username" onChange={changeUserName} />
                        </div>
                        <div className="input-field">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Password" onChange={changePassword}/>
                        </div>
                            <input type="submit" value="Login" onClick={loginForm} 
                            disabled={isDisableSignIn} className="btnLogIn solid" />
                    </form>
                    <form className="sign-up-form loginform">
                        <h2 className="title">Sign up</h2>
                        <h3 className="login-title">{props.messageRegister}</h3>
                        <div className="input-field">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder="Username" onChange={changeUserName} />
                        </div>
                        <div className="input-field">
                        <i className="fa fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <input type="password" placeholder="Password" onChange={changePassword} />
                        </div>
                        <input type="submit" className="btnLogIn" onClick={registerForm} value="Sign up" 
                        disabled={isDisableSignUp} />
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <img src={leftImg} className="imageLogin" alt="Background" />
                    <p>
                        To get a fitness body 
                        and increase your health, Sign up NOW!
                    </p>
                    <button className="btnLogIn transparent" id="sign-up-btn" onClick={signUp}>
                    Sign up
                    </button>
                </div>
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <img src={rightImg} className="imageLogin" alt="Background" />
                    <p>
                        Welcome you comeback
                        Please login to use full of service 
                    </p>
                    <button className="btnLogIn transparent" id="sign-in-btn" onClick={signIn}>
                        Sign in
                    </button>
                </div>
                </div>
            </div>
            
        </div>
        )
}

export default LoginForm;