import React from 'react';
import './Monthdays.css';

let Monthdays = (props) => {
    let getMonthDays = () => {
        let days = [];
        let counter = 1;
        let date = new Date();
        let month = props.monthNumber;
        console.log(month);
        let daysInMonth = new Date(date.getFullYear(), date.getMonth() + (month + 1), 0).getDate();
        let firstDay = new Date(date.getFullYear(), date.getMonth() + month, 1).getDay();
        let lastDay =  new Date(date.getFullYear(), date.getMonth() + month, daysInMonth).getDay();
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