import Image from 'next/image';
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import calendar from "assets/calendar.png"
import dropdown from "assets/dropdown.svg"
import { isoDateToUnix } from '@helpers/time';

const DatePick = ({ setChosenDate }: { setChosenDate: React.Dispatch<React.SetStateAction<number[] | Date[] | null>> }) => {

    const [startDate, setStartDate] = useState(new Date('2018-01-01'));
    const [endDate, setEndDate] = useState(new Date('2018-02-01'));
    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;

        start && setStartDate(start);

        end && setEndDate(end);
    };

    useEffect(() => {
        setChosenDate([isoDateToUnix(startDate), isoDateToUnix(endDate)])

    }, [startDate, endDate])


    const CustomInput = forwardRef(({ value, onClick }: { value: string; onClick: () => void }, ref: ForwardedRef<HTMLButtonElement>) => (
        <button className="px-3 relative flex py-2 border items-center border-light-grey text-light-grey w-52 rounded-lg" onClick={onClick} ref={ref}>
            <Image className='mr-2' alt='Calendar' width={20} height={20} src={calendar} />
            {value}
            <Image className='absolute right-2 top-3' alt='Dropdown' width={20} height={20} src={dropdown} />
        </button>
    ));


    return (
        <DatePicker
            customInput={<CustomInput />}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd MMM"
        />
    );
};
export default DatePick;