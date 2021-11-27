import React, {useState} from 'react';
import './Calendar.css';
import constants from '../../configs/constants';
import Monthnavbar from '../monthnavbar/Monthnavbar';
import Monthdays from '../monthdays/Monthdays';
import Yearnavbar from '../yearnavbar/Yearnavbar';

const Calendar = () => {
    const [month, setMonth] = useState(0);
    return (
        <div className="calendar">
            <div className="month-name">
                <h1 onClick={() => setMonth(month - 12)}>&#8610;</h1>
                    <Yearnavbar monthNumber={month} />
                <h1 onClick={() => setMonth(month + 12)}>&#8611;</h1>
            </div>
            <div className="month-name">
                <h1 onClick={() => setMonth(month - 1)}>&#8610;</h1>
                <Monthnavbar monthNumber={month} />
                <h1 onClick={() => setMonth(month + 1)}>&#8611;</h1>
            </div>
            <div className="weekdays-container">
                {
                    constants.weekdays_short.map(day => {
                        return <div className="week-day day-zone" key={day}>{day}</div>
                    })
                }
            </div>
            <Monthdays monthNumber={month} />
        </div>
    )
}

export default Calendar;