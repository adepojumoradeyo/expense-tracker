import incomearrow from "/src/incomearrow.svg";
import expensearrow from "/src/expensearrow.svg";

export default function IncomeExpense({ income, expense }) {
  return (
    <>
      <div className="flex  items-center  justify-between w-full">
        <div className=" flex items-center gap-2">
          <img
            src={incomearrow}
            alt=""
            className="w-6 bg-slate-50 rounded-full"
          />
          <div>
            <h4 className="text-sm font-bold text-white ">Income</h4>
            <p className="text-xl font-bold text-white mt-1">{income}.00</p>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <img
            src={expensearrow}
            alt=""
            className="w-6 bg-slate-50 rounded-full"
          />
          <div>
            <h4 className=" text-sm font-bold text-white">Expenses</h4>
            <p className="text-xl font-bold text-white mt-1">{expense}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}
