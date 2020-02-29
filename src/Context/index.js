import React, { createContext, useReducer } from "react";
import { expenseReducer } from "./expenseReducer";
const initialState = {
  transactions: [
    {
      id: 1,
      transactionName: "dhaba",
      amount: -500
    },
    {
      id: 2,
      transactionName: "coffee",
      amount: -10
    },
    {
      id: 3,
      transactionName: "deepak",
      amount: 600
    }
  ]
};

export const ExpenseContext = createContext(initialState);

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const addTransaction = newTransactionData => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        transactionName: "added new transaction",
        amount: "-200"
      }
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
