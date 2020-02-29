import React from "react";
import { ExpenseProvider } from "../Context";
import Transactions from "../components/transactions";

const Landing = props => {
  const transactions = [];

  return (
    <ExpenseProvider>
      <div className="home-page d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-12 main-content">
          <h2 className="text-center">Expense Tracker</h2>
          <Transactions />
        </div>
      </div>
    </ExpenseProvider>
  );
};
export default Landing;
