import React, { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  income: 0,
  expense: 0,
  history: [],
};

const incomeExpenseStore = createContext(INITIAL_STATE);
const { Provider } = incomeExpenseStore;

const incomeExpenseReducer = (state, action) => {
  switch (action.type) {
    case 'INCOME':
      return {
        ...state,
        income: state.income + Number(action.payload[1]),
        history: [
          ...state.history,
          { text: action.payload[0], amount: action.payload[1] },
        ],
      };
    case 'EXPENSE':
      return {
        ...state,
        expense: state.expense + Number(action.payload[1]),
        history: [
          ...state.history,
          { text: action.payload[0], amount: action.payload[1] },
        ],
      };
    default:
      return state;
  }
};

const IncomeExpense = ({ children }) => {
  const [state, dispatch] = useReducer(incomeExpenseReducer, INITIAL_STATE);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { incomeExpenseStore, IncomeExpense };
