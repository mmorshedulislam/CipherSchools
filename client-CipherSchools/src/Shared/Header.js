import React from "react";
import { Link } from "react-router-dom";
import { GrNotification } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-5 border rounded-full px-8 py-5">
      <Link>
        <h2 className="text-3xl uppercase">cipherschools</h2>
      </Link>
      <GrNotification className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Header;
