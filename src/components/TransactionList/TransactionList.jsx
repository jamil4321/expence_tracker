import React, { useContext } from 'react';
import {Transaction} from './Transaction';
import { GlobalContex } from '../../context/GlobalState';

const TransactionList = () => {

  const { transactions } = useContext(GlobalContex);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=><Transaction key={transaction.id} transaction={transaction}/>)}
      </ul>
    </div>
  )
}

export default TransactionList