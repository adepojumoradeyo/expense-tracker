import { useState } from "react";

export default function AddTransaction({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };
    onAdd(newTransaction);

    setAmount("");
    setText("");
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <form
          action=""
          onSubmit={submit}
          className="w-full max-w-full bg-white p-6 rounded-2xl shadow-md space-y-5"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
            Add New Expenses
          </h3>
          <div className="flex flex-col gap-1">
            <label htmlFor="text" className="text-sm text-gray-600">
              Desccription
            </label>
            <input
              type="text"
              name=""
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="amount" className="text-sm text-gray-600">
              amount
              <br />
              <span className="text-xs text-gray-400">(income, - expense)</span>
            </label>
            <input
              type="number"
              name=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="enter amount"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
