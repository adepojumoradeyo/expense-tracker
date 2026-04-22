export default function IncomeExpense({ income, expense }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-green-500">
          <h4 className="text-2xl font-bold text-green-600 mt-1">Income</h4>
          <p className="text-2xl font-bold text-green-600 mt-1">${income}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-4 border-red-500">
          <h4 className="text-gray-500 text-sm">Expense</h4>
          <p className="text-2xl font-bold text-red-600 mt-1">${expense}</p>
        </div>
      </div>
    </>
  );
}
