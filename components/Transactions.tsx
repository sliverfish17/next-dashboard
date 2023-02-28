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

  const firstDate = chosenDate ? chosenDate[0] : 0;
  const secondDate = chosenDate ? chosenDate[1] : 0;

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const transactionTime = isoDateToUnix(transaction.date);
      return transactionTime > firstDate && transactionTime < secondDate;
    });
  }, [transactions, firstDate, secondDate]);


  return (
    <div className={`relative ${className}`}>
      <div className='h-full w-[688px] rounded-2xl bg-purple p-6'>
        <div className='mb-9 flex h-fit'>
          <h2 className='mr-10 text-xl text-white'>Transactions</h2>
          <Search className='mr-4' />
          <DatePicker setChosenDate={setChosenDate} />
        </div>
        <div className='mb-8 flex justify-around text-sm text-light-grey'>
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
