export default function TransactionList({ transactions, onDelete }) {
  return (
    <>
      <div className="w-full">
        <h3 className="text-lg font-bold  mb-3">Transactions</h3>
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border"
            >
              <span className="capitalize font-semibold ">{t.text}</span>
              <span
                className={`font-semibold ${t.amount < 0 ? "text-red-500" : "text-black"}`}
              >
                {t.amount > 0 ? "+" : "-"}${Math.abs(t.amount)}.00
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
