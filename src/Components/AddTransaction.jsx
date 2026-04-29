import { useState } from "react";

export default function AddTransaction({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const submit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: type === "expense" ? -Number(amount) : Number(amount),
    };
    onAdd(newTransaction);

    setAmount("");
    setText("");
  };

  return (
    <>
      <div className="w-full flex justify-center px-4 pb-6">
        <form
          action=""
          onSubmit={submit}
          className="w-full max-w-full bg-white p-6 rounded-2xl shadow-md space-y-5"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
            Add New Expenses
          </h3>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Category</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className=" outline-none cursor-pointer w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-200 "
            >
              <option value="income">income</option>
              <option value="expense">expense</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm">Desccription</label>
            <input
              type="text"
              name=""
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="amount" className="text-sm">
              Amount
            </label>

            <input
              type="number"
              name=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="enter amount"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
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
