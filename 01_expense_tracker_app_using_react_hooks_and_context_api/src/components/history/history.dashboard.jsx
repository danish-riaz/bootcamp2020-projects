import React, { useContext } from 'react';
import SingleHistory from './single-history/single-history.component';
import { incomeExpenseStore } from '../../context/income-expense.cotnext';
import './history.styles.css';

const History = () => {
  const { state } = useContext(incomeExpenseStore);
  const history = state.history;
  return (
    <div className="history">
      <h2 id="history-heading">History</h2>
      {history.map((item) => (
        <SingleHistory
          key={item.text + Math.floor(Math.random() * 100 + 10)}
          text={item.text}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default History;
