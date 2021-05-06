import React from 'react';
import {useState} from "react";
import "../../../css/loginStyle.css";

function LoginForm (props){
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    function changeUserName(eve){
        setUserName(eve.target.value);
    }
    function changePassword(eve){
        setPassword(eve.target.value);
    }
    function submiForm(eve){
        eve.preventDefault()
        const {loginAction} = props ;
        let obj = {
            username: userName,
            password: password
        }
        //Login
        loginAction(obj);
    }
    return(
            <div className="full-screen-container" id="login">
                <div className="login-container">
                    <h3 className="login-title">{props.message}</h3>
                    <form>
                        <div className="input-group">
                            <label>User name</label>
                            <input type="text" onChange={changeUserName}/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" onChange={changePassword}/>
                        </div>
                        <button type="submit" className="login-button" onClick={submiForm}>Sign In</button>
                    </form>
                </div>
            </div>
        )
}

export default LoginForm;