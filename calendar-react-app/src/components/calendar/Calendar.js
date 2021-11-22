import React from 'react';
import './Calendar.css';
import constants from '../../configs/constants';
import Monthnavbar from '../monthnavbar/Monthnavbar';
import Monthdays from '../monthdays/Monthdays';

const Calendar = () => {
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
            <Monthdays />
        </div>
    )
}

export default Calendar;