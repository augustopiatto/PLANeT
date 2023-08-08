import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="h-[48px] bg-slate-100 flex">
      <h2>PLANeT</h2>
      <FontAwesomeIcon icon={["fas", "fa-star"]} />
    </div>
  );
}

export default Header;
