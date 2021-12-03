import React from 'react';
import './Signin.css';

let Signin = () => {
    return (
    <div id="login-window" className="popup-window">
        <div className="sign-form">
            <span id="login-closeWindow" className="closeWindow">&times;</span>
            <h1>Sign In Form</h1>
            <div className="error-message required-field"></div>
            <form>
                <label htmlFor="txtEmail">Email:</label>
                <input type="text" id="login-txtEmail" required name="email" />
                <br />
                <label htmlFor="txtPassword">Password:</label>
                <input type="password" id="login-txtPassword" required name="password" />
                <br />
                <input id="login-form-submit" className="btnSubmit" type="submit" value="submit" />
            </form>
        </div>
    </div>
    )
}

export default Signin;
