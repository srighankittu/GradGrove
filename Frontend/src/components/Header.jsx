import { FaArrowCircleRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="p-4 m-2">
        <img src="https://adventure.generation.global/themes/custom/gg_theme/assets/components/header/logo-geng.svg" />
      </div>
      <div className="p-4 m-2">
        <div className="flex flex-row p-2 m-2">
          <FaArrowCircleRight className="text-white" />
          <div className="p-2 mt-[-13px] text-white">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
