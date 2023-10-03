import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full h-[90px] z-10 flex items-center">
      <Logo />
    </div>
  );
};

export default Header;
