import React from 'react';
import constants from '../../configs/constants';

let Monthnavbar = (props) => {
    let getMonthName = () => {
        let month;
        let generalMonth = (new Date().getMonth() + props.monthNumber)%12;
        if (generalMonth >= 0) {
            month = generalMonth;
        } else {
            (12 - generalMonth) === 12 ? month = 0 : month = 12 + generalMonth;
        }
        console.log(month);
        return <h2>{ constants.months[month] }</h2>
    }
    return getMonthName() 
}

export default Monthnavbar;