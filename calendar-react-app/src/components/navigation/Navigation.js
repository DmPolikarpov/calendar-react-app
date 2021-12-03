import React from 'react';
import './Navigation.css';

const Navigation = ({currentRoute, onRedirect}) => {
    
    if ( currentRoute === 'signin' ) {
        return (
            <nav className="nav-bar">
                <p onClick = {() => onRedirect('signup')} >Sign Up</p>
            </nav>
        )
    } else if ( currentRoute === 'signup' ) {
        return (
            <nav className="nav-bar">
                <p onClick = {() => onRedirect('signin')} >Sign In</p>
            </nav>
        )
    } else {
        return (
            <nav className="nav-bar">
                <p onClick = {() => onRedirect('signin')} >Sign Out</p>
            </nav>
        )
    }
}

export default Navigation;
