export default function Balance({ balance }) {
  return (
    <>
      <div>
        <div>
          <h4 className=" text-sm text-center sm:text-base">Total Balance</h4>
          <h1
            className={`mt-2 text-3xl sm:text-4xl font-bold
            ${balance >= 0 ? "text-white" : "text-red-600"}`}
          >
            $ {balance}.00
          </h1>
        </div>
      </div>
    </>
  );
}
