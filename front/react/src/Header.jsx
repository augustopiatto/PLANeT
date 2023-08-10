import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlanetSvg from "./assets/svg/PlanetSvg.jsx";

const Header = () => {
  return (
    // TODO: ver jeito melhor de montar essas classes
    <div className="h-[64px] bg-clear-dirt grid grid-cols-10 content-center shadow-dirt-md relative">
      {/* Ainda não sei se vai ter */}
      {/* <div className="h-[40px] grid content-center justify-items-center">
        <FontAwesomeIcon
          icon={["fas", "fa-angles-right"]}
          className="text-2xl cursor-pointer text-dirtier fill-current"
        />
      </div> */}
      <div className="col-span-8 h-[40px] px-[24px] grid content-center justify-items-start">
        <h1>PLANeT</h1>
      </div>
      <PlanetSvg />
      <div className="h-[40px] grid content-center justify-items-center">
        <FontAwesomeIcon
          icon={["fas", "fa-star"]}
          className="text-2xl cursor-pointer text-amber-300 fill-current"
        />
      </div>
      <div className="h-[40px] w-[40px] rounded-full border-2 border-clear-dirt bg-slate-300 grid content-center justify-items-center">
        <FontAwesomeIcon
          icon={["fas", "fa-user-tie"]}
          className="text-2xl cursor-pointer text-slate-500 fill-current"
        />
      </div>
    </div>
  );
};

export default Header;
