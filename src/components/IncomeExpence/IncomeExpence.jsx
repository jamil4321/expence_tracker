import React, { useContext } from 'react';
import { GlobalContex } from '../../context/GlobalState';

const IncomExpence = () => {
  const { transactions } = useContext(GlobalContex)
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1);
  return (
    <div>
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>
    </div>
  )
}

export default IncomExpence