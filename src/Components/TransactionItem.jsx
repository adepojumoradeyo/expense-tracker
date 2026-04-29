import incomemoney from "/public/img-folder/incomemoney.png";
import outgoing from "/public/img-folder/outgoing.png";

export default function TransactionItem({ transaction, onDelete }) {
  return (
    <>
      <div>
        <li className="flex justify-between items-center  bg-white p-4 rounded-xl shadow-sm border">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-slate-200 rounded-lg">
              <img
                src={transaction.amount > 0 ? incomemoney : outgoing}
                alt=""
                className="w-6 h-6"
              />
            </span>
            <span className="capitalize text-lg font-semibold ">
              {transaction.text}
            </span>
          </div>
          <span
            className={`font-semibold ${transaction.amount < 0 ? "text-red-500" : "text-black"}`}
          >
            ${Math.abs(transaction.amount)}
            .00
          </span>
          <button
            onClick={() => onDelete(transaction.id)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            x
          </button>
        </li>
      </div>
    </>
  );
}
