import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlanetSvg from "./assets/svg/PlanetSvg.jsx";

const Header = () => {
  return (
    <div className="h-[64px] bg-clear-dirt grid grid-cols-10 content-center shadow-dirt-md relative">
      <FontAwesomeIcon
        icon={["fas", "fa-angles-right"]}
        className="text-2xl px-[16px] cursor-pointer"
      />
      <h1 className="col-span-8">PLANeT</h1>
      <PlanetSvg />
      <FontAwesomeIcon
        icon={["fas", "fa-star"]}
        className="text-2xl cursor-pointer text-amber-300 fill-current"
      />
    </div>
  );
};

export default Header;
