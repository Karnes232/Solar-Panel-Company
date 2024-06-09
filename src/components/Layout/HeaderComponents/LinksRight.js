import React from "react";

import { Link } from "gatsby";
import useScrollPosition from "../../../customHooks/useScrollPosition";
import useWindowHeight from "../../../customHooks/useWindowHeight";

const LinksRight = () => {
  const scrollPosition = useScrollPosition();
  const windowHeight = useWindowHeight();
  let linkColor = "text-white";
  if (scrollPosition > windowHeight - 100) {
    linkColor = "text-black";
  }
  return (
    <div className="hidden lg:flex lg:w-[28rem] xl:w-[35rem] lg:justify-between">
      <Link to="/" className="no-underline">
        <button className={`navLinks ${linkColor}`}>Home</button>
      </Link>

      <Link to="/about" className="no-underline">
        <button className={`navLinks ${linkColor}`}>About Us</button>
      </Link>
      <Link to="/gallery" className="no-underline">
        <button className={`navLinks ${linkColor}`}>Gallery</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className={`navLinks ${linkColor}`}>Contact</button>
      </Link>
    </div>
  );
};

export default LinksRight;
