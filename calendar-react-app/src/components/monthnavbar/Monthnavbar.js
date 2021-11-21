import React from 'react';
import './Monthnavbar.css';
import constants from '../../configs/constants';

let Monthnavbar = () => {
    let getMonthName = () => {
        let month = new Date().getMonth();
        return <h2>{ constants.months[month] }</h2>
    }
    return (
            <div className="month-name">
                <h1>&#8610;</h1>
                { getMonthName() }
                <h1>&#8611;</h1>
            </div>
            )
}

export default Monthnavbar;