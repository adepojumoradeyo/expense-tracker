import incomearrow from "/public/img-folder/incomearrow.svg";
import expensearrow from "/public/img-folder/expensearrow.svg";

export default function IncomeExpense({ income, expense }) {
  return (
    <>
      <div className="flex  items-center  justify-between w-full">
        <div className="py-5 px-2 flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 ">
            <img
              src={incomearrow}
              alt=""
              className="w-6 bg-gray-200 rounded-full"
            />

            <h4 className="text-sm font-bold ">Income</h4>
          </div>
          <p className="text-xl font-bold mt-1">${income}.00</p>
        </div>

        <div className="py-5 px-2 flex flex-col items-center gap-1 ">
          <div className="flex items-center gap-2 ">
            <img
              src={expensearrow}
              alt=""
              className="w-6 bg-gray-200 rounded-full"
            />

            <h4 className=" text-sm font-bold">Expenses</h4>
          </div>
          <p className="text-xl font-bold mt-1">${Math.abs(expense)}.00</p>
        </div>
      </div>
    </>
  );
}
