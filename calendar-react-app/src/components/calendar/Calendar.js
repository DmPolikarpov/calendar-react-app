import React from 'react';
import './Calendar.css';
import constants from '../../configs/constants';

const Calendar = () => {
    return (
        <div className="calendar">
            <div className="weekdays-container">
                {
                    constants.weekdays_short.map(day => {
                        return <div>{day}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Calendar;