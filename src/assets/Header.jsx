import picture from "/src/assets/picture.jpg";

export default function Header(props) {
  return (
    <>
      <div className="flex items-center gap-3 py-2 ">
        <img src={picture} alt="" className="w-14 h-14 rounded-full" />
        <div className="mt-5">
          <h1 className="font-bold">Hello, {props.name}</h1>
          <p className="font-semibold">Track your expenses</p>
        </div>
      </div>
    </>
  );
}
