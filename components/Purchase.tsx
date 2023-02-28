import { transformDateUS } from '@helpers/time'
import React from 'react'
import { TTransaction } from 'types/common'

export const Purchase = ({ amount, creditorName, date }: TTransaction) => {
  const statusStyles = Number(amount) > 0 ? 'bg-success text-success' : 'bg-failure text-failure'

  return (
    <div className='flex text-white items-center text-sm justify-around'>
      <h4>{creditorName}</h4>
      <h4>{transformDateUS(new Date(date))}</h4>
      <h4>{amount}$</h4>
      <h4 className={`rounded-lg bg-opacity-20 p-1 ${statusStyles}`}>{Number(amount) > 0 ? 'Deposited' : 'Withdrawed'}</h4>
    </div>
  )
}
