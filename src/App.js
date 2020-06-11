import React from 'react';
import './App.css';
import {Header,TransactionList,AddTransaction,IncomeExpence} from './components';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <IncomeExpence/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
