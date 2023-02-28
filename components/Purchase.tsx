import { transformDateUS } from '@helpers/time'
import React from 'react'
import { TransactionTypes } from 'types/common'

export const Purchase = ({ amount, category, creditorName, currency, date, id }: TransactionTypes) => {
  return (
    <div className='flex text-white text-sm justify-around'>
      <h4>{creditorName}</h4>
      <h4>{transformDateUS(new Date(date))}</h4>
      <h4>{amount}$</h4>
      <h4>{Number(amount) > 0 ? 'Deposited' : 'Withdrawed'}</h4>
    </div>
  )
}
