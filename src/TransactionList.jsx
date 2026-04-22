export default function TransactionList({ transactions, onDelete }) {
  return (
    <>
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-3">History</h3>
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border"
            >
              <span className="text-gray-700">{t.text}</span>
              <span
                className={`font-semibold ${
                  t.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                ${t.amount}
              </span>
              <button
                onClick={() => onDelete(t.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
