import React from "react";
import { Link } from "react-router-dom";
import { GrNotification } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";

const Header = () => {
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_PORT}/notifications`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className="flex justify-between items-center my-2 border rounded-full px-8 py-5">
      <Link to={"/"}>
        <h2 className="text-3xl uppercase">cipherschools</h2>
      </Link>
      <Link to={"/notifications"} className="relative">
        <div>
          <GrNotification className="text-2xl cursor-pointer" />{" "}
        </div>
        <div className="absolute right-[-10px] top-[-10px] bg-yellow-200 rounded-full h-6 w-6 flex items-center justify-center">
          {notifications?.length}
        </div>
      </Link>
    </div>
  );
};

export default Header;
