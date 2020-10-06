import React, { useContext, useState } from 'react';
import { incomeExpenseStore } from '../../context/income-expense.cotnext';
import './transaction.styles.css';

const Transcation = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const { dispatch } = useContext(incomeExpenseStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number > 0) {
      setText('');
      setNumber(0);
      dispatch({ type: 'INCOME', payload: [text, number] });
    } else if (number < 0) {
      setText('');
      setNumber(0);
      dispatch({ type: 'EXPENSE', payload: [text, number] });
    } else {
    }
  };

  return (
    <div className="transcation">
      <h2 id="transcation-heading">Transcation</h2>
      <form onSubmit={handleSubmit}>
        <label>TEXT</label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
        <label>
          AMOUNT <span>(negative-expense, positive-income)</span>
        </label>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          required
        />
        <br />
        <br />
        <input type="submit" id="submit-btn" />
      </form>
    </div>
  );
};

export default Transcation;
