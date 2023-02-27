import React, { useState } from 'react';
import DatePicker from "react-datepicker";

const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    console.log(startDate, endDate
    );


    return (
        <DatePicker
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd MMM"
        />
    );
};
export default DatePick;