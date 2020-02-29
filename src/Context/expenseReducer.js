export const expenseReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { id: state.transactions.length + 1, ...action.payload }
        ]
      };
    default:
      return state;
  }
};
