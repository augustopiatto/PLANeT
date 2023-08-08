import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="h-[64px] bg-slate-100 grid grid-cols-10 content-center border-b shadow-md">
      <FontAwesomeIcon
        icon={["fas", "fa-angles-right"]}
        className="text-2xl px-[16px] cursor-pointer"
      />
      <h1 className="col-span-8">PLANeT</h1>
      <FontAwesomeIcon
        icon={["fas", "fa-star"]}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
}

export default Header;
