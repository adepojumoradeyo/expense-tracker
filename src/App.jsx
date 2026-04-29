import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import AddTransaction from "./Components/AddTransaction";
import TransactionList from "./Components/TransactionList";
import TransactionItem from "./Components/TransactionItem";

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const amounts = transactions.map((transaction) => transaction.amount);

  const balance = amounts.reduce((acc, item) => acc + item, 0);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen sm:px-6 md:px-10 lg:px-20 flex flex-col gap-5">
      <div className="bg-blue-800 flex flex-col gap-5 rounded-b-lg">
        <Header />
        <div className="px-4 py-6 -mb-12 bg-white w-11/12 self-center flex flex-col items-center gap-14  rounded-2xl shadow-lg ">
          <Balance balance={balance} />
          <IncomeExpense income={income} expense={expense} />
        </div>
      </div>
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <AddTransaction onAdd={addTransaction} />
    </div>
  );
}
