import React from 'react';

let Yearnavbar = (props) => {
    let yearDelta = Math.floor((props.monthNumber + new Date().getMonth()) / 12);
    let year = new Date().getFullYear() + yearDelta;
    return <h2>{year}</h2>
}

export default Yearnavbar;
