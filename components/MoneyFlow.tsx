import React from 'react';
import Image from 'next/image';
import { MoneyTypes } from 'types/common';
import arrow from 'assets/arrow.svg';

type MoneyFlowProps = {
  type: MoneyTypes;
  amount: number;
  overall: number;
};

const CARD_STYLES = [
  {
    typeColor: 'bg-cyan', arrowPosition: '', percentColor: 'bg-success text-success', label: 'Income',
  },
  {
    typeColor: 'bg-liliac', arrowPosition: '-rotate-180', percentColor: 'bg-failure text-failure', label: 'Outcome',
  },
];

export function MoneyFlow({ type, amount, overall }: MoneyFlowProps) {
  const {
    typeColor, arrowPosition, percentColor, label,
  } = CARD_STYLES[type];

  const percent = overall * amount / 100;

  return (
    <div className="flex h-32 w-[320px] items-center rounded-[20px] bg-purple px-6 py-9">
      <div
        className={`mr-6 flex h-11 w-11 items-center justify-center rounded-lg ${typeColor}`}
      >
        <Image
          className={arrowPosition}
          alt="Arrow"
          width={18}
          height={18}
          src={arrow}
        />
      </div>
      <div className="mr-8">
        <h2 className="text-sm text-dark-grey">
          Total
          {' '}
          {label}
        </h2>
        <h3 className="text-2xl font-bold text-white">
          $
          {Math.abs(amount)}
        </h3>
      </div>
      <div
        className={`self-end rounded-lg bg-opacity-20 px-2 py-1 text-xs ${percentColor}`}
      >
        {percent > 0 && '+'}
        {percent}
        %
      </div>
    </div>
  );
}
