import React from 'react';
import { Search } from 'components/UI/Search';
import DatePicker from 'components/UI/DatePicker';
import "react-datepicker/dist/react-datepicker.css";

export const Transactions = () => {
  return (
    <div className='bg-purple flex rounded-2xl p-6 w-[688px] min-h-[328px]'>
      <div className='flex h-fit'>
        <h2 className='text-xl mr-10 text-white'>Transactions</h2>
        <Search />
        <DatePicker />
      </div>
    </div>
  );
}
