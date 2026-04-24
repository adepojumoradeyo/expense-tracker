import { useState, useEffect } from "react";
import Header from "./assets/Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

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
    <div className="min-h-screen px-4 py-6 sm:px-6 md:px-10 lg:px-20 flex flex-col gap-5">
      <Header name="Phoebe" />
      <div className=" bg-blue-800 flex flex-col items-center gap-10 text-white rounded-2xl p-6 shadow-lg ">
        <Balance balance={balance} />
        <IncomeExpense income={income} expense={expense} />
      </div>
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <AddTransaction onAdd={addTransaction} />
    </div>
  );
}
