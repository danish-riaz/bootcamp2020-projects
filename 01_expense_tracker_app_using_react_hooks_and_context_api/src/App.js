import React from 'react';
import './App.css';

import DashBoard from './components/dashboard/dashboard.component';
import History from './components/history/history.dashboard';
import Transcation from './components/transaction/transaction.component';

function App() {
  return (
    <div className="container">
      <h1 className="app-heading">Expense Tracker App</h1>
      <DashBoard />
      <History />
      <Transcation />
    </div>
  );
}

export default App;
