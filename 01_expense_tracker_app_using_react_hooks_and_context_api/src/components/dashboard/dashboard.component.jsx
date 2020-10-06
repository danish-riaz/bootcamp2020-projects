import React, { useContext } from 'react';
import { incomeExpenseStore } from '../../context/income-expense.cotnext';
import './dashboard.styles.css';

const DashBoard = () => {
  const { state } = useContext(incomeExpenseStore);
  const { income, expense } = state;
  return (
    <div className="dashBoard">
      <p>YOUR BALANCE</p>
      <h1>$ {income + expense}</h1>
      <div className="dashBoardInnerContainer">
        <div>
          <p id="income">INCOME</p>
          <h2>$ {income}</h2>
        </div>
        <div id="dashboardDivider">
          <p id="expense">EXPENSE</p>
          <h2>$ {expense}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
