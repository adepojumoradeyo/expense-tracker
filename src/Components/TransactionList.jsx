import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <>
      <div className="px-4 pt-6 mt-10">
        <h3 className="text-3xl font-semibold  mb-3">Transactions </h3>
        <div className=" py-5 ">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(transactions || []).map((tx) => (
              <TransactionItem
                key={tx.id}
                transaction={tx}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
