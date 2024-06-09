import React from "react";
import Logo from "./Logo";
import LinksRight from "./LinksRight";

const Header = () => {
  return (
    <>
      <nav className="bg-transparent w-screen z-[100] h-24 md:h-36 fixed top-0 ">
        <div className="flex items-center justify-between bg-transparent max-w-6xl my-5 md:mx-10 lg:mx-8 xl:mx-auto">
          <Logo />
          <LinksRight />
        </div>
      </nav>
    </>
  );
};

export default Header;
