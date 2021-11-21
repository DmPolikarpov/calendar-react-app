import React from 'react';
import './Calendar.css';
import constants from '../../configs/constants';
import Monthnavbar from '../monthnavbar/Monthnavbar';

const Calendar = () => {
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
        <div className="calendar">
            <Monthnavbar />
            <div className="weekdays-container">
                {
                    constants.weekdays_short.map(day => {
                        return <div className="week-day day-zone" key={day}>{day}</div>
                    })
                }
            </div>
            <div className="month-container">{ getMonthDays() }</div>
        </div>
    )
}

export default Calendar;