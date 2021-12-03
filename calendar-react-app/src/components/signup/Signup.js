import React from 'react';
import './Signup.css';

let Signup = ({ onRedirect }) => {
    return (
        <div id="registration-window" className="popup-window">
            <div className="sign-form">
                <span id="reg-closeWindow" className="closeWindow">&times;</span>
                <h1>Sign up Form</h1>
                <div className="error-message required-field"></div>
                <form>
                    <label htmlFor="txtUsername">Username <span className="required-field">*</span>:</label>
                    <input type="text" id="reg-txtUsername" required name="username"/>
                    <br/>
                    <label htmlFor="txtEmail">Email <span className="required-field">*</span>:</label>
                    <input type="text" id="txtEmail" placeholder="e.g. youraddress@example.com" required name="email"/>
                    <br/>
                    <label htmlFor="txtPassword">Password<span className="required-field">*</span>:</label>
                    <input type="password" id="reg-txtPassword" required name="password"/>
                    <br/>
                    <label htmlFor="txtPassConfirm">Confirm password <span className="required-field">*</span>:</label>
                    <input type="password" id="txtPassConfirm" required name="confpassword"/>
                    <br/>
                    <div className="note">
                        <p><span className="required-field">*</span> Required fields</p>
                    </div>
                    <input id="reg-form-submit" className="btnSubmit" onClick={() => onRedirect('index')} type="submit" value="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Signup;