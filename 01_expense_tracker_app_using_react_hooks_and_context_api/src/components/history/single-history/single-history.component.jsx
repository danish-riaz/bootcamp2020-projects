import React from 'react';
import './single-history.styles.css';

const SingleHistory = ({ text, amount }) => {
  return (
    <div className="singleTransaction">
      <p className="item-1">{text}</p>
      <p className={`item-2 ${amount > 0}`}>
        {amount > 0 ? '+' : null}
        {amount}
      </p>
    </div>
  );
};

export default SingleHistory;
