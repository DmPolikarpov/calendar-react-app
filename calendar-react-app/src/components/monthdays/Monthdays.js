import React from 'react';
import './Monthdays.css';
import constants from '../../configs/constants';

let Monthdays = () => {
    let getMonthDays = () => {
        let days = [];
        let counter = 1;
        let date = new Date();
        let daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        let lastDay =  new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay();
        let fullNumberOfDays = firstDay + daysInMonth + 6 - lastDay; 
        for (let i = 0; i < fullNumberOfDays; i++) {
            if (i < firstDay || i >= firstDay + daysInMonth) {
                days.push(<div className="day day-zone" key={i}></div>);
            } else {
                days.push(<div className="day day-zone" key={i}>{counter}</div>);
                counter++;
            }
        }
        return days;
    }
    return (
        <div className="month-container">{ getMonthDays() }</div>
    )
}

export default Monthdays;