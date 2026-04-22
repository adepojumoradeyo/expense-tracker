export default function Balance({ balance }) {
  return (
    <>
      <div>
        <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition">
          <h4 className=" text-sm sm:text-base">Balance</h4>
          <h1
            className={`mt-2 text-3xl sm:text-4xl font-bold
            ${balance >= 0 ? "text-white" : "text-red-600"}`}
          >
            ${balance}
          </h1>
        </div>
      </div>
    </>
  );
}
