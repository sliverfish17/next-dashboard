import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import { MoneyFlow } from 'components/MoneyFlow';
import { MoneyTypes, TransactionTypes } from 'types/common';
import { Transactions } from 'components/Transactions';
import settings from 'assets/settings.svg'
import user from 'assets/user.svg'
import icon from 'assets/icon.png'

const SANS = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

type Transactions = {
  transactions: TransactionTypes[];
};

export default function Home({
  data: { transactions },
}: {
  data: Transactions;
}) {
  const overallSum = transactions.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue.amount),
    0,
  );

  return (
    <>
      <Head>
        <title>Income Dashboard</title>
        <meta name="description" content="Simple income dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`flex h-screen w-screen bg-main ${SANS.className}`}>
        <aside className="rounded-tb-[20px] h-full w-24 rounded-br-[20px] bg-white px-4 pt-8">
          <Image
            className="mx-auto mb-6"
            width={50}
            height={50}
            alt="Logo"
            src={icon}
          />
          <span className="mb-9 block h-[1px] w-full bg-black opacity-20" />
          <Image
            className="mx-auto mb-6 cursor-pointer"
            alt="User"
            width={26}
            height={26}
            src={user}
          />

          <Image
            className="mx-auto cursor-pointer"
            alt="User"
            width={26}
            height={26}
            src={settings}
          />
        </aside>
        <main className="pt-10 pl-7">
          <h1 className="mb-9 text-[40px] font-medium leading-[56px] text-black">
            Dashboard
          </h1>
          <div className="mb-8 grid grid-cols-2 gap-10">
            <MoneyFlow
              amount={600}
              overall={overallSum}
              type={MoneyTypes.Income}
            />
            <MoneyFlow
              amount={-200}
              overall={overallSum}
              type={MoneyTypes.Outcome}
            />
          </div>
          <div className="flex">
            <Transactions transactions={transactions} />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://c8ba3234-0cd5-4176-8def-44f7b79b2f8c.mock.pstmn.io/transactions',
  );

  const data = await res.json();

  return { props: { data } };
}
