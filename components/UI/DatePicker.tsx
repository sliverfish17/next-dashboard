import Image from 'next/image';
import React, { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import calendar from "assets/calendar.png"
import dropdown from "assets/dropdown.svg"
import { isoDateToUnix } from '@helpers/time';

const DatePick = ({ setChosenDate }: { setChosenDate: React.Dispatch<React.SetStateAction<number[] | Date[] | null>> }) => {
    const pickerRef = useRef(null);
    const [startDate, setStartDate] = useState(new Date('2018-01-01'));
    const [endDate, setEndDate] = useState(new Date('2018-02-01'));
    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;

        start && setStartDate(start);

        end && setEndDate(end);
    };

    useEffect(() => {
        setChosenDate([isoDateToUnix(startDate), isoDateToUnix(endDate)])

    }, [startDate, endDate, setChosenDate])


    const CustomInput = forwardRef(({ value, onClick }: { value?: string; onClick: () => void }, ref: ForwardedRef<HTMLButtonElement>) => (
        <button className="relative flex w-52 items-center rounded-lg border border-light-grey px-3 py-2 text-light-grey" onClick={onClick} ref={ref}>
            <Image className='mr-2' alt='Calendar' width={20} height={20} src={calendar} />
            {value}
            <Image className='absolute right-2 top-3' alt='Dropdown' width={20} height={20} src={dropdown} />
        </button>
    ));

    return (
        <DatePicker
            customInput={<CustomInput onClick={() => onChange} ref={pickerRef} />}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd MMM"
        />
    );
};
export default DatePick;