import picture from "/public/img-folder/picture.jpg";

export default function Header() {
  return (
    <>
      <div className="flex items-center gap-3 py-2 px-3 md:px-5 lg:px-8 xl:px-11 2xl:px-15 text-white ">
        <img src={picture} alt="" className="w-14 h-14 rounded-full" />
        <div className="mt-5">
          <h1 className="font-semibold">Hello </h1>
          <p className="font-thin">Track your expenses</p>
        </div>
      </div>
    </>
  );
}
