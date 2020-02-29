import React, { useContext } from "react";
import { ExpenseContext } from "../Context";

const Transactions = props => {
  const { transactions, deleteTransaction, addTransaction } = useContext(
    ExpenseContext
  );

  return (
    <div>
      {transactions.map(transaction => (
        <div className="d-flex flex-wrap py-2" key={transaction.id}>
          <p>{transaction["transactionName"]}&nbsp; </p>
          <p> Amount : {transaction["amount"]}</p>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="btn btn-danger ml-auto"
          >
            {" "}
            Remove
          </button>
        </div>
      ))}
      <button onClick={()=>addTransaction()} className="btn btn-success">Add Tranaction</button>
    </div>
  );
};
export default Transactions;
