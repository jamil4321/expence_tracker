import React,{useContext} from 'react';
import {GlobalContex} from '../../context/GlobalState';
export const Transaction = ({ transaction }) => {
    const {deleteAction} = useContext(GlobalContex);

    const sing = transaction.amount > 0 ? "+" : "-" ;
    return (

        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span> {sing}${Math.abs(transaction.amount)}</span>
            <button onClick={()=>deleteAction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}