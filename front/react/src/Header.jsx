import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="h-[48px] bg-slate-100 grid grid-cols-10 border-b shadow-md content-center">
      <FontAwesomeIcon
        icon={["fas", "fa-angles-right"]}
        className="text-2xl px-[16px]"
      />
      <h1 className="col-span-8">PLANeT</h1>
      <FontAwesomeIcon icon={["fas", "fa-star"]} className="text-2xl" />
    </div>
  );
}

export default Header;
