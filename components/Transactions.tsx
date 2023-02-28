import React, { useMemo, useState } from 'react';
import { Search } from 'components/UI/Search';
import DatePicker from 'components/UI/DatePicker';
import "react-datepicker/dist/react-datepicker.css";
import { TTransaction } from 'types/common';
import { Purchase } from 'components/Purchase';
import { isoDateToUnix } from 'helpers/time';


type TTransactions = {
  transactions: TTransaction[];
  className?: string;
}

export const Transactions = ({ transactions, className }: TTransactions) => {
  const [chosenDate, setChosenDate] = useState<number[] | Date[] | null>([new Date(0), new Date(0)]);

  const firstDate = chosenDate[0] ?? 0;
  const secondDate = chosenDate[1] ?? 0;

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const transactionTime = isoDateToUnix(transaction.date);
      return transactionTime > firstDate && transactionTime < secondDate;
    });
  }, [transactions, firstDate, secondDate]);


  return (
    <div className={`relative ${className}`}>
      <div className='bg-purple rounded-2xl p-6 w-[688px] h-full'>
        <div className='flex mb-9 h-fit'>
          <h2 className='text-xl mr-10 text-white'>Transactions</h2>
          <Search className='mr-4' />
          <DatePicker setChosenDate={setChosenDate} />
        </div>
        <div className='flex text-light-grey text-sm mb-8 justify-around'>
          <h3>Name</h3>
          <h3>Date</h3>
          <h3>Amount</h3>
          <h3>Status</h3>
        </div>
        <div className='grid gap-7'>
          {filteredTransactions?.map((transaction) =>
            <Purchase key={transaction?.id} {...transaction} />)}
        </div>
      </div>
    </div>
  );
}
